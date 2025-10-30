import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import { Formik } from 'formik';
import { useEffect, useState } from "react";
import powers from '../Powers/powers.json'
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import prosAndCons from '../ProsAndCons/prosAndCons.json'
import HBNumberInput from "../../Components/HBNumberInput.tsx";


const selectStyle = {
                        background: 'white',
                        width: '250px',
                        textWrap: 'wrap'
                    }



const PointCalculator: React.FC = () => {
    const [prosAndConsList, setProsAndConsList] = useState(prosAndCons.records) 

    const [prosList, setProsList] = useState(prosAndConsList.filter((record) => record.type === 'PRO'))
    const [consList, setConsList] = useState(prosAndConsList.filter((record) => record.type === 'CON'))
    const [total, setTotal] = useState(undefined);
    const[isPowerRank, setIsPowerRank] = useState(true)

    const handleSubmit = (values) => {
        const { ranks, cost, pros, cons } = values
        const total = (ranks * cost) + pros + cons

        setTotal(total)
    }

    useEffect(() => {
        setProsList(prosAndConsList.filter((record) => record.type === 'PRO'))
        setConsList(prosAndConsList.filter((record) => record.type === 'CON'))
    }, [prosAndConsList])

    return (
        <div>
            <Typography>
                Points Calculator
            </Typography>
            <Formik
                onSubmit={(values) => handleSubmit(values)} 
                initialValues={{
                    power: '',
                    ranks: 0,
                    cost: 0,
                    pros: 0,
                    prosList: [],
                    cons: 0,
                    consList: []
                }}
                >{({
                    values,
                    handleChange,
                    handleSubmit,
                    setValues
                }) => {


                const handleChangePower = (e) => {
                    const value = e.target as HTMLElement
                    console.log(value)
                    const selection = powers.records.find((power) => power.name.includes(value.innerHTML.split(' (')[0]))
                    const getCost = (val: string | undefined) => {
                        console.log('val: ', val)
                        
                        if (val?.includes('per 2 ranks')) {
                            return 0.5
                        }

                        return parseInt(val || '0')
                    }

                    if (selection?.children) {
                        setProsAndConsList([...prosAndCons.records, ...selection.children])
                    } else {
                        setProsAndConsList([...prosAndCons.records])
                    }

                    console.log('selection: ', selection)

                    setValues({...values, power: selection?.name, ranks: 1, cost: getCost(selection?.cost)})
                    setIsPowerRank(selection?.rank !== 'Default Rank')
                }

                const handleChangeProCon = (value) => {
                    const arr = value.target.value
                    let total = 0;
                    let fields = ['', ''];
                    let finalCost = parseInt(powers.records.find((power) => power.name === values.power)?.cost || '0')
                    const proCons = arr.map((item) => {
                        let proCon;
                        if (value.target.name.includes('pros')) {
                            proCon = prosList.find((pro) => pro.name === item)
                            fields = ['pros', 'prosList']
                        } else {
                            proCon = consList.find((con) => con.name === item)
                            fields = ['cons', 'consList']
                        }

                        if (proCon.cost.toLowerCase().includes('per power level')) {
                            finalCost += parseInt(proCon?.cost)
                        } else {
                            total += parseInt(proCon.cost)
                        }
                    
                        return item
                    })

                    if (Object.keys(proCons).length) {
                        setValues({...values, cost: finalCost.toString(), [fields[0]]: total, [fields[1]]: value.target.value})
                    } else {
                        setValues({...values, cost: finalCost.toString(), pros: 0, cons: 0, prosList: [], consList: []})
                    }
                    
                }

                return (
                <form onSubmit={handleSubmit}>

                <Autocomplete
                    disablePortal
                    blurOnSelect
                    name="power"
                    style={{
                        background: '#d2c7d6',
                        padding: '6px',
                        borderRadius: '8px'
                    }}
                    freeSolo={true}
                    onChange={handleChangePower}
                    getOptionLabel={(option) => `${option.name} (${option.cost})`}
                    options={powers.records}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField name="name" {...params} label="Select Power" style={{borderRadius: '8px', background: 'white'}} />} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>

                    <HBNumberInput name="ranks" label="Ranks" disabled={!isPowerRank} value={values.ranks} onChange={handleChange}/>


                    <HBNumberInput name="cost" label="Cost" value={values.cost} onChange={handleChange}/>

                    <div className="num-input">
                    <label>Pros</label>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                name="prosList"
                                multiple
                                value={values.prosList}
                                onChange={handleChangeProCon}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                style={selectStyle}
                                >
                                {prosList.map((pro) => (
                                    <MenuItem key={pro.name} value={pro.name}>
                                    <Checkbox checked={values.prosList?.includes(pro.name)} />
                                    <ListItemText primary={`${pro.name} (${pro.cost})`} />
                                    </MenuItem>
                                ))}
                                </Select>
                        <HBNumberInput name="pros" label="Pros cost" value={values.pros} onChange={handleChange}/>
                    </div>

                    <div className="num-input">
                    <label>Cons</label>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            name="consList"
                            multiple
                            value={values.consList}
                            onChange={handleChangeProCon}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            style={selectStyle}
                            >
                            {consList.map((con) => (
                                <MenuItem key={con.name} value={con.name}>
                                    <Checkbox checked={values.consList?.includes(con.name)} />
                                    <ListItemText primary={`${con.name} (${con.cost})`} />
                                </MenuItem>
                            ))}
                        </Select>
                    <HBNumberInput name="cons" label="Cons cost" value={values.cons} onChange={handleChange}/>
                    </div>
                    </div>

                    <button type="submit">Submit</button>
                </form>
                )}}
                </Formik>

                {total && (
                    <Typography>Total: {total}</Typography>
                )}

        </div>
    )
}

export default PointCalculator;