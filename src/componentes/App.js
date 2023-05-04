import ReactDOM from "react-dom";
import NavBar from "../NavBar";
import Corpo from "./Corpo";

function App() {
	return (
        <div>
            <NavBar/>
            <Corpo/>
        </div>

    );
    }

ReactDOM.render(<App/>, document.querySelector(".root"));
