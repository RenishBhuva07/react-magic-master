import { useEffect, useState } from "react";

interface ICustomToastProps {
    message: string;
}
const CustomToast = ({ message }: ICustomToastProps) => {
    const [showToast, setShowToast] = useState(false);
    // const [toastMessage, setToastMessage] = useState(message);

    useEffect(() => {
        console.log("CustomToast_called_did_mount");
        setShowToast(true);
    }, [])


    useEffect(() => {
        if (showToast) {
            console.log("CustomToast_called_didUpdate");
            const timer = setTimeout(() => {
                setShowToast(false);
                // setToastMessage('');
            }, 4000);

            // Clear timeout if component unmounts or showToast changes
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    return (
        <div style={{ backgroundColor: 'yellow', position: 'absolute' }}>
            <h2 className="toastMessage">{message}</h2>
        </div>
    )
}

export default CustomToast

// export const showToast = (
//     message: string,
//     // duration = 4000,
//     // type: TOAST_TYPES = "success"
// ) => {
//     <div>
//         <h2>{message}</h2>
//     </div>
// };