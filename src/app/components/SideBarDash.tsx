'use client'
import styles from '../styles/SidebarDash.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

export default function SidebarDash() {
    const {user, loding, logout} = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loding && !user) {
            router.push("/pages/Login")
        }
    }, [user, loding, router]);

    if (loding) return <p></p>

    return (
        <div className={styles.container_side}>
                <div className={styles.link_principal}>
                    <h1>Code <span>Challange</span></h1>
                    <Link href="/pages/Challanges">Challanges</Link>
                    <Link href="/pages/Rank">Rank</Link>
                </div>

            <div className={styles.User}>
                <Link href="/pages/User">User</Link>
                <button onClick={logout}>
                    Sair
                </button>
            </div>

            
        </div>
    )
}