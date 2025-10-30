import { ReactNode } from "react";


interface HBPageProps {
    children: ReactNode;
}


const HBPage: React.FC<HBPageProps> = ({children}) => {

    return (
        <div style={{margin: '10px', marginBottom: '40px', padding: '20px', paddingBottom: '30px'}}>
            {children}
        </div>
    )
}


export default HBPage;