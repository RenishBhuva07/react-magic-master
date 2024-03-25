import { Link } from "react-router-dom"
import { CustomAnimation } from "../../CommonComponents/CustomAnimation/CustomAnimation"
import { ANIMATIONS } from "../../Utilities/Animations"

interface IHeaderUIProps {
}

const HeaderUI = ({ }: IHeaderUIProps) => {

    return (
        <header>
            <div className="header_wrapper">
                <div className="menu_bar d-flex justify-content-evenly">
                    <div className="menus" data-aos="fade-right" data-aos-duration="1000">
                        <ul className="menu_ul" >
                            <Link to={"/aboutme"}>
                                <li className="menu_li" key='about'>About</li>
                            </Link>
                            <Link to={"/myskils"}>
                                <li className="menu_li" key='skills'>Skills</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="react_home" data-aos="fade-down" data-aos-duration="1000">
                        <Link to={"/home"}>
                            <CustomAnimation animationFile={ANIMATIONS.React} animationStyle={{ width: "100%", height: "100%", }} key='home' />
                        </Link>
                    </div>
                    <div className="menus" data-aos="fade-left" data-aos-duration="1000">
                        <ul className="menu_ul">
                            <Link to={"/projects"}>
                                <li className="menu_li" key='projects'>Projects</li>
                            </Link>
                            <Link to={"/experience"}>
                                <li className="menu_li" key='experience'>Experience</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderUI
