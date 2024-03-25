import { useEffect } from "react";
import DashboardUI from "./DashboardUI";
import { connect } from "react-redux";

interface IDashboardProps {
    userDetails: any;
}
// interface IDashboardState {
//     fullName: string;
// }

const Dashboard = ({ }: IDashboardProps) => {

    // const [state, setState] = useState<IDashboardState>({
    //     fullName: '',
    // });

    useEffect(() => {
        // console.log("State_data____", userDetails);
        // setState({
        //     fullName: `Hey ${userDetails?.first_name} ${userDetails?.last_name}`,
        // })
        return () => {
        }
    }, [])



    return (
        <DashboardUI />
    )
}

const mapStateProps = (state: any) => ({
    userDetails: state.userData.userDetails,
});

const mapDispatchToProps = {}; //need to check about this property

export default connect(mapStateProps, { ...mapDispatchToProps })(Dashboard);
