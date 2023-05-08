export default function Suggestion(props){
    const imgUsuario = props.imgUsuario
    const username = props.username
    const altName = props.altName


    return(
        <div className="sugestao">
            <div className="usuario">
              <img src={imgUsuario} alt={altName}/>
              <div className="texto">
                <div className="nome">{username}</div>
                <div className="razao">Segue você</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>
    )
}


