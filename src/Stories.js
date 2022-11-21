import cindyBttrfly from "./assets/cindyBttrfly.jpeg"
import cute_plantinhas from "./assets/cute_plantinhas.jpeg"
import draka from "./assets/draka.png"
import erikaPudle from "./assets/erikaPudle.jpeg"
import fredbunny from "./assets/fredbunny.jpeg"
import gatinho_preso_jjk from "./assets/gatinho-preso-jjk.jpg"
import gatoC0wboy from "./assets/gatoC0wboy.jpeg"
import juninho15261 from "./assets/juninho15261.jpeg"




export default function Stories() {
    return (
        <div className="barra-stories">
            <ion-icon className="seta" name="chevron-forward-circle"></ion-icon>

            <ul className="stories">
                <StorieMap />

            </ul>


        </div>
    )
}

let arrayUsuariosStories = [{ img: cindyBttrfly, user: "cindyBttrfly" },
{ img: cute_plantinhas, user: "cute_plantinhas" },
{ img: draka, user: "draka" },
{ img: erikaPudle, user: "erikaPudle" },
{ img: fredbunny, user: "fredbunny" },
{ img: gatinho_preso_jjk, user: "gatinho-preso-jjk" },
{ img: gatoC0wboy, user: "gatoC0wboy" },
{ img: juninho15261, user: "juninho15261" }

]

function StorieMap() {
    return (
        arrayUsuariosStories.map((a) => {
            return <li>
                <a href="https://instagram.com">
                    <img src={a.img} />
                    <p className="username">{a.user}</p>
                </a>
            </li>
        })
    )
}



