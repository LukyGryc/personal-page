const MainPage = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <div className="w-full max-w-7xl mx-auto flex flex-col">
                {children}
            </div>
        </main>
    )
}

export default MainPage