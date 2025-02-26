import Image from "next/image";
import Link from "next/link";
export default function Header() {
    return (
        <header className="header">
            <div className="wrapper--1">
                <div className="logo__wrapper">
                    <Link href="/">
                        <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                        />
                    </Link>
                </div>
                <div className="region--nav">
                <ul className="menu menu-level--0">
                    <li className="navigation__group"> 
                        <Link href="/">Home</Link>
                    </li>
                    <li className="navigation__group"> 
                        <Link href="/user">User</Link>
                    </li>
                    <li className="navigation__group"> 
                        <Link href="/product">Product</Link>
                    </li>
                    <li className="navigation__group"> 
                        <Link href="/quotes">Quotes</Link>
                    </li>
                </ul>
                </div>
            </div>
        </header>
    );
}