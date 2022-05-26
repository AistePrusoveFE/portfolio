import data from "../content";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import Wrapper from "../ui/Wrapper";
import Question from "./Question";

const About = () => {
    const questions = data.about

    return (
        <Wrapper>
            <div id="about" className="">
                <SectionTitle text="Let me introduce myself" />
                <SectionSubtitle text="I am a junior frontend developer and web designer with a passion for illustrations, based in Vilnius"/>
                <div className="lg:grid grid-cols-2 gap-x-4">
                    { questions.map((question, index) => {
                        return <Question key={index} {...question}/>
                    }) }
                </div>
            </div>
        </Wrapper>
    )
}

export default About
