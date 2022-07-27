import Logo from "./img/logo.svg";

const Navbar = () => {
    return (
        <nav className="relative container mx-auto p-2">
            <div className="flex items-center justify-between">
                <div className="pt-4">
                    <img src={Logo} alt="Lego" width={300} height={300} />
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#" className=" font-bold underline text-size decoration-sky-500 underline-offset-8 hover:decoration-pink-400 text-gray-800">Enteriőr</a>
                    <a href="#" className=" font-bold underline decoration-sky-500 underline-offset-8 hover:decoration-pink-400">Portré</a>
                    <a href="#" className=" font-bold underline decoration-sky-500 underline-offset-8 hover:decoration-pink-400">Épület fotózás</a>
                    <a href="#" className=" font-bold underline decoration-sky-500 underline-offset-8 hover:decoration-pink-400">Reklám fotózás</a>
                </div>
                <a href="#" className="hidden md:block p-3 px-6 pt-2 text-white bg-sky-500 rounded-full baseline">Kapcsolat</a>
            </div>
        </nav>
    );
}

export default Navbar;