import ming4u from "./assets/ming4u.jpeg"
import gatinho_preso_jjk from "./assets/gatinho-preso-jjk.jpg"
import fredbunny from "./assets/fredbunny.jpeg"
import speed_the_turtlle from "./assets/speed_the_turtlle.jpeg"
import speed from "./assets/speed.jpeg"
import gatoC0wboy from "./assets/gatoC0wboy.jpeg"



export default function Postagens() {
    return (
        <div class="posts">
            <PostsMap />
        </div>
    )
}

let arrayUsuariosPosts = [{
    imgPerfilPstagem: ming4u,
    userPost: "speeeeed",
    imgPost: gatinho_preso_jjk,
    imgQuemCurtiu: fredbunny,
    userQuemCurtiu: "fredbunny",
    qtdCurtidas: "123.252"
}, {
    imgPerfilPstagem: speed_the_turtlle,
    userPost: "speed_the_turtlle",
    imgPost: speed,
    imgQuemCurtiu: gatoC0wboy,
    userQuemCurtiu: "gatoC0wboy",
    qtdCurtidas: "325.120"
}


]



function PostsMap() {
    return (
        arrayUsuariosPosts.map((a) => {

            return (
                <Posts key={JSON.stringify(a)}
                    imgPerfilPstagem={a.imgPerfilPstagem}
                    userPost={a.userPost}
                    imgPost={a.imgPost}
                    imgQuemCurtiu={a.imgQuemCurtiu}
                    userQuemCurtiu={a.userQuemCurtiu}
                    qtdCurtidas={a.qtdCurtidas} />

            )
        })
    )
}

function Posts(props) {
    const { imgPerfilPstagem, userPost, imgPost, imgQuemCurtiu, userQuemCurtiu, qtdCurtidas } = props
    return (
        <div className="postagem">
            <div className="barra-postagem">
                <div className="perfil-user">
                    <img className="user" src={imgPerfilPstagem} />
                    <a href="https://www.instagram.com/">{userPost}</a>
                </div>

                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>

            <div className="postagem-img">
                <img src={imgPost} />
            </div>
            <div className="barra-postagem">
                <div className="box-icons">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            <div className="barra-curtidas">
                <img className="foto-perfil-q-curtiu" src={imgQuemCurtiu} />
                <p className="curtido-por">
                    Curtido por <strong> {userQuemCurtiu}</strong> e <b>outras {qtdCurtidas} pessoas</b>
                </p>
            </div>
        </div>

    )
}
