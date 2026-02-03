const MainPage = ({ children }: { children: React.ReactNode }) => {
    return (
        <main id="main-content" className="px-4 pt-20 md:pt-24">
            <div className="w-full max-w-7xl mx-auto flex flex-col">
                {children}
            </div>
        </main>
    )
}

export default MainPage