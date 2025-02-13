import style from "../styles/ChallangesCard.module.css"

interface Props {
    title: string 
    description: string
    difficulty: string
}

export default function ChallangesCard({title, description, difficulty}: Props) {
    const difficultyClass = 
    difficulty === "Fácil" 
    ? style.difficulty_facil 
    : difficulty === "Medio" 
    ? style.difficulty_medio 
    : style.difficulty_dificil

    return (
        <div className={style.challengeCard}>
            <h3 className={style.challenge_title}>{title}</h3>
            <p className={style.challenge_description}>
                {description}
            </p>
            <span className={`${style.difficulty} ${difficultyClass}`}>
                {difficulty}
            </span>
        </div>
    )
}