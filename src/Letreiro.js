import { useState, useEffect } from 'react';
import "./Letreiro.css";

export default function Letreiro() {
  const mensagemCompleta = 'Me chamo Lucas Henrique Vicente dos Santos, tenho 21 anos e estudo na Fatec de Presidente Prudente';
  const [mensagemAtual, setMensagemAtual] = useState('');
  const [letraAtual_index, setLetraAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (letraAtual_index < mensagemCompleta.length) {
        setMensagemAtual((textoAnterior) => textoAnterior + mensagemCompleta[letraAtual_index]);
        setLetraAtual((indiceAnterior) => indiceAnterior + 1);
      } else {
        clearInterval(intervalo);
        setTimeout(() => {
          setMensagemAtual('');
          setLetraAtual(0);
        }, 1000);
      }
    }, 65);

    return () => clearInterval(intervalo);
  }, [letraAtual_index]);

  return (
    <section>
      <h1>Letreiro</h1>
      <h2>{mensagemAtual}</h2>
    </section>
  );
}