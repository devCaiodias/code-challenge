'use client'
import Link from 'next/link'
import style from '../styles/AuthForm.module.css'
import { auth, db, googleProvider } from '../service/firebase'
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { FaGoogle } from "react-icons/fa";

interface Props {
    isRegister: boolean
}

export default function AuthForm({ isRegister }: Props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const router= useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (isRegister && password !== passwordConfirm) {
            alert("As senhas não coincidem!")
            return;
        }

        try {
            if (isRegister) {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password)
                const user = userCredential.user

                // Salvando no Firestore
                await setDoc(doc(db, "users", user.uid), {
                    nome: name,
                    email,
                    points: 0,
                    challengesCompleted: 0
                });

                router.push("/pages/Challanges")
            } else {
                await signInWithEmailAndPassword(auth, email, password)
                router.push("/pages/Challanges")
            }
        } catch (error: any) {
            alert(error.message)
        }
    }

    const handleGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            router.push("/pages/Challanges")
        }catch (error: any) {
            alert("Erro ao entrar com google" + error.message)
        }
    }

    return (
        <div className={style.logincontainer}>
            <Link href="/" className={style.login_title}>Code Challenge</Link>
            
            <form onSubmit={handleSubmit} className={style.form_login}>
                {isRegister && (
                    <input 
                        type="text"
                        placeholder='Nome'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                )}
                <input 
                    type="email" 
                    placeholder='E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    type="password" 
                    placeholder='Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {isRegister && (
                    <input 
                        type="password"
                        placeholder='Confirme sua senha'
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        required 
                    />
                )}
                <div className={style.login_btn}>
                    <button type="submit">
                        {isRegister ? "Cadastrar" : "Entrar"}
                    </button>
                    {isRegister ? (
                        <Link href="/pages/Login" className={style.login_resgister}>Login</Link>
                    ) : (
                        <Link href="/pages/Register" className={style.login_resgister}>Registre-se</Link>
                    )}
                </div>
            </form>
            <button onClick={handleGoogle} className={style.btn_goo}>
                <FaGoogle size={25} />
            </button>
        </div>
    )
}
