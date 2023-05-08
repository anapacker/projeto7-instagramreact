import Story from "./Story"

export default function Stories(){
  const listaObjtsStories = [
    {caminhoImg:"../assets/9gag.svg", username: "9gag", alternativeName:"9gag"},
    {caminhoImg:"../assets/meowed.svg", username:"meowed", alternativeName:"meowed"},
    {caminhoImg:"../assets/nathanwpylestrangeplanet.svg",username:"nathanwpylestrangeplanet", alternativeName:"nathanwpylestrangeplanet"},
    {caminhoImg:"../assets/wawawicomics.svg",username:"wawawicomics", alternativeName:"wawawicomics.svg"},
    {caminhoImg:"../assets/respondeai.svg",username:"respondeai", alternativeName:"respondeai"},
    {caminhoImg:"../assets/filomoderna.svg",username:"filomoderna", alternativeName:"filomoderna"}
  ]

  return(
     <div className="stories">      
      {listaObjtsStories.map((objetoStory)=> { 
        return <Story key ={objetoStory.username} caminhoImg={objetoStory.caminhoImg} userName={objetoStory.username} alternativeName={objetoStory.alternativeName}/>
        
      })}
     </div>
  )

}

