# � Notes App with JWT Authentication

A simple **notes-taking application** with user authentication built using **Express.js** and **JWT** (JSON Web Tokens).

Users can sign up, sign in, and manage their personal notes. Each user's notes are secured with token-based authentication.

---

## 🚀 Features

✅ **User Authentication**
- User signup with username & password
- User signin with credentials
- JWT token generation for secure sessions
- Token-based authorization for protected routes

✅ **Notes Management**
- Create notes (authenticated users only)
- Retrieve personal notes
- Notes are associated with the logged-in user

✅ **Real-time Updates**
- Add notes and see them instantly
- Load notes from server

---

## ⚙️ Tech Stack

- **Frontend:** HTML, JavaScript (Axios)
- **Backend:** Node.js, Express.js
- **Authentication:** JWT (jsonwebtoken)

---

## 📂 Project Structure

```
auth/
├── index.js                # Backend server with all routes
├── frontend/
│   ├── index.html         # Notes dashboard (protected)
│   ├── signup.html        # User registration page
│   └── signin.html        # User login page
├── package.json
└── readme.md
```

---

## 🔌 API Endpoints

### Authentication Routes

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/signup` | Serve signup page |
| `POST` | `/signup` | Register a new user |
| `GET` | `/signin` | Serve signin page |
| `POST` | `/signin` | Login user & return JWT token |

### Notes Routes (Protected)

| Method | Route | Headers | Description |
|--------|-------|---------|-------------|
| `POST` | `/notes` | `token` | Create a new note |
| `GET` | `/notes` | `token` | Fetch all notes for logged-in user |

### Other Routes

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/` | Serve notes dashboard |

---

## 🔐 Authentication Flow

1. **Signup**: User submits username & password → new user is added to the users array
2. **Signin**: User submits credentials → JWT token is generated and returned
3. **Protected Routes**: Token must be sent in request headers to access `/notes` endpoints

---

## 🧪 How to Use

### Setup

```bash
npm install
node index.js
```

Server runs on `http://localhost:3000`

### Workflow

1. Visit `http://localhost:3000/signup` → Create an account
2. Visit `http://localhost:3000/signin` → Login with credentials
3. Token is saved to localStorage automatically
4. Redirected to `http://localhost:3000/` → Notes dashboard
5. Create and view your notes

---

## ⚠️ Limitations & Learning Scope

This project demonstrates **fundamental concepts** and has intentional limitations:

- ❌ **In-memory storage** → data is lost when server restarts (no database)
- ❌ **Plain text passwords** → not hashed or encrypted
- ❌ **No input validation** → doesn't validate username/password strength
- ❌ **No HTTPS** → not secure for production use
- ❌ **Secret key hardcoded** → JWT secret is exposed in code
- ❌ **No error handling** → minimal error messages and edge cases

---

## 🧠 Key Concepts Learned

- **JWT tokens**: How to generate and verify tokens for stateless authentication
- **Protected routes**: Using middleware/headers to restrict access
- **Token storage**: Storing tokens in localStorage for client-side persistence
- **User-specific data**: Associating data (notes) with authenticated users
- **Client-server architecture**: Frontend consuming backend APIs securely

---

## 🔮 Future Improvements

- Implement a database (MongoDB / PostgreSQL)
- Add password hashing (bcrypt)
- Input validation & sanitization
- Error handling & status codes
- User logout functionality
- Edit & delete notes
- Refresh token logic
- HTTPS/TLS security
- Rate limiting

---

## 📌 Notes

This is a **learning/practice project** focusing on understanding authentication and protected routes in Express.js. It is **not production-ready**.
