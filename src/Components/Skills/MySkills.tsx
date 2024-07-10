import { connect } from "react-redux";
import MySkillsUI from "./MySkillsUI";

interface IMySkillsProps {
    userDetails: any;
}

const MySkills = ({ }: IMySkillsProps) => {

    // const [state, setState] = useState<IMySkillsState>({
    //     fullName: '',
    // });

    // const navigateToContactMe = () => {
    //     console.log("navigateToContactMe____called")
    // };

    return (
        <MySkillsUI />
    )
}

const mapStateProps = (state: any) => ({
    userDetails: state.userData.userDetails,
});

const mapDispatchToProps = {}; //need to check about this property

export default connect(mapStateProps, { ...mapDispatchToProps })(MySkills);
