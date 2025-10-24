
import FormControlLabel from "@mui/material/FormControlLabel";
import { Formik } from "formik";
import { useReducer, useState } from "react";
import ChildForm from "./ChildForm.tsx";


const PowerAdder:React.FC = () => {

    const [children, setChildren] = useState([])
    const [, forceUpdate] = useReducer(x => x + 1, 0);


    const handleChangeChildren = (val) => {
        console.log(val)
        const cArr = children
        if (val > children.length) {
            cArr.push({type: '', name: '', cost: '', description: ''})
        } else {
            cArr.pop()
        }
        setChildren(cArr)
        forceUpdate()
    }

    const handleUpdateChild = (value, field, index) => {
        let newChildren = children
        newChildren[index] = {...newChildren[index], [field]: value}
    }

    const handleSubmitPower = (values) => {
        let submitVals = values
        if (children.length > 0) {
            submitVals = {...submitVals, children}
        }
        console.log(submitVals)
        console.log(JSON.stringify(submitVals))
    }

    const initValues = {
                name: '',
                range: '',
                rank: '',
                cost: '',
                description: '',
            }

    return(
        <div>
            <Formik 
            initialValues={initValues} 
            onSubmit={handleSubmitPower}>

            {({
                    values,
                    handleChange,
                    handleSubmit,
                    setValues
                }) => (
                    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
                        <label>Name</label>
                        <input value={values.name} name="name" onChange={handleChange}/>

                        <label>Range</label>
                        <input value={values.range} name="range" onChange={handleChange}/>

                        <label>Rank</label>
                        <input value={values.rank} name="rank" onChange={handleChange}/>

                        <label>Cost</label>
                        <input value={values.cost} name="cost" onChange={handleChange}/>

                        <label>description</label>
                        <textarea value={values.description} name="description" onChange={handleChange}/>

                        <FormControlLabel control={<input type="number" />} label="children?" onChange={(e) => handleChangeChildren(e.target.value)}/>
                        {children.map((child) => (
                            <ChildForm childVals={child} onChange={handleUpdateChild} index={children.indexOf(child)}/>
                        ))}

                        <button>Submit</button>
                        <button type="button" onClick={() => setValues(initValues)}>Clear</button>

                    </form>
                )}



        </Formik>
        </div>
    )
}

export default PowerAdder;