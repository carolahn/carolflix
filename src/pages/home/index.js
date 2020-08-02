import React from "react";
import Menu from "../../components/menu";
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../components/banner-main";
import Carousel from "../../components/carousel";
import Footer from "../../components/footer";

function Home() {
  return (
    <div style={{ background: "#141414" }} className="App">
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"}
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />
      <Footer />
    </div>
  );
}

export default Home;
