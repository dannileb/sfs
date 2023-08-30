import "./TextParagraph.css"
import React from "react";

function TextParagraph({text}){
    return(
        <span className="TextParagraph" dangerouslySetInnerHTML={{ __html: text }}>
        </span>
    )
}

export default TextParagraph