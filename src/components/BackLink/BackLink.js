import "./BakcLink.css";
import {Link} from "react-router-dom";

function BackLink(){
    return(
        <Link to="/" className="BackLink">Назад</Link>
    )
}

export default BackLink