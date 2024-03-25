import { Route, Routes } from "react-router-dom"
import Splash from "../Components/Splash/Splash";
import Dashboard from "../Components/Dashboard/Dashboard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CoreAppRouter = () => {

    // const UserListLazy = React.lazy(() => new Promise(resolve => {
    //     setTimeout(() => {
    //         // return import("./Components/UserList")
    //         resolve({ default: () => <UserList /> });
    //     }, 2000);
    // }));

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="Router-Wrapper">
            <Routes>
                <Route path="/react-magic-master" element={<Splash />} />
                {/* <Route path="/login-signup" element={<SignUp />} /> */}
                <Route path="/dashboard" element={<Dashboard />} />
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
