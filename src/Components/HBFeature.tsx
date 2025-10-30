import Typography from "@mui/material/Typography";
import { ReactNode } from "react";



interface HBFeatureProps {
    label: string;
    children: ReactNode;
}


const HBFeature: React.FC<HBFeatureProps> = ({label, children}) => {


    return (
        <>
        <Typography variant="h6">{label}</Typography>
        <Typography>{children}</Typography>
        </>
    )
}

export default HBFeature;