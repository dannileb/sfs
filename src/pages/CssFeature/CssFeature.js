import React from 'react';
import YouTube from 'react-youtube';
import "./CssFeature.css"
import codeImage from "../../images/codeImage.png"
import BackLink from "../../components/BackLink/BackLink";
import TextParagraph from "../../components/TextParagraph/TextParagraph";

function CssFeature() {
    //YouTube video ID
    const videoId = 'q63tkui9YLQ';

    const opts = {
        height: '100%',
        width: '100%'
    };

    return (
        <div className="CssFeature-Wrapper">

            <BackLink/>

            <div className="CssFeature">

                <div className="CssFeature-VideoWrapper">
                    <h1 className={"CssFeature-Heading"}>Scroll Snap CSS</h1>
                    <YouTube videoId={videoId} opts={opts} className="CssFeature-Video"/>
                </div>

                <div className="CssFeature-Description">
                    <p className="CssFeature-Text">
                        <TextParagraph text={
                            "Scroll Snap позволяет реализовать прокрутку содержимого с привязкой к определённым точкам. " +
                            "Это позволяет необычно кастомизировать скролл пользователя, создав интерфейс, похожий на мобильные приложения."}/>
                    </p>
                    <img src={codeImage} className="CssFeature-Image" alt="codeImage"/>
                    <p className="CssFeature-Text">
                        <TextParagraph
                            text={"Основные свойства спецификации это <code>scroll-snap-type</code> и <code>scroll-snap-align</code>."}
                        />
                        <TextParagraph
                            text={"Свойство <code>scroll-snap-type</code> применяется к скролл-контейнеру и определяет типа и направления скролла."}
                        />
                        <TextParagraph
                            text={"Принимает значения <code>x</code>, <code>y</code>, или соответствующие логические <code>block</code> или <code>inline</code> . Также можно использовать ключевое слово <code>both</code> , для привязки в обоих направлениях."}
                        />
                        <TextParagraph
                            text={"Также принимает ключевые слова <code>mandatory</code>, или <code>proximity</code>, обозначающие обязательность привязки."}
                        />
                    </p>
                    <p className="CssFeature-Text">
                        <TextParagraph
                            text={"Свойство <code>scroll-snap-align</code> принимает значения <code>start</code>, <code>end</code>, или <code>center</code>, обозначающие, какую сторону контейнера прижимать к дочернему элементу."}
                        />
                        <TextParagraph
                            text={"Свойствми <code>scroll-padding</code> и <code>scroll-margin</code> можно регулировать внутренние и внешние отступы прокрутки."}
                        />
                    </p>
                    <p className="CssFeature-Text">
                        <TextParagraph
                            text={"Использование спецификации scroll snap позволяет создавать более плавные и креативные " +
                                "пользовательские интерфейсы, особенно ориентированные на мобильные устройства."}
                        />
                        <TextParagraph
                            text={'Прочитать про Scroll Snap больше можно <a href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_scroll_snap/Basic_concepts" '+
                                'target="_blank" '+
                                'rel="noreferrer" '+
                                'class="CssFeature-Link">по этой ссылке</a>'}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CssFeature;