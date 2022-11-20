export default function Navbar() {
    return (
        <header className="navbar">
            <div className="menu">
                <div className="logos">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="barra"></div>
                    <img src={""} />
                </div>

                <input className="barra-pesquisa" type="text" placeholder="Pesquisar"></input>

                {/* <div className="logo-mobile">
                    <ion-icon nameName="logo-instagram"></ion-icon>
                </div>

                <div className="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div> */}


                <div className="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>

                </div>
            </div>

        </header >



    )
}