import React from "react";
import RenderTip from "../RenderTip";
import style from "./TodoItem.module.scss";

const TodoItem = (props) => {
  const { id, text, done, onToggleItem, onDeleteItem } = props;

  const atClick = () => {
    onToggleItem(id);
  };

  return (
    <section data-name="TodoItem" data-gradient className="style-3">
      <RenderTip/>
      <div data-active={done} className={style.todoItem} onClick={atClick}>
        {text}
      </div>
      <button 
      className="button" 
      onClick={() => {
        onDeleteItem?.(id);
      }}
      >
        Detele
      </button>
    </section>
  );
};
export default React.memo(TodoItem);