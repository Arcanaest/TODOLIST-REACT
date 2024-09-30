export const Filter = () => {
  return (
    <select className="todo__options">
      <option value="all">все</option>
      <option value="active">активные</option>
      <option value="completed">завершённые</option>
    </select>
  );
};
