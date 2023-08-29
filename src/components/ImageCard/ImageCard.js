import './ImageCard.css'
import {useState} from "react";

function ImageCard({imageSrc, imageCapture, imageText}){
    //Text display hook
    const [flipped, setFlipped] = useState(false);

    return (
            flipped
            ?
            /*Text displays*/
            <div className="ImageCard ImageCard_flipped" onClick={()=>setFlipped(!flipped)}>
                <p className="ImageCard_Text ImageCard_Text_flipped">
                        {
                            imageText.map(text=>{
                                return (
                                    <>
                                        <span className="ImageCard_Paragraph">{text}</span>
                                    </>
                                )
                            })
                        }

                    </p>
                <img src={imageSrc} className="ImageCard-Image ImageCard-Image_flipped" alt="highSchool"/>

                <p className="ImageCard-Capture ImageCard-Capture_flipped">{imageCapture}</p>
            </div>
            :
            /*Image displays*/
            <div className="ImageCard" onClick={()=>setFlipped(!flipped)}>
                <p className="ImageCard_Text">{imageText[0]}</p>
                <img src={imageSrc} className="ImageCard-Image" alt="highSchool"/>

                <p className="ImageCard-Capture">{imageCapture}</p>
            </div>
    )
}
export default ImageCard;