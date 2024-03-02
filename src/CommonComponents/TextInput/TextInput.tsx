import { useState } from "react";

interface ITextInputProps {
    value: string;
    type: string;
    name: string;
    labelText: string;
    labelFor: string;
    onChange: (value: any) => void;
}

const TextInput = ({ value, type, name, labelText, labelFor, onChange }: ITextInputProps) => {

    const [isFocus, setIsFocus] = useState(false);

    const handleLabelOnFocus = (focueMode: boolean) => {
        setIsFocus(focueMode)
    };
    const handleLabelOnBlur = (focueMode: boolean) => {
        if (value === '') {
            setIsFocus(focueMode)
        }
    };

    return (
        <div className="input_container">
            <label onClick={() => handleLabelOnFocus(true)} htmlFor={labelFor} className={isFocus ? 'focused_label' : 'blur_label'}>{labelText}</label>
            <input
                value={value}
                type={type} // text button checkbox date email file month number password radio search submit tel url
                name={name}
                onChange={(e) => { onChange(e.target.value) }}
                onFocus={() => handleLabelOnFocus(true)}
                onBlur={() => handleLabelOnBlur(false)}
            />
        </div>
    )
}

export default TextInput

