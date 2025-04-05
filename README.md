# Notes App

A real-time note-taking application built with React and Firebase, featuring user authentication and CRUD operations for notes.

## Features

### Authentication
- User registration with email and password
- User login with email and password
- Protected routes for authenticated users
- Automatic redirect to dashboard after authentication
- Secure logout functionality

### Note Management
- Create new notes with text content
- View all notes in a responsive grid layout
- Edit existing notes in real-time
- Delete unwanted notes
- Notes are private and user-specific
- Real-time updates using Firebase Firestore

## Technologies Used
- React.js
- Firebase Authentication
- Firebase Firestore
- React Router DOM
- React Toastify
- CSS for styling

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/garvsharrma/Notes.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project and get your configuration:
   - Go to Firebase Console
   - Create a new project
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Get your Firebase configuration object

4. Create a `.env` file in the root directory and add your Firebase configuration:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### Running the App

1. Start the development server:
```bash
npm start
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Register a new account or login with existing credentials
2. Once authenticated, you'll be redirected to the dashboard
3. Create notes using the input field at the top
4. View all your notes in the grid below
5. Edit notes by clicking the edit (✏️) button
6. Delete notes by clicking the delete (🗑️) button
7. Logout using the button in the top-right corner

## Project Structure
```
notes-app/
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── Dashboard.js
│   ├── firebase/
│   │   └── config.js
│   └── App.js
└── public/
```