const StudentList = ({ students, onEdit, onDelete }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Roll</th>
        <th>Marks</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {students.map(student => (
        <tr key={student.id}>
          <td>{student.name}</td>
          <td>{student.roll}</td>
          <td>{student.marks}</td>
          <td className="actions">
            <button 
              onClick={() => onEdit(student)} 
              className="button edit-button"
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete(student.id)} 
              className="button delete-button"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default StudentList;
