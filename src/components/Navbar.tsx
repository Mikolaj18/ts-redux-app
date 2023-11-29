const Navbar = () => {
    return (
        <nav className="flex flex-col">
            <div className="mb-2 md:border-b py-2">
                <div className="container mx-auto">
                    <div className="flex justify-between gap-2">
                        <h1 className="text-3xl font-bold leading-none tracking-tight text-gray-900 p-2">Example Navbar</h1>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;