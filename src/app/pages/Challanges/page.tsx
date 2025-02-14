"use client";
import ChallengesCard from "../../components/ChallangesCard";
import { useState, useEffect } from "react";
import { db } from "@/app/service/firebase";
import { collection, getDocs } from "firebase/firestore";

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: string;
}


export default function Challenges() {
  const [challege, setChallege] = useState<Challenge[]>([]);



  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "challenges"));
  
        if (querySnapshot.empty) {
          console.warn("Nenhum desafio encontrado!");
          return;
        }
  
        const challengesList: Challenge[] = querySnapshot.docs.map((doc) => {
          const data = doc.data() as Omit<Challenge, "id">;
          return {
            id: doc.id,
            ...data,
          };
        });
  
        console.log("Desafios carregados:", challengesList); // 👈 Log para ver os dados
        setChallege(challengesList);
      } catch (error) {
        console.error("Erro ao buscar desafios:", error);
      }
    };
  
    fetchChallenge();
  }, []);
  
  

  return (
    <div>
      {challege.map((challenge: any) => (
        <ChallengesCard key={challenge.id} {...challenge} />
      ))}
    </div>
  );
}
