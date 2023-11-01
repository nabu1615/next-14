import React from 'react'
import { Todo } from '../../../typings';
import { notFound } from 'next/navigation';


type pageProps = {
    params: {
        todoId: string
    }
}

const fetchTodo = async (todoId: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        next: { revalidate: 60 }
    })
    const todo = await res.json()
    return todo
}

const Todo = async ({ params: { todoId } }: pageProps) => {
    const todo: Todo = await fetchTodo(todoId);

    if (!todo.id) {
        return notFound();
    }

    return (
        <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg text-black'>
            <p>#{todo.id}: {todo.title}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
            <p className='border-t border-black mt-5 text-right'>
                By User: {todo.userId}
            </p>
        </div>
    )
}

export default Todo;

export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos: Todo[] = await res.json()

    // limit to 10
    const limit = todos.splice(0, 10)

    return limit.map(todo => ({
        todoId: todo.id.toString()
    }))
}
