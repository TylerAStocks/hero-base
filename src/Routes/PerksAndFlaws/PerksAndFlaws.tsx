import { useState } from "react";
import TabButton from "../../Components/DataTables/TabButton.tsx"
import Perks from "./Perks/Perks.tsx"
import Flaws from "./Flaws/Flaws.tsx";


const PerksAndFlaws: React.FC = () => {
    const [tab, setTab] = useState('Perks');

    return(
    <div>

    <p>Perks and Flaws</p>
    <TabButton name="Perks" setTab={setTab} tab={tab}/>
    <TabButton name="Flaws" setTab={setTab} tab={tab}/>

    {tab === 'Perks' && (
        <Perks />
    )}
    {tab === 'Flaws' && (
        <Flaws />
    )}

    </div>
    )
}

export default PerksAndFlaws