import { CustomAnimation } from "../../CommonComponents/CustomAnimation/CustomAnimation"
import { ANIMATIONS } from "../../Utilities/Animations"

interface IAboutMeUIProps {
}

const AboutMeUI = ({ }: IAboutMeUIProps) => {


    return (
        <>
            <div className="MainContainer about_wrapper">
                <div className="row flex-row py-7" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="col-lg-4">
                        <CustomAnimation animationFile={ANIMATIONS.AboutMe} />
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1000" className="col-lg-8">
                        <div className="about_wrapper">
                            <h2 className="section_title">More About Me</h2>
                            <p className="author_intro" data-aos="zoom-in-up" data-aos-duration="1000">
                                Hey there! I'm Renish Bhuva, a skilled Software Engineer based in Ahmedabad, Gujarat. I specialize in crafting innovative solutions for Cross-Platform Mobile Applications (Android and iOS) and Web Applications, aimed at enhancing the digital landscape for the next generation. I Enjoy Creating Things That Live On The Internet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMeUI
