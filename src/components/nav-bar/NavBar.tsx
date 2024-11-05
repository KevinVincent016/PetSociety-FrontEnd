import HomeIcon from "@/media/pata.png";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems = [
    {name:'Inicio', path: '/'},
    {name:'Contacto', path: '/contact'}
]

export const Navbar = () => {
    return (
      <nav className="flex bg-white bg-opacity-80 border-b-2 border-gray-300">
        <Link href="/" className="p-2 m-2 text-black">
            <Image src={HomeIcon} alt="Home" width={24} height={24} />
        </Link>
        <div className="flex flex-1"></div>
        {
            navItems.map(item=>(
                <ActiveLink  key={item.path} {...item}/>
            ))
        }
        <div className="flex flex-row space-x-2 items-center px-2">
            <Link href="/login">
                <button
                    className="relative group/btn flex space-x-2 items-center justify-center px-4 text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                >
                <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
                    Iniciar sesión
                </span>
                </button>
            </Link>
            <Link href="/register">
                <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-4"
                >
                    Registrarse
                </button>
            </Link>
        </div>
      </nav>
    );
}