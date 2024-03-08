import Image from "next/image";
import { NAV_ITEMS } from "./constant";
import logoPng from "@/public/logo.png"
import { NavItem } from "./NavItem";
import Link from "next/link";

export function Nav(){
    return(
        <div>
            <Link href={"/"}>
                <Image src={logoPng} alt="logo" className="w-40"/>
            </Link>
            <nav className="space-y-4 mt-4">
                {NAV_ITEMS.map((navItem,i) => (
                    <NavItem key={i}  {...navItem}></NavItem>
                ))}
            </nav>
        </div>
    )
}