import style from '../styles/Home.module.css'
import Image from 'next/image'
import codeimg from '../../../public/download.jpg'

export default function HomePricinpal() {
    return (
        <div className={style.containerHome}>
            
            <div className={style.container_description}>
                <h1 className={style.titleHome}>Plataforma de Desafios de Programação</h1>
                <p className={style.description}>Aprender a programar pode ser desafiador, mas a prática constante faz toda a diferença! Nossa plataforma foi criada para ajudar estudantes e desenvolvedores a aprimorarem suas habilidades de codificação de forma interativa e divertida.Aqui, você encontrará desafios de programação em diversas linguagens e níveis de dificuldade, podendo testar seus códigos em tempo real e comparar seu desempenho com outros participantes.Além disso, oferecemos um ranking de usuários, onde você pode acompanhar sua evolução e se motivar com a comunidade. Seja para aprender do zero, melhorar sua lógica de programação ou se preparar para entrevistas técnicas, nossa plataforma é o ambiente ideal para você crescer como desenvolvedor!</p>
                <span>Pronto para o desafio?</span>
            </div>
            <Image src={codeimg} alt='codeimg' width={400} className={style.codeimg} />
        </div>
    )
}