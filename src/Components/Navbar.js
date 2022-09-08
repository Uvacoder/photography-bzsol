import { useState } from 'react';


const Navbar = () => {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
        console.log(isActive)
    };
    const links = [
        ['Kezdőlap', '/'],
        ['Reklám fotók', '/advertisement'],
        ['Enteriőr fotók', '/interior'],
        ['Portré fotók', '/portrait'],
        ['Épület fotók', '/architecture'],
    ]
    return (
        <nav className="relative container mx-auto p-8">
            <div className="flex items-right justify-between">
                <div className="pt-4">
                    
                </div>
                <div className="hidden md:flex space-x-6">
                    {links.map(([title, url]) => (
                        <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                    ))}
                </div>
            </div>

            <div>
            <button onClick={toggleClass} className={isActive ? 'block hamburger md:hidden focus:outline-none open' : 'block hamburger md:hidden focus:outline-none'}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
            </div>
            <div className="md:hidden">
                <div id="menu" className={isActive ? "absolute flex flex-col items-center  self-end py-8 mt-30 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" : "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"}>
                {links.map(([title, url]) => (
                        <a href={url} className="text-center">{title}</a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;