import Post from "./Post"

export default function Posts(){
  const listaObjsPost = [{imgUsuario:"../assets/meowed.svg", username:"meowed", altUsuario:"meowed",
  caminhoImg:"../assets/gato-telefone.svg",altConteudo:"gato-telefone", imgCurtidas:"../assets/respondeai.svg",
  curtidasUsername:"respondeai",altCurtidas:"respondeai", numCurtidas:523
  },
  {imgUsuario:"../assets/barked.svg", username:"barked", altUsuario:"barked",
  caminhoImg:"../assets/dog.svg",altConteudo:"dog", imgCurtidas:"../assets/adorable_animals.svg",
  curtidasUsername:"adorable_animals",altCurtidas:"adorable_animals", numCurtidas:312
  },

  {imgUsuario:"../assets/smallcutecats.svg", username:"smallcutecats", altUsuario:"smallcutecats",
  caminhoImg:"../assets/smallcutecats.svg",altConteudo:"cat", imgCurtidas:"../assets/memeriagourmet.svg",
  curtidasUsername:"memeriagourmet",altCurtidas:"memeriagourmet", numCurtidas:876
  }
  ]
  

    return(
        <div className="posts">
          {listaObjsPost.map((objsPost) => {
            return  <Post key={objsPost.username} 
                          imgUsuario={objsPost.imgUsuario}
                          username={objsPost.username}
                          altUsuario={objsPost.altUsuario} 
                          caminhoImg={objsPost.caminhoImg} 
                          altConteudo={objsPost.altConteudo} 
                          imgCurtidas={objsPost.imgCurtidas} 
                          curtidasUsername={objsPost.curtidasUsername} 
                          altCurtidas={objsPost.altCurtidas} 
                          numCurtidas={objsPost.numCurtidas} 
                      />
          })}
         
        </div>
    )
}