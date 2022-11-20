export default function Stories() {
    return (
        <div className="stories">
            <ion-icon className="seta" name="chevron-forward-circle"></ion-icon>

            <ul className="stories">
                <li className="stories_background">
                    <img className="perfil" src="draka.png" />
                </li>
                <div className="username">
                    <a href="https://www.instagram.com/">la.dr4ka</a>
                </div>
            </ul>
        </div>
    )
}

let arrayUsuariosStories = [{ img: ".assets/img/cindyBttrfly.jpeg", user: "cindyBttrfly" },
{ img: "cute_plantinhas.jpeg", user: "cute_plantinhas" },
{ img: "draka.png", user: "draka" },
{ img: "erikaPudle.jpeg", user: "erikaPudle" },
{ img: "fredbunny.jpeg", user: "fredbunny" },
{ img: "gatinho-preso-jjk.jpg", user: "gatinho-preso-jjk" },
{ img: "gatoC0wboy.jpeg", user: "gatoC0wboy" },
{ img: "juninho15261.jpeg", user: "juninho15261" }

],

function StorieMap() {
    return (
        arrayUsuariosStories.map
    )
}

