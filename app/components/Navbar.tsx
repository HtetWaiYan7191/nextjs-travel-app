import Image from "next/image"
import Link from 'next/link'
import { NAV_LINKS } from "@/constants"
import Button from "./Button"



const Navbar = () => {
  return (
    <nav className="p-5 flex justify-between items-center">
        <Link href='/' className="">
            <Image src="/hilink-logo.svg" width={70} height={70} alt="logo-image"></Image>
        </Link>
        <ul className="hidden lg:flex gap-12 h-full">
            {NAV_LINKS.map(link => (
                <Link href={link.href} key={link.key} className="text-gray-500 regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold hover:tracking-wider">
                    {link.label}
                </Link>
            ))}
        </ul>
        <div className="block lg:hidden">
        <Image src="/menu.svg" alt="menu-image" width={40} height={30}></Image>
        </div>
        <div className="button-container lg:block hidden">
            <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green"></Button>
        </div>
    </nav>
  )
}

export default Navbar