import Link from "next/link";
import style from '../styles/Sidebor.module.css'

export default function Sidebar() {
    return (
        <div className={style.sidebar}>
            <h2 className={style.sidelogo}>Code Challenge</h2>
            
            <nav>
                <Link href="/pages/Login" className={style.sideLink}>Login</Link>
            </nav>
        </div>
    )
}