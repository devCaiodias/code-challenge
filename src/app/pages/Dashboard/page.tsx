'use client'
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const {user, loding, logout} = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loding && !user) {
            router.push("/pages/Login")
        }
    }, [user, loding, router]);

    if (loding) return <p>Carregando...</p>
     return (

      <button onClick={logout} className="bg-red-500 text-white p-2 rounded mt-2">
        Sair
      </button>
    )
}