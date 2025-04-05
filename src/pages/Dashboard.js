import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import "./Dashboard.css";

const Dashboard = () => {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);
  const user = auth.currentUser;

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "notes"), (snapshot) => {
      const allNotes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const userNotes = allNotes.filter((note) => note.uid === user.uid);
      setNotes(userNotes);
    });

    return () => unsub();
  }, [user.uid]);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;

    if (editId) {
      await updateDoc(doc(db, "notes", editId), {
        text: noteText,
      });
      setEditId(null);
    } else {
      await addDoc(collection(db, "notes"), {
        text: noteText,
        uid: user.uid,
        createdAt: Date.now(),
      });
    }

    setNoteText("");
  };

  const handleEdit = (note) => {
    setNoteText(note.text);
    setEditId(note.id);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "notes", id));
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {user.email}</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <form className="note-form" onSubmit={handleAddNote}>
        <input
          type="text"
          placeholder="Write your note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      <div className="notes-grid">
        {notes.length === 0 ? (
          <p>No notes yet. Start writing!</p>
        ) : (
          notes.map((note) => (
            <div className="note-card" key={note.id}>
              <p>{note.text}</p>
              <div className="actions">
                <button onClick={() => handleEdit(note)}>✏️</button>
                <button onClick={() => handleDelete(note.id)}>🗑️</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
