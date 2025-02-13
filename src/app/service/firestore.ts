import {db} from './firebase'
import { collection, addDoc } from 'firebase/firestore'

interface addProps {
    title: string
    description: string
    difficulty: string
}

export const addChallange = async ({title, description, difficulty}: addProps ) => {
    try {
        await addDoc(collection(db, "challanges"), {
            title, description, difficulty
        });
        console.log("Desafios add com sucesso")
    }catch (error) {
        console.error("Erro ao add desafio")
    }
}