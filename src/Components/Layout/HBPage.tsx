import { ReactNode } from "react";
import './hb-page.css';


interface HBPageProps {
    children: ReactNode;
}


const HBPage: React.FC<HBPageProps> = ({children}) => {

    return (
        <div className="hb-page">
            {children}
        </div>
    )
}


export default HBPage;