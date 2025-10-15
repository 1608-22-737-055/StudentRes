const StudentList = ({ students, onEdit, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th><th>Roll</th><th>Marks</th><th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {students.map(student => (
        <tr key={student.id}>
          <td>{student.name}</td>
          <td>{student.roll}</td>
          <td>{student.marks}</td>
          <td>
            <button onClick={() => onEdit(student)}>Edit</button>
            <button onClick={() => onDelete(student.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default StudentList;
