
interface ICustomButtonProps {
    buttonText: string;
    onClick: () => void;
    styleName?: string;
}
const CustomButton = ({ buttonText, onClick, styleName }: ICustomButtonProps) => {
    return (
        <div>
            <button
                className={`pulseBox btn ${styleName ? styleName : ''}`}
                // className={styleName}
                onClick={onClick}>
                {buttonText}
            </button>
        </div>
    )
}

export default CustomButton
