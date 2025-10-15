# Student Management System with Supabase and React

A simple CRUD application built with React and Supabase for managing student records.

## Features

- Add new students with name, roll number, and marks
- View list of all students in a clean table format
- Edit existing student records
- Delete student records
- Real-time updates with Supabase backend

## Tech Stack

- React + Vite
- Supabase (Backend as a Service)
- CSS for styling

## Project Structure

```
simple-supabase-app/
├── src/
│   ├── App.jsx           # Main application component
│   ├── StudentForm.jsx   # Form component for adding/editing students
│   ├── StudentList.jsx   # Table component for displaying students
│   └── styles.css        # Global styles
├── supabaseClient.js     # Supabase client configuration
├── .env.local           # Environment variables (not committed)
├── .env.local.example   # Example environment template
└── README.md
```

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd simple-supabase-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a Supabase project:
- Go to [supabase.com](https://supabase.com)
- Create a new project
- Create a table named `students` with the following schema:
  ```sql
  id: bigint (primary key, auto-increment)
  name: text (required)
  roll: text (required)
  marks: integer (required)
  ```

4. Set up environment variables:
- Copy `.env.local.example` to `.env.local`
- Add your Supabase URL and Anon Key from your Supabase project settings

5. Run the development server:
```bash
npm run dev
```

## Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add the following environment variables in Vercel:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy!

## Environment Variables

Required environment variables:
```
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Security Notes

- Never commit `.env.local` to version control
- Always use environment variables for sensitive information
- Enable Row Level Security (RLS) in Supabase for production deployments

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request


## Implementation Details

### Core Components

#### 1. Supabase Client (`supabaseClient.js`)
- Initializes Supabase connection using environment variables
- Handles authentication and database connections
- Creates reusable client instance for the application

#### 2. Main Application (`App.jsx`)
- Manages application state and data flow
- Implements CRUD operations:
  - Fetches student list
  - Adds new students
  - Updates existing records
  - Deletes student entries
- Handles component communication and state updates

#### 3. Form Handler (`StudentForm.jsx`)
- Manages form state and validation
- Handles both create and update operations
- Implements dynamic form reset
- Provides user feedback for actions

#### 4. Data Display (`StudentList.jsx`)
- Renders student data in tabular format
- Implements action buttons for edit/delete
- Manages user interactions with data

## Supabase Configuration

### Database Setup
1. Create new Supabase project
2. Create `students` table:
```sql
create table students (
  id bigint primary key generated always as identity,
  name text not null,
  roll text not null,
  marks integer not null
);
```

### Security Settings
1. Enable Row Level Security (RLS)
2. Add public access policy:
```sql
CREATE POLICY "Enable anonymous access"
ON "public"."students"
FOR ALL 
TO anon
USING (true)
WITH CHECK (true);
```

### Environment Configuration
Required variables in `.env.local`:
```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Deployment Notes
- Never commit `.env.local`
- Set up environment variables in deployment platform
- Enable RLS in production
- Use proper security policies
