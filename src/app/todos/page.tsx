import React from 'react'
import { TodosList } from './TodosList'

const Todos = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <TodosList />
        </main>
    )
}

export default Todos
