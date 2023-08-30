import "./StoryBlock.css"

function StoryBlock({number, imageSrc, storyText,backgroundColor, color}){
    console.log(storyText)
    return(
        <section className="Story-Block"
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