import { CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";

export function Sucess() {
  return (
    <div className="bg-[#F9F9F9] dark:bg-[#0F0F0F] flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="flex flex-col gap-4 text-2xl items-center text-center font-bold text-title-color dark:text-title-color-dark">
        <CircleCheck size={80} strokeWidth={1.5} className="fill-green-400" />
        Seu E-mail foi enviado com sucesso!
      </h1>
      <p className="justify-center text-title-color dark:text-title-color-dark">
        Voltar para o{" "}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Inicio
        </Link>
      </p>
    </div>
  );
}
