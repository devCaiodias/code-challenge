import Link from "next/link";
import style from '../styles/Sidebor.module.css'

export default function Sidebar() {
    return (
        <div className={style.sidebar}>
            <Link href="/" className={style.sidelogo}>Code Challenge</Link>
            
            <nav>
                <Link href="#" className={style.sideLink}>Login</Link>
                <Link href="#" className={style.sideLink}>Profile</Link>
                <Link href="#" className={style.sideLink}>Challenges</Link>
            </nav>
        </div>
    )
}