import { connect } from "react-redux";
import AboutMeUI from "./AboutMeUI";

interface IAboutMeProps {
    userDetails: any;
}

const AboutMe = ({ }: IAboutMeProps) => {

    // const [state, setState] = useState<IAboutMeState>({
    //     fullName: '',
    // });

    // const navigateToContactMe = () => {
    //     console.log("navigateToContactMe____called")
    // };

    return (
        <AboutMeUI />
    )
}

const mapStateProps = (state: any) => ({
    userDetails: state.userData.userDetails,
});

const mapDispatchToProps = {}; //need to check about this property

export default connect(mapStateProps, { ...mapDispatchToProps })(AboutMe);
