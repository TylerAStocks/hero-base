


interface InputProps {
    label: string;
    name: string;
    type: "text" | "number" | "password" | "email";
    value: any;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;

}


const Input: React.FC<InputProps> = ({type, name, label, disabled, value, onChange, ...params}) => {



    return(
        <div className="input-container">
            <label className="input-label">{label}</label>
            <input 
            className={`${type}-input`}
                name={name}
                disabled={disabled}
                value={value}
                type={type} 
                onChange={onChange}
                {...params}
            />
        </div>
    )
}

export default Input;