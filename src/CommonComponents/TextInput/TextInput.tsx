import { useState } from "react";

interface ITextInputProps {
    value: string;
    type: string;
    name: string;
    labelText: string;
    labelFor: string;
    onChange: (value: any) => void;
    reference: any;
}

const TextInput = ({ value, type, name, labelText, labelFor, onChange, reference }: ITextInputProps) => {

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
        <div className="input_container" onClick={() => handleLabelOnBlur(true)}>
            <label onClick={() => handleLabelOnFocus(true)} htmlFor={labelFor} className={isFocus ? 'focused_label' : 'blur_label'}>{labelText}</label>
            <input
                ref={reference}
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

