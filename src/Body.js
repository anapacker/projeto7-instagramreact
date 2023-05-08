import SideBar from "./SideBar"
import Stories from "./Stories/Stories"
import Posts from "./posts/Posts"

export default function Body(){

    return(
        <div className="corpo">
      <div className="esquerda">
        <Stories/>
        <Posts/>
      </div>

     <SideBar/>
    </div>
    )
}

