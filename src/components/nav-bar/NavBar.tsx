import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
    {name:'Inicio', path: '/'},
    {name:'Contacto', path: '/contact'}
]
export const Navbar = () => {
    return (
      <nav className="flex bg-white bg-opacity-80 border-b-2 border-gray-300">
        <Link href="/" className="p-2 m-2 text-black">
            <HomeIcon className="mr-2" />
            <span>Home</span>
        </Link>
        <div className="flex flex-1"></div>
        {
            navItems.map(item=>(
                <ActiveLink  key={item.path} {...item}/>
            ))
        }
        <div className="flex">
            <button className="p-2 m-2 text-black text-xs bg-gray-300 rounded-xl border-2 border-gray-600">Iniciar sesión</button>
            <button className="p-2 m-2 text-white text-xs bg-gray-900 rounded-xl border-2 border-gray-800">Registrarse</button>
        </div>
      </nav>
    );
}