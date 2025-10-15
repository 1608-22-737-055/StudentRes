import { useState, useEffect } from "react";

const StudentForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    marks: ""
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        roll: initialData.roll,
        marks: initialData.marks
      });
    }
  }, [initialData]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    if (!initialData) {
      setForm({ name: "", roll: "", marks: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="roll" value={form.roll} onChange={handleChange} placeholder="Roll No" required />
      <input name="marks" value={form.marks} onChange={handleChange} placeholder="Marks" required type="number" />
      <button type="submit">{initialData ? "Update" : "Add"} Student</button>
    </form>
  );
};

export default StudentForm;
