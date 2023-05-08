import Suggestion from "./Suggestion"

export default function Suggestions(){
    const listaSuggestins = [{imgUsuario:"assets/bad.vibes.memes.svg", username:"bad.vibes.memes", altName:"bad.vibes.memes"},
    {imgUsuario:"assets/chibirdart.svg", username:"chibirdart", altName:"chibirdart"},
    {imgUsuario:"assets/razoesparaacreditar.svg", username:"razoesparaacreditar", altName:"razoesparaacreditar"},
    {imgUsuario:"assets/adorable_animals.svg", username:"adorable_animals", altName:"adorable_animals"},
    {imgUsuario:"assets/smallcutecats.svg", username:"smallcutecats", altName:"smallcutecats"}]

    return(
        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {listaSuggestins.map((objsSuggestion)=>{
              return <Suggestion key={objsSuggestion.username} 
                                imgUsuario={objsSuggestion.imgUsuario}
                                username={objsSuggestion.username}
                                altUsuario={objsSuggestion.altUsuario}
                                />
          })}
          
          </div>
       
    )
}