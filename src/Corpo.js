import Stories from "./Stories";
import Sidebar from "./Posts";

export default function Corpo() {
    return (
        <main>
            <div className="container-principal">
                <div className="barra-stories">
                    <Stories />
                    <Pots />
                </div>
            </div>
        </main>
    )

}