import { useState } from "react"

export default function Post(props){
    const [postSalvo, setPostSalvo] = useState(false)
    const [postCurtido, setPostCurtido] = useState(false)
    
    function togleBookMark(){
     setPostSalvo(!postSalvo)
    }

    function togleCurtida(){
      setPostCurtido(!postCurtido)
      
    }

    function curtirPostagem(){
      setPostCurtido(true)

    }



    const imgUsuario = props.imgUsuario
    const username = props.username
    const altUsuario = props.altUsuario
    const caminhoImg = props.caminhoImg
    const altConteudo = props.altConteudo
    const imgCurtidas = props.imgCurtidas
    const curtidasUsername = props.curtidasUsername
    const altCurtidas = props.altCurtidas
    const numCurtidas = props.numCurtidas

    return(
        <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src={imgUsuario} alt={altUsuario}/>
            {username}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img onClick={curtirPostagem} src={caminhoImg} alt={altConteudo}/>
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon class={postCurtido ? "vermelho" : ""} onClick={togleCurtida} name={postCurtido ? "heart"  : "heart-outline"}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon onClick={togleBookMark} name={postSalvo ? "bookmark" : "bookmark-outline"}></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={imgCurtidas} alt={altCurtidas}/>
            <div className="texto">
              Curtido por <strong>{curtidasUsername}</strong> e <strong>outras {postCurtido ? numCurtidas + 1 : numCurtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}