import { useState } from "react";
import RenderTip from "../RenderTip";
import TodoFilter from "../TodoFilter";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [filterType, setFilterType] = useState('all');

  return (
    <section className="todo-list" data-name="TodoList">
      <RenderTip />
      <TodoFilter filterType={filterType} onFilterChange={setFilterType}/>
    </section>
  )
};
export default TodoList;