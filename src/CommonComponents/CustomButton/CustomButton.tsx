
interface ICustomButtonProps {
    buttonText: string;
    onClick: () => void;
    styleName: string;
}
const CustomButton = ({ buttonText, onClick, styleName }: ICustomButtonProps) => {
    return (
        <div>
            <button
                // className="custom_button"
                className={styleName}
                onClick={onClick}>
                {buttonText}
            </button>
        </div>
    )
}

export default CustomButton
