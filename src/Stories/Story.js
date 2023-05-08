export default function Story(props){
    const caminhoImg = props.caminhoImg
    const userName = props.userName
    const alternativeName = props.alternativeName

    return(
        <div className="story">
            <div className="imagem">
              <img src={caminhoImg} alt={alternativeName}/>
            </div>
            <div className="usuario">
              {userName}
            </div>
        </div>
    )
}