
export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li
      className={task.completed ? "completed" : ""}
      onClick={() => toggleTask(task.id)}
    >
      <span>{task.text}</span>
      <button onClick={(e) => {
        e.stopPropagation();
        deleteTask(task.id);
      }}>❌</button>
    </li>
  );
}
