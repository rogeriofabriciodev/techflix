import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormFields from '../../../components/FormFields';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([valoresIniciais]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:3000/categorias'
    : 'https://techflixserver.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  },
  []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        { values.nome }
      </h1>

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();

        setCategorias([...categorias, values]);

        setValues(valoresIniciais);
      }}
      >

        <FormFields
          label="Titulo da Categoria"
          type="text"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormFields
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormFields
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        { categorias.map((categoria) => (
          <li key={`${categoria.id}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
