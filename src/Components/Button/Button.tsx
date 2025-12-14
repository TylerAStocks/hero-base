
import './button.css'


interface ButtonProps {
    children: any;
    onClick?: any;
    style?: any;
    type?: string;
}


const Button: React.FC<ButtonProps> = ({children, onClick, style, type}) => {

    const buttonType = type ? type : 'button'


    return (
        <button 
            className="button"
            onClick={onClick}
            style={style}
            type={buttonType}
        >
                {children}
        </button>
    )
}


export default Button;