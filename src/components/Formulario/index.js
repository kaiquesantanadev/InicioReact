/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {


  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')


  const aoSalvar = (e) => {
    e.preventDefault()
    props.aoColaboradorCadastrado({nome, cargo, imagem, time})
    setCargo('')
    setImagem(' ')
    setNome('')
    setTime('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
        <CampoTexto label="Imagem" placeholder="Digite o caminho da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
        <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
        <Botao>
          Criar o card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
