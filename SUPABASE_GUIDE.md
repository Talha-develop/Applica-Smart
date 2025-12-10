# Supabase Integration Guide

## Overview

This project uses **Supabase** as the backend service instead of MongoDB + Express. Supabase provides:

- PostgreSQL database
- Authentication (Email, OAuth providers)
- Real-time subscriptions
- Storage for file uploads (resumes, documents)
- Row Level Security (RLS)

## Setup Steps (To Be Implemented)

### 1. Install Supabase Client

```bash
npm install @supabase/supabase-js
```

### 2. Environment Variables

Create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Database Schema (Planned)

#### Users Table

- Extended from Supabase Auth users
- Additional fields: phone, location, preferences

#### Resumes Table

- user_id (foreign key)
- file_url
- parsed_data (JSON)
- created_at, updated_at

#### Job_Applications Table

- id
- user_id (foreign key)
- job_title
- company_name
- job_url
- status (pending, applied, response, interview, rejected)
- applied_at
- response_at
- notes

#### User_Preferences Table

- user_id (foreign key)
- target_roles (array)
- locations (array)
- salary_min, salary_max
- work_type (remote, hybrid, onsite)
- auto_apply_enabled

### 4. Authentication Flow

#### Sign Up

```typescript
const { data, error } = await supabase.auth.signUp({
  email: email,
  password: password,
  options: {
    data: {
      full_name: fullName,
    },
  },
});
```

#### Login

```typescript
const { data, error } = await supabase.auth.signInWithPassword({
  email: email,
  password: password,
});
```

#### Logout

```typescript
const { error } = await supabase.auth.signOut();
```

#### OAuth (Google, GitHub)

```typescript
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: "google",
  options: {
    redirectTo: `${window.location.origin}/dashboard`,
  },
});
```

### 5. File Storage (Resume Uploads)

```typescript
const { data, error } = await supabase.storage
  .from("resumes")
  .upload(`${userId}/resume.pdf`, file);
```

### 6. Real-time Subscriptions

```typescript
const subscription = supabase
  .channel("job_applications")
  .on(
    "postgres_changes",
    { event: "*", schema: "public", table: "job_applications" },
    (payload) => {
      console.log("Change received!", payload);
    }
  )
  .subscribe();
```

## Benefits of Supabase vs MongoDB

1. **Built-in Auth**: No need to implement JWT, password hashing, etc.
2. **Type Safety**: PostgreSQL provides better type safety
3. **Real-time**: Built-in real-time subscriptions
4. **Storage**: Integrated file storage
5. **Free Tier**: Generous free tier for development
6. **Row Level Security**: Database-level security policies
7. **PostgreSQL**: More suitable for relational data (users, applications, etc.)

## Next Steps

1. Create Supabase project at https://supabase.com
2. Install @supabase/supabase-js
3. Create database tables
4. Implement authentication hooks
5. Create API service layer
6. Add protected route components

## File Structure (Planned)

```
src/
  lib/
    supabase.ts          # Supabase client initialization
  hooks/
    useAuth.tsx          # Authentication hook
    useApplications.tsx  # Job applications hook
  services/
    auth.service.ts      # Auth operations
    resume.service.ts    # Resume operations
    jobs.service.ts      # Job application operations
```
