import Typography from "@mui/material/Typography";
import { Formik } from 'formik';
import { useState } from "react";


const PointCalculator: React.FC = () => {
    const [total, setTotal] = useState(undefined);

    const handleSubmit = (values: { ranks: number; cost: number; pros: number; cons: number }) => {
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
                    cost: 0
                }}
                >{({
                    values,
                    handleChange,
                    handleSubmit
                }) => (
                <form onSubmit={handleSubmit}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>

                    <div className='num-input'>
                        <label>Ranks</label>
                        <input style={{marginLeft: '10px', maxWidth: '80px'}} onChange={handleChange} name="ranks" type="number"/>
                    </div>


                    <div className="num-input">
                    <label>Cost</label>
                    <input style={{marginLeft: '10px', maxWidth: '80px'}} onChange={handleChange} name="cost" type="number"/>
                    </div>

                    <div className="num-input">
                    <label>Pros</label>
                    <input style={{marginLeft: '10px', maxWidth: '80px'}} onChange={handleChange} name="pros" type="number"/>
                    </div>

                    <div className="num-input">
                    <label>Cons</label>
                    <input style={{marginLeft: '10px', maxWidth: '80px'}} onChange={handleChange} name="cons" type="number"/>
                    </div>
                    </div>

                    <button type="submit">Submit</button>
                </form>
                )}

            </Formik>

                {total && (
                    <Typography>Total: {total}</Typography>
                )}

        </div>
    )
}

export default PointCalculator;