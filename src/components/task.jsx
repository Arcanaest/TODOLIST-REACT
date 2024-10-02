export const Task = ({
  value,
  isCompleted,
  date,
  id,
  onComplete,
  onDelete,
}) => {
  return (
    <li className={`todo__item ${isCompleted ? "completed" : ""}`}>
      <span className="todo__task">
        <span>{value}</span>
        <span className="todo__date">{date}</span>
      </span>
      <span
        className="todo__action todo__action_complete"
        onClick={() => onComplete(id)}
      ></span>
      <span
        className="todo__action todo__action_delete"
        onClick={() => onDelete(id)}
      ></span>
    </li>
  );
};
