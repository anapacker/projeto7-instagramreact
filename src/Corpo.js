import Posts from "./Posts";
import Stories from "./Stories";
import Sidebar from "./Sidebar";

export default function Corpo() {
    return (
        <main>
            <div className="container-principal">
                <Stories />
                <Posts />

                <div class="caixa-direita">
                    <Sidebar />

                </div>
            </div>
        </main>
    )

}