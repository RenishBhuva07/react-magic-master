import { CustomAnimation } from "../../CommonComponents/CustomAnimation/CustomAnimation"
import CustomButton from "../../CommonComponents/CustomButton/CustomButton"
import { ANIMATIONS } from "../../Utilities/Animations"

interface IMySkillsUIProps {
}

const MySkillsUI = ({ }: IMySkillsUIProps) => {


    return (
        <>
            <div className="MainContainer about_wrapper">
                <div className="row flex-row py-7" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="col-lg-7">
                        <div className="about_wrapper">
                            <h2 className="section_title">My Skills</h2>
                            <p className="author_intro" data-aos="zoom-in-up" data-aos-duration="1000">
                                Hey there! I'm Renish Bhuva, a skilled Software Engineer based in Ahmedabad, Gujarat. I specialize in crafting innovative solutions for Cross-Platform Mobile Applications (Android and iOS) and Web Applications, aimed at enhancing the digital landscape for the next generation. I Enjoy Creating Things That Live On The Internet.
                            </p>
                            <p className="author_intro mt-2" data-aos="zoom-in-up" data-aos-duration="1000">
                                Hey there! I'm Renish Bhuva, a skilled Software Engineer based in Ahmedabad, Gujarat. I specialize in crafting innovative solutions for Cross-Platform Mobile Applications (Android and iOS) and Web Applications, aimed at enhancing the digital landscape for the next generation. I Enjoy Creating Things That Live On The Internet.
                            </p>
                            <div className="mt-4" data-aos="zoom-in-up" data-aos-duration="1000">
                                <CustomButton buttonText="Hire Me" />
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="col-lg-5">
                        <CustomAnimation animationFile={ANIMATIONS.Skills} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MySkillsUI
