import { connect } from "react-redux";
import AboutMeUI from "./AboutMeUI";

interface IDashboardProps {
    userDetails: any;
}

const Dashboard = ({ }: IDashboardProps) => {

    // const [state, setState] = useState<IDashboardState>({
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

export default connect(mapStateProps, { ...mapDispatchToProps })(Dashboard);
