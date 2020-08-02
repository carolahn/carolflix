import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/page-default";
import FormField from "../../../components/form-field";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: "valor"
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute("name"), event.target.value);
  }
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          name="categoria"
          value={values.nome}
          type="text"
          onChange={handleChange}
        />
        {/* 
        <FormField
          label="Descrição"
          name="descricao"
          value={values.descricao}
          type="text"
          onChange={handleChange}
        /> */}

        <FormField
          label="Cor"
          name="cor"
          value={values.cor}
          type="color"
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, index) => {
          return <li key={index}>{categoria.nome}</li>;
        })}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
