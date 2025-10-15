import { useState, useEffect } from "react";
import supabase from "../supabaseClient";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import "./styles.css";  // Import the CSS

function App() {
  console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
  console.log('Supabase Key:', import.meta.env.VITE_SUPABASE_ANON_KEY?.slice(0, 10) + '...');
  
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchStudents = async () => {
    let { data, error } = await supabase.from("students").select();
    if (error) console.error("Fetch error:", error);
    setStudents(data || []);
  };

  useEffect(() => { fetchStudents(); }, []);

  const addStudent = async student => {
    // Remove id for new students
    const { id, ...newStudent } = student;
    
    // Ensure marks is a number
    newStudent.marks = Number(newStudent.marks);

    const { error } = await supabase
      .from("students")
      .insert([newStudent]);
    
    if (error) {
      console.error("Insert error:", error);
      return;
    }
    
    fetchStudents();
  };

  const updateStudent = async student => {
    if (!student.id) {
      console.error("Update error: Missing student ID");
      return;
    }

    const { id, ...updatedStudent } = student;
    updatedStudent.marks = Number(updatedStudent.marks);

    const { error } = await supabase
      .from("students")
      .update(updatedStudent)
      .eq("id", id);  // Use the id we extracted

    if (error) {
      console.error("Update error:", error);
      return;
    }

    setEditing(null);
    fetchStudents();
  };

  const deleteStudent = async id => {
    const { error } = await supabase.from("students").delete().eq("id", id);
    if (error) console.error("Delete error:", error);
    fetchStudents();
  };

  return (
    <div className="container">
      <h1 className="title">Student Management System</h1>
      <StudentForm onSubmit={editing ? updateStudent : addStudent} initialData={editing} />
      <StudentList students={students} onEdit={setEditing} onDelete={deleteStudent} />
    </div>
  );
}
export default App;
