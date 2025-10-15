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

## License

MIT License
