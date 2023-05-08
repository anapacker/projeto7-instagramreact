import { useState } from "react";
import Suggestions from "./Suggestions/Suggestions";

export default function SideBar(){
  const [nomeUsuario,setNomeUsuario] = useState("catanaComics")
  const [imgPerfil, setImgPerfil] = useState("../assets/catanacomics.svg")

  console.log("o componente foi renderizado")

  function alterarNome(){
    const novoNome = prompt("qual o nome do usuario?")

    if(novoNome !== ""){
      setNomeUsuario(novoNome)
      console.log(novoNome)
    } 
  }

  function alterarImg(){
    const novaImg = prompt("URL")

    if(novaImg !== ""){
      setImgPerfil(novaImg)
    }
  }

    return(
        <div className="sidebar">
        <div className="usuario">
          <img data-test="profile-image" onClick={alterarImg} src={imgPerfil} alt="imagem de perfil"/>
          <div data-test="name" className="texto">
            <span>
              <strong>{nomeUsuario}</strong>
              <ion-icon data-test="edit-name" onClick={alterarNome} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
        <Suggestions/>

        <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div className="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    );
}