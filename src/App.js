import React from 'react';
import Menu from "./components/Menu";
import dadosIniciais from './components/data/dados_iniciais.json';
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ background: "#1414141" }}>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalhando na área os termos HTML, CSS e Javascript fazem parte da rotina das desenvolvedoras e desenvolvedores."}  
      />

      <Carousel 
        category={dadosIniciais.categorias[0]}
      />
      <Carousel 
        category={dadosIniciais.categorias[1]}
      />
      <Carousel 
        category={dadosIniciais.categorias[2]}
      />
      <Carousel 
        category={dadosIniciais.categorias[3]}
      />
      <Carousel 
        category={dadosIniciais.categorias[4]}
      />
      <Carousel 
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default App;
