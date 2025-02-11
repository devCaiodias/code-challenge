import AuthForm from '@/app/components/AuthForm'
import style from '../../styles/Login.module.css'

export default function Login() {
    return (
        <div className={style.login}>
            <AuthForm isRegister={false} />
        </div>
    )
}