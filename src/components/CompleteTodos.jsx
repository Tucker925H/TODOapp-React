import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickback } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-low">
              <li>{todo}</li>
              <button onClick={() => onClickback(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
