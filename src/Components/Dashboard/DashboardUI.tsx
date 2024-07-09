import Header from "../Header/Header"
import { ANIMATIONS } from "../../Utilities/Animations"
import { CustomAnimation } from "../../CommonComponents/CustomAnimation/CustomAnimation"
import { USER_TECHS } from "../../Utilities/Data/PrefKeys"
import CustomButton from "../../CommonComponents/CustomButton/CustomButton"
import AboutMe from "../AboutMe/AboutMe"

interface IDashboardUIProps {
    onClickContactMe: () => void;
}

const DashboardUI = ({ onClickContactMe }: IDashboardUIProps) => {


    return (
        <>
            <Header />
            {/* DashBoard Main Conten Start */}
            <div className="MainContainer dashboard_wrapper">
                <div className="row flex-row pb-7">
                    <div className="col-lg-6">

                        <div className="head_wrapper d-flex justify-content-center align-items-center">
                            <div className="title_wrapper">
                                <h2 className="section_title" data-aos="zoom-in-up" data-aos-duration="1000">Hey,</h2>
                                <h1 className="author_name" data-aos="zoom-in-up" data-aos-duration="1000">I'm Renish Bhuva</h1>
                                <div className="wrapper d-flex" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <div className="col-lg-5 static-txt">Software Engineer :</div>
                                    <ul className="col-lg-7 dynamic-txts">
                                        {USER_TECHS.map(tech => (<li><span>{tech}</span></li>))}
                                    </ul>
                                </div>
                                <p className="author_intro" data-aos="zoom-in-up" data-aos-duration="1000">
                                    I am an experienced Software Engineer with expertise in React Native, React JS, TypeScript, and JavaScript. I am dedicated to crafting innovative and high-performing solutions, along with user-friendly Cross-Platform Mobile Applications (Android and iOS) and Web Applications to Enhance the Digital world
                                    for Next-Generation.
                                </p>
                                <div className="row flex-row mt-2">
                                    <div className="col-lg-4 d-flex justify-content-center align-items-center" data-aos="zoom-in-up" data-aos-duration="1000">
                                        <CustomAnimation animationFile={ANIMATIONS.GitHub} animationStyle={{ width: "60%", height: "60%" }} />
                                    </div>
                                    <div className="col-lg-4 d-flex justify-content-center align-items-center" data-aos="zoom-in-up" data-aos-duration="1000">
                                        <CustomAnimation animationFile={ANIMATIONS.LinkedIn} animationStyle={{ width: "45%", height: "45%" }} />
                                    </div>
                                    <div className="col-lg-4 d-flex justify-content-center align-items-center" data-aos="zoom-in-up" data-aos-duration="1000">
                                        <CustomAnimation animationFile={ANIMATIONS.GMail} animationStyle={{ width: "60%", height: "60%" }} />
                                    </div>
                                    {/* <div className="d-flex justify-content-center align-items-center" data-aos="zoom-in-up" data-aos-duration="1000">
                                        <CustomAnimation animationFile={ANIMATIONS.CallMe} animationStyle={{ width: "70%", height: "70%" }} />
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center" data-aos="zoom-in-up" data-aos-duration="1000">
                                        <CustomAnimation animationFile={ANIMATIONS.WhatsApp} animationStyle={{ width: "85%", height: "85%" }} />
                                    </div> */}
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <div className="" data-aos="zoom-in-up" data-aos-duration="1000">
                                        <CustomButton buttonText="Get In Touch" onClick={onClickContactMe} />
                                    </div>
                                    <div className="" data-aos="zoom-in-up" data-aos-duration="1000">
                                        <CustomButton buttonText="Curriculum Vitae" onClick={onClickContactMe} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div data-aos="zoom-in-up" data-aos-duration="1000" className="mt-2">
                            <CustomAnimation animationFile={ANIMATIONS.Developer} />
                        </div>
                    </div>
                </div>
                {/* <div data-aos="zoom-in-up" data-aos-duration="1000" className="row flex-row">
                    <div>
                        <CustomAnimation animationFile={ANIMATIONS.ContactMe} />
                    </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1000" className="row flex-row">
                    <div>
                        <CustomAnimation animationFile={ANIMATIONS.Skills} />
                    </div>
                </div> */}
            </div>
            {/* DashBoard Main Conten End */}
            <AboutMe />
        </>
    )
}

export default DashboardUI
