import { Route, Routes } from "react-router-dom"
import Splash from "../Components/Splash/Splash";
import SignUp from "../Components/LoginAndSignup/SignUp";

const CoreAppRouter = () => {

    // const UserListLazy = React.lazy(() => new Promise(resolve => {
    //     setTimeout(() => {
    //         // return import("./Components/UserList")
    //         resolve({ default: () => <UserList /> });
    //     }, 2000);
    // }));

    return (
        <div className="Router-Wrapper">
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/signup" element={<SignUp />} />
                {/* <Route path="user-list" element={<Suspense fallback={<LazyLoader />}><UserListLazy /></Suspense>} />
                <Route path="add-user" element={<AddUser />} />
                <Route path="/edit-user/:id" element={<AddUser />} /> */}
                {/* <Route path="user-list/*" element={<UserList />} >
                    <Route path='add-user/' element={<AddUser />} />
                    </Route> */}
            </Routes>
        </div>
    )
}

export default CoreAppRouter
