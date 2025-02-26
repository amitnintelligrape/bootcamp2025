import Link from 'next/link';
export default function Footer() {
    return (
       <footer className="footer">
            <div className="wrapper--1">
                <ul>
                    <li> 
                        <Link href={'/'}>Test Link</Link>
                    </li>
                    <li> 
                        <Link href={'/'}>Test Link</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}