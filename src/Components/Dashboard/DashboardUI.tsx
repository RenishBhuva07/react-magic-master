import Header from "../Header/Header"
import { ANIMATIONS } from "../../Utilities/Animations"
import { CustomAnimation } from "../../CommonComponents/CustomAnimation/CustomAnimation"
import { USER_TECHS } from "../../Utilities/Data/PrefKeys"

interface IDashboardUIProps {
}

const DashboardUI = ({ }: IDashboardUIProps) => {


    return (
        <>
            <Header />
            {/* DashBoard Main Conten Start */}
            <div className="MainContainer dashboard_wrapper">
                <div className="row flex-row">
                    <div className="col-lg-6">

                        <div className="head_wrapper d-flex justify-content-center align-items-center">
                            <div className="title_wrapper">
                                <h1 className="author_name" data-aos="zoom-in-up" data-aos-duration="1000">Hey, I'm Renish Bhuva</h1>
                                <div className="wrapper d-flex" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <div className="col-lg-5 static-txt">Software Engineer :</div>
                                    <ul className="col-lg-7 dynamic-txts">
                                        {USER_TECHS.map(tech => (<li><span>{tech}</span></li>))}
                                    </ul>
                                </div>
                                <p className="author_intro" data-aos="zoom-in-up" data-aos-duration="1000">
                                    I am Software Engineer. I Enjoy Creating Things That Live On The Internet. Also, I’m
                                    Crafting Innovative & High-Performing Solutions and User-Friendly Applications to
                                    Enhance the Digital World for Next-Generation. I Always Works Towards Achieving the
                                    Best Result on Each Project, I Lay My Hands On. My Focus Is on Creating Engaging,
                                    Accessible & Performant Interfaces for Humans.
                                </p>
                                <div className="d-flex">
                                    <div style={{ width: "120px", height: "120px" }}>
                                        <CustomAnimation animationFile={ANIMATIONS.LinkedIn} animationStyle={{ width: "100%", height: "100%" }} />
                                    </div>
                                    <div style={{ width: "120px", height: "120px" }}>
                                        <CustomAnimation animationFile={ANIMATIONS.LinkedIn} animationStyle={{ width: "100%", height: "100%" }} />
                                    </div>
                                    <div style={{ width: "120px", height: "120px" }}>
                                        <CustomAnimation animationFile={ANIMATIONS.LinkedIn} animationStyle={{ width: "100%", height: "100%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div data-aos="zoom-in-up" data-aos-duration="1000" style={{ width: "100%", height: "90%" }} className="mt-2">
                            <CustomAnimation animationFile={ANIMATIONS.Developer} />
                        </div>
                    </div>
                </div>
                {/* <div className="row flex-row">
                    <div>
                        <CustomAnimation animationFile={ANIMATIONS.ContactMe} />
                    </div>
                </div>
                <div className="row flex-row">
                    <div>
                        <CustomAnimation animationFile={ANIMATIONS.Skills} />
                    </div>
                </div> */}
            </div>
            {/* DashBoard Main Conten End */}
        </>
    )
}

export default DashboardUI
