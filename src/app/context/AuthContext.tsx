'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../service/firebase";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

interface AuthContextType {
    user: User | null;
    loding: boolean;
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default function AuthProvider({children}: {children: React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null)
    const [loding, setLoding] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoding(false)
        })

        return () => unsubscribe()
    }, [])

    const logout = async () => {
        await signOut(auth)
        router.push("/pages/Login")
    }
    return (
        <AuthContext.Provider value={{user, loding, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)    
}