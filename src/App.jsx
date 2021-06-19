import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [inconpleteTodos, setInconpleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inconpleteTodos, todoText];
    setInconpleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...inconpleteTodos];
    newTodos.splice(index, 1);
    setInconpleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...inconpleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, inconpleteTodos[index]];
    setInconpleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickback = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...inconpleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setInconpleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={inconpleteTodos.length >= 5}
      />
      {inconpleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodoは５個までです。消化して下さい。
        </p>
      )}
      <IncompleteTodos
        todos={inconpleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickback={onClickback} />
    </>
  );
};
