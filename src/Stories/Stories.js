import Story from "./Story"

export default function Stories(){
  const listaObjtsStories = [
    {caminhoImg:"../assets/9gag.svg", username: "9gag", alternativeName:"9gag"},
    {caminhoImg:"../assets/meowed.svg", username:"meowed", alternativeName:"meowed"},
    {caminhoImg:"../assets/barked.svg",username:"barked", alternativeName:"barked"}
  ]

  return(
     <div className="stories">      
      {listaObjtsStories.map((objetoStory)=> { 
        return <Story key ={objetoStory.username} caminhoImg={objetoStory.caminhoImg} userName={objetoStory.username} alternativeName={objetoStory.alternativeName}/>
        
      })}
     </div>
  )

}

