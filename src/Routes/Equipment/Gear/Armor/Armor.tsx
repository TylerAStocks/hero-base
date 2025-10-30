


import Typography from '@mui/material/Typography';
import HBDataTable from '../../../../Components/DataTables/HBDataTable.tsx';
import armor from './armor.json'
import HBPage from '../../../../Components/Layout/HBPage.tsx';

const Armor: React.FC = () => {
  return (
    <HBPage>

<p style={{fontSize: '14px'}}>{armor.main}</p>
    <Typography variant="h4">Armor Features</Typography>

    <Typography variant="h6">Bulky</Typography>
    <Typography>Characters wearing this armor suffer a −1d penalty on challenge
rolls involving acrobatics, speed, stealth, and swimming unless
they have a Might of 4d or greater.</Typography>

<Typography variant="h6">Rigid</Typography>
<Typography>Characters wearing this armor suffer a −1d penalty on challenge
rolls involving acrobatics, speed, stealth, and swimming.</Typography>


    <Typography variant="h4">Shields</Typography>
    <Typography>Using a mundane shield in your off-hand grants you a +1d
Shield Bonus to both active and passive defense rolls against
physical and energy attacks. You can use a shield as an off-hand
weapon if you wish (see Weapons below), but you then lose the
defensive benefit provided by the shield until your next turn to
act. Shields provide no benefit when you are surprised or unable
to defend yourself.</Typography>


<HBDataTable tab="armor" records={armor.records} />

    </HBPage>
  );
}

export default Armor;