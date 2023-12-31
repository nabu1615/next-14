import React from 'react'
import { Todo } from '../../typings';

const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');

    const todos: Todo[] = await res.json();

    return todos;
}

export const TodosList = async () => {
    const todos = await fetchTodos();
    return (
        <>
            {todos.map((todo) => (
                <p key={todo.id}>
                    <a href={`/todos/${todo.id}`}>Todo: {todo.title}</a>
                </p>
            ))}
        </>
    )
}
