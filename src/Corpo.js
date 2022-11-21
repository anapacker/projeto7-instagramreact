import Posts from "./Posts";
import Stories from "./Stories";

export default function Corpo() {
    return (
        <main>
            <div className="container-principal">
                <Stories />
                <Posts />

            </div>
        </main>
    )

}