import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import { Formik } from 'formik';
import { useState } from "react";
import powers from '../Powers/powers.json'
import TextField from "@mui/material/TextField";


const PointCalculator: React.FC = () => {
    const [total, setTotal] = useState(undefined);
    // const [options, setOptions] = useState(powers.records)

    const handleSubmit = (values) => {
        const { ranks, cost, pros, cons } = values
        const total = (ranks * cost) + pros + cons

        setTotal(total)
    }

    return (
        <div>
            <Typography>
                Points Calculator
            </Typography>
            <Formik
                onSubmit={(values) => handleSubmit(values)} 
                initialValues={{
                    ranks: 0,
                    cost: 0,
                    pros: 0,
                    cons: 0
                }}
                >{({
                    values,
                    handleChange,
                    handleSubmit,
                    setValues
                }) => {
                    
                const handleChangeSearch = (e) => {
                    const value = e.target as HTMLElement
                    const selection = powers.records.find((power) => power.name === value.innerHTML)
                    console.log('selection: ', parseInt(selection?.cost))
                    setValues({...values, cost: parseInt(selection?.cost)})
                }

                console.log('FIELD VALS: ', values)

                return (
                <form onSubmit={handleSubmit}>

                <Autocomplete
                    disablePortal
                    blurOnSelect
                    style={{
                        background: '#d2c7d6',
                        padding: '6px',
                        borderRadius: '8px'
                    }}
                    freeSolo={true}
                    onChange={handleChangeSearch}
                    getOptionLabel={(option) => option.name}
                    options={powers.records}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField name="name" {...params} label="Select Power" style={{borderRadius: '8px', background: 'white'}} />} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>

                    <div className='num-input'>
                        <label>Ranks</label>
                        <input name="ranks"value={values.ranks} style={{marginLeft: '10px', maxWidth: '80px'}} onChange={handleChange} type="number"/>
                    </div>


                    <div className="num-input">
                    <label>Cost</label>
                    <input name="cost"value={values.cost} style={{marginLeft: '10px', maxWidth: '80px'}} onChange={handleChange} type="number"/>
                    </div>

                    <div className="num-input">
                    <label>Pros</label>
                    <input name="pros"value={values.pros} style={{marginLeft: '10px', maxWidth: '80px'}} onChange={handleChange} type="number"/>
                    </div>

                    <div className="num-input">
                    <label>Cons</label>
                    <input name="cons" value={values.cons} style={{marginLeft: '10px', maxWidth: '80px'}} onChange={handleChange} type="number"/>
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