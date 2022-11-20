export default function Navbar() {
    return (
        <header className="navbar">
            <div className="menu">
                <div className="logos">
                    <ion-icon nameName="logo-instagram"></ion-icon>
                    <div className="barra"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <input className="barra-pesquisa" type="text" placeholder="Pesquisar"></input>
                <div className="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>

                </div>

                <div className="logo-mobile">
                    <ion-icon nameName="logo-instagram"></ion-icon>
                </div>

                <div className="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>
            </div>

        </header >



    )
}