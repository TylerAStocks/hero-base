
const numStyle = {
    marginLeft: '10px', maxWidth: '60px'
}


interface HBNumberInputType {
    name: string;
    label: string;
    disabled?: boolean;
    value: any;
    onChange: any;
}


const HBNumberInput: React.FC<HBNumberInputType> = ({name, label, disabled, value, onChange}) => {

    return (
        <div className='num-input'>
            <label>{label}</label>
            <input disabled={disabled} name={name} value={value} style={numStyle} onChange={onChange} type="number"/>
        </div>
    )

}

export default HBNumberInput;