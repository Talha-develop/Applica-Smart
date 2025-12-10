# Backend API Setup Guide for Applica Smart

This document provides the backend API structure needed for the Applica Smart frontend.

## Technology Stack (Recommended)

- **Node.js** + **Express.js** (REST API)
- **MongoDB** (Database)
- **Mongoose** (ODM)
- **JWT** (Authentication)
- **bcrypt** (Password hashing)
- **dotenv** (Environment variables)

## Required API Endpoints

### Authentication Routes (`/api/auth`)

#### 1. POST `/api/auth/signup`

**Request Body:**

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

**Response (Success - 201):**

```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "fullName": "John Doe",
    "email": "john@example.com",
    "profileCompleted": false
  }
}
```

#### 2. POST `/api/auth/login`

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "SecurePass123!",
  "rememberMe": false
}
```

**Response (Success - 200):**

```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "fullName": "John Doe",
    "email": "john@example.com",
    "profileCompleted": false
  }
}
```

### User Profile Routes (`/api/user`)

#### 3. GET `/api/user/profile`

**Headers:** `Authorization: Bearer <token>`

**Response (Success - 200):**

```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "fullName": "John Doe",
    "email": "john@example.com",
    "profileCompleted": false,
    "education": [],
    "skills": [],
    "experience": [],
    "areaOfInterest": null
  }
}
```

## MongoDB Schema Structure

### User Schema

```javascript
{
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hashed
  profileCompleted: { type: Boolean, default: false },
  areaOfInterest: { type: String }, // e.g., "Backend Developer"
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

### Education Schema (Sub-document)

```javascript
{
  userId: { type: ObjectId, ref: 'User', required: true },
  level: { type: String, enum: ['school', 'college', 'university'], required: true },
  institutionName: { type: String, required: true },
  year: { type: Number, required: true },
  percentage: { type: Number }, // for school & college
  cgpa: { type: Number }, // for university
  createdAt: { type: Date, default: Date.now }
}
```

### Skills Schema (Sub-document)

```javascript
{
  userId: { type: ObjectId, ref: 'User', required: true },
  skillName: { type: String, required: true },
  proficiency: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'] },
  createdAt: { type: Date, default: Date.now }
}
```

### Experience Schema (Sub-document)

```javascript
{
  userId: { type: ObjectId, ref: 'User', required: true },
  company: { type: String, required: true },
  role: { type: String, required: true },
  duration: {
    from: { type: Date, required: true },
    to: { type: Date } // null if current
  },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
}
```

## Environment Variables (.env)

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/applica-smart
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

## CORS Configuration

Make sure to configure CORS to allow requests from your frontend:

```javascript
const cors = require("cors");
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
```

## Error Response Format

All errors should follow this format:

```json
{
  "success": false,
  "message": "Error message here",
  "errors": [] // Optional: validation errors array
}
```

## Authentication Flow

1. User signs up → Server creates user → Returns JWT token
2. Frontend stores token in localStorage
3. All subsequent requests include: `Authorization: Bearer <token>`
4. Backend middleware validates token on protected routes
5. If token invalid/expired → Return 401 Unauthorized → Frontend redirects to login

## Next Steps for Backend Development

1. Set up Express.js server
2. Connect to MongoDB using Mongoose
3. Create User, Education, Skills, Experience models
4. Implement authentication routes with JWT
5. Add middleware for token validation
6. Implement user profile routes
7. Add validation using express-validator or Joi
8. Test all endpoints using Postman or Thunder Client

## Frontend Configuration

The frontend is configured to call: `http://localhost:5000/api`

Update the `.env` file in the frontend project:

```
VITE_API_URL=http://localhost:5000/api
```

---

**Note:** This is the initial authentication and user management setup. Job application automation features will be added in the next phase.
