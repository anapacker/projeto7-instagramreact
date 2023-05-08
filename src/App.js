import ReactDOM from "react-dom";

import Body from "./Body";
import NavBar from "./NavBar";

export default function App() {
	return (
        <div>
            <NavBar/>
            <Body/>
        </div>

    );
    }

ReactDOM.render(<App/>, document.querySelector(".root"));
