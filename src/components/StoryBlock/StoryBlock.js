import "./StoryBlock.css"
import {useEffect, useRef} from "react";

function StoryBlock({number, imageSrc, storyText,backgroundColor, color}){
    //StoryBlock reference
    const blockRef = useRef(null);

    //Fade in hook
    useEffect(()=>{
        const block = blockRef.current;

        //Observer for adding fade in animations
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.25,
        };
        const observer = new IntersectionObserver((entries, observer)=>{
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('Story-Block_shown');
                }
            })
        }, observerOptions)

        if (block) observer.observe(block);

        return ()=> {
            if (block) observer.unobserve(block);
        }
    })

    return(
        <section
            ref={blockRef}
            className="Story-Block"
            style=
            {
                {
                flexDirection: number%2===0 ? "row" : "row-reverse",
                backgroundColor: backgroundColor,
                color: color
                }
            }
        >
            <img
                src={imageSrc}
                className="Story-Image"
                alt="StoryImage"
            />
            <p className="Story-Text">
                {
                    storyText.map((text, index)=>{
                        return (
                                <span key={index} className="Story-Paragraph">{text}</span>
                        )
                    })
               }
            </p>
        </section>
    )

}

export default StoryBlock