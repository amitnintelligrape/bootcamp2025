import Link from 'next/link';
import './footer.css';
export default function Footer() {
    return (
       <footer className="footer">
            <div className="wrapper--1">
                <h3>Businesses</h3>
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