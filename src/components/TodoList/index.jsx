import { useState, useCallback, useMemo, useEffect } from "react";
import RenderTip from "../RenderTip";
import TodoFilter from "../TodoFilter";
import TodoForm from "../TodoForm";


const TodoList = () => {
  const [list, setList] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  const atAddItem = useCallback((text) => {
    setLoading(true);
    addTodo(text)
      .then(setList)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const atToggleItem = useCallback((id) => {
    setLoading(true);
    toggleTodo(id)
      .then(setList)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const atDeleteItem = useCallback((id) => {
    setLoading(true);
    deleteTodo(id)
      .then(setList)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filtersList = useMemo(() => {
    return list.filter((todo) => {
      if (filterType === 'completed') {
        return todo.done;
      }
      if (filterType === 'active') {
        return !todo.done;
      }
      return true;
    })
  }, [list, filterType]);

  return (
    <section className="todo-list" data-name="TodoList">
      {loading && <div className="my-spinner" />}
      <RenderTip />
      <TodoForm onAddItem={atAddItem}/>
      <TodoFilter filterType={filterType} onFilterChange={setFilterType}/>
      <div className="my-3">
        {filtersList.map((item) => {
          <TodoItem
            key={item.id}
            id={item.id}
            done={item.done}
            text={item.text}
            onToggleItem={atToggleItem}
            onDeleteItem={atDeleteItem}
          />
        })}
      </div>
    </section>
  )
};
export default TodoList;