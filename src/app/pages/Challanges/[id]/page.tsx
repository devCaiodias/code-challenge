"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/app/service/firebase";
import { doc, getDoc } from "firebase/firestore";

interface Challenge {
  title: string;
  description: string;
  difficulty: string;
}

export default function ChallengePage() {
  const { id } = useParams(); // Pegando o ID da URL
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchChallenge = async () => {
      try {
        const docRef = doc(db, "challenges", id as string);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setChallenge(docSnap.data() as Challenge);
        } else {
          console.error("Desafio não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar desafio:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenge();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!challenge) return <p>Desafio não encontrado!</p>;

  return (
    <div>
      <h1>{challenge.title}</h1>
      <p>{challenge.description}</p>
      <p>Dificuldade: {challenge.difficulty}</p>
    </div>
  );
}
