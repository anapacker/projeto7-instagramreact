import sayajin from "./assets/sayajin.jpg"
import gatoC0wboy from "./assets/gatoC0wboy.jpeg"
import cute_plantinhas from "./assets/cute_plantinhas.jpeg"
import m1sterioscat from "./assets/m1sterioscat.jpeg"
import erikaPudle from "./assets/erikaPudle.jpeg"
import patyd0guinha from "./assets/patyd0guinha.jpg"



export default function Sidebar() {
    return (

        <div class="sidebar">
            <div class="sugestoes">
                <p>Sugestões para você</p>
                <p><strong>Ver tudo</strong></p>

                <SugestoesMap />
            </div>

            <div className="box-infos">
                <p className="infos-pag-insta">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                    Localizações • Contas mais relevantes • Hashtags • Idioma
                </p>
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    )
}

let arraySugestao = [{ img: gatoC0wboy, user: "gatoC0wboy", status: "Segue você" },
{ img: cute_plantinhas, user: "cute_plantinhas", status: "Segue você" },
{ img: m1sterioscat, user: "m1sterioscat", status: "Novo no Instagram" },
{ img: erikaPudle, user: "erikaPudle", status: "Novo no Instagram" },
{ img: patyd0guinha, user: "patyd0guinha", status: "Segue você" }]

function SugestoesMap() {
    return (
        arraySugestao.map((a) => {
            return <Sidebar key={JSON.stringify(a)} img={a.img} user={a.user} status={a.status} />
        })
    )
}

function Sugestao(props) {
    const { img, user, status } = props;

    return (
        <div class="caixa-icone-sugestoes">
            <div class="usuario-sugestoes">
                <img class="icone-sugestoes" src={img} />
                <div class="texto-sugestoes">
                    <h1><strong>{user}</strong></h1>
                    <p>{status}</p>
                </div>
            </div>
            <p class="seguir"><b>Seguir</b></p>
        </div>
    )
}






