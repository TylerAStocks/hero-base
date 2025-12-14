


interface SelectProps {
    label: string;
    name: string;
    id: string;
    options: any[];
    optionLabel: string;
    onChange?: React.ChangeEventHandler;
}

const Select: React.FC<SelectProps> = ({label, name, id, options, optionLabel, onChange}) => {

    return(
        <div className="input-container">
            <label className="input-label">{label}</label>
            <select className="text-input" name={name} id={id} onChange={onChange}>
                <option></option>
            {options?.map((opt) => {
                return (
                    <option value={opt[optionLabel]}>{opt[optionLabel]}</option> 
                )
            })}
            </select>
        </div>
    )
}

export default Select;