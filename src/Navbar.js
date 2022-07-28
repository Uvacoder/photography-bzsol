import Logo from "./img/logo.svg";

const Navbar = () => {
    return (
        <nav className="relative container mx-auto p-2">
            <div className="flex items-center justify-between">
                <div className="pt-4">
                    <img src={Logo} alt="Lego" width={300} height={300} />
                </div>
                <div className="hidden md:flex space-x-6">
                    {[
                        ['Fotóim', '/enterior'],
                        ['Magamról', '/portre'],
                        ['Kapcsolat', '/reklam'],
                    ].map(([title, url]) => (
                        <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                    ))}
                </div> 
            </div>
        </nav>
    );
}

export default Navbar;