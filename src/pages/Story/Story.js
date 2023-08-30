import './Story.css';
import BackLink from "../../components/BackLink/BackLink";
import StoryBlock from "../../components/StoryBlock/StoryBlock";
import firstStoryImg from "../../images/firstStoryImg.jpg";
import secondStoryImg from "../../images/secondStoryImg.jpg";
import thirdStoryImg from "../../images/thirdStoryImg.jpg";
import fourthStoryImg from "../../images/fourthStoryImg.jpg";

const firstBlockText = [
    'В детстве я любил спортивные игры, занимался футболом и борьбой, смотрел соревнования по телевизору.' +
    'Также я увлекался комьютерными играми, такими как FIFA, The Elder Scrolls V: Skyrim и The Godfather.',

    'Я был активным и креативным ребёнком, учавствовал в активностях и выступал на сцене. ' +
    'В возрасте 11 лет я переехал из Казахстана в Россию, в город Воронеж. '+
    'В Воронеже я учился в классе с физико-математическим уклоном. Мне нравилось искать необычные решения различных задач.'
]
const secondBlockText = [
    'Меня всегда увлекала работа в фото и видео редакторах, в средней школе я монтировал видеоролики ' +
    'в Sony Vegas и обрабатывал фото в Photoshop. После покупки первого компьютера я заинтересовался техникой и технологями.',

    'Эксперименты с комплектующими, работа с компьютерами и программами определила вектор моей дальнейшей жизни. ' +
    'Только я ещё не знал точно какая область будет интересовать меня,не знал что меня будет вдохновлять каждый день. '
]
const thirdBlockText = [
    'В конце 11 класса я заинтересовался вёрсткой и созданием веб-сайтов. Изучил курс от SoloLeran по HTML и CSS, ' +
    'начал изучать JavaScript. ',

    'Я смотрел видеоуроки на YouTube и учавствовал в вебинарах, пробовал верстать сайты самостоятельно. ' +
    'Также я пробовал делать дизайн-макеты для веб-сайтов в Figma и верстать по ним. ',

    'Мне понравились эти занятия и я решил поступать в вуз на специальность "Информационные системы и технологии". О чём ни разу не пожалел!'
]
const fourthBlockText = [
    'В вузе обучение началось с ознакомления с алгоритмическим подходом к мышлению, ' +
    'написания первых программ на С. Мне было легко воспринимать материал благодаря опыту изучения JavaScript.',

    'Я немного отошёл от веб-разработки и изучал то, что давали в вузе, а точнее: C++, C#, Java. ' +
    'Также мы проходили дисциплины по проектированию, анализу и тестировке информационных систем. ',

    'Моя специальность в университете позволяет ознакомиться и при желании изучить углубленно разные области из ' +
    'сферы информационных технологий, а не только программирование.'
]
const finalBlockText = [
    'Однако я решил выбрать именно программирование. И теперь я развиваюсь в области веб-разработки! ' +
    'Для меня веб-разработка - это возможность совместить творческое нутро и математический склад ума, ' +
    'взаимодействовать как с созданием графического содержимого и интерфесов, так и с разработкой алгоритмов и решением задач!'
]

function Story(){
    return(
        <div className="Story-Wrapper">
            {/* Link to Homepage*/}
            <BackLink/>
            <div className="Story">
                <StoryBlock
                    number={1}
                    imageSrc={firstStoryImg}
                    storyText={firstBlockText}
                    backgroundColor="var(--ColorBlack)"
                    color="var(--ColorWhiteText)"
                />
                <StoryBlock
                    number={2}
                    imageSrc={secondStoryImg}
                    storyText={secondBlockText}
                    backgroundColor="var(--ColorWhite)"
                    color="var(--ColorBlackText)"
                />
                <StoryBlock
                    number={3}
                    imageSrc={thirdStoryImg}
                    storyText={thirdBlockText}
                    backgroundColor="var(--ColorBlue)"
                    color="var(--ColorWhite)"
                />
                <StoryBlock
                    number={4}
                    imageSrc={fourthStoryImg}
                    storyText={fourthBlockText}
                    backgroundColor="var(--ColorBlack)"
                    color="var(--ColorYellow)"
                />
                <StoryBlock
                    number={5}
                    imageSrc={firstStoryImg}
                    storyText={finalBlockText}
                    backgroundColor="var(--ColorYellow)"
                    color="var(--ColorBlackText)"
                />
            </div>
        </div>
    )
}

export default Story