import { TodosList } from "./TodosList"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="flex" lang="en">
            <div>
                <TodosList />
            </div>
            <div className="flex-1"> {children}</div>
        </main>
    )
}