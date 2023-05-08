export default function Post(props){
    const imgUsuario = props.imgUsuario
    const username = props.username
    const altUsuario = props.altUsuario
    const caminhoImg = props.caminhoImg
    const altConteudo = props.altConteudo
    const imgCurtidas = props.imgCurtidas
    const curtidasUsername = props.curtidasUsername
    const altCurtidas = props.altCurtidas
    

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
          <img src={caminhoImg} alt={altConteudo}/>
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={imgCurtidas} alt={altCurtidas}/>
            <div className="texto">
              Curtido por <strong>{curtidasUsername}</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}