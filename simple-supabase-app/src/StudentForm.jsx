import { useState, useEffect } from "react";

const StudentForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({
    id: null,
    name: "",
    roll: "",
    marks: ""
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        id: initialData.id,    // Include id for updates
        name: initialData.name,
        roll: initialData.roll,
        marks: initialData.marks
      });
    } else {
      // Reset form when not editing
      setForm({
        id: null,
        name: "",
        roll: "",
        marks: ""
      });
    }
  }, [initialData]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    if (!initialData) {
      // Only reset if we're not editing
      setForm({ id: null, name: "", roll: "", marks: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input 
        name="name" 
        value={form.name} 
        onChange={handleChange} 
        placeholder="Name" 
        required 
      />
      <input 
        name="roll" 
        value={form.roll} 
        onChange={handleChange} 
        placeholder="Roll No" 
        required 
      />
      <input 
        name="marks" 
        value={form.marks} 
        onChange={handleChange} 
        placeholder="Marks" 
        required 
        type="number" 
      />
      <button type="submit" className="button">
        {initialData ? "Update" : "Add"} Student
      </button>
    </form>
  );
};

export default StudentForm;
