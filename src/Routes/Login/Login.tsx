import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import HBPage from "../../Components/Layout/HBPage.tsx"
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';
import { useContext, useState } from "react";
import { UserContext } from "../../UserContext.tsx";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


const Login: React.FC = () => {

    const { user, setUser } = useContext(UserContext);
    const [create, setCreate] = useState(false);


    const updateCreate = (checked) => {
        setCreate(checked);
    }


    const submitUser = (values) => {
        console.log(values)

        if (create) {
            axios.post('/users', {
                name: values.name,
                //email: values.email,
                password: values.password
            })
            .then(function (response) {
                setUser(response.data)
                localStorage.setItem('userToken', JSON.stringify(response.data.token));
            })
            .catch(function (error) {
                console.error(error)
            })
        } else {
            axios.post('/users/login', {
                name: values.name,
                // email: values.email,
                password: values.password
            })
            .then(function (response) {
                setUser(response.data)
                localStorage.setItem('userToken', JSON.stringify(response.data.token));
            })
            .catch(function (error) {
                console.error(error)
            })
        }

    }



    const initVals = {
        name: '',
        password: '',
    }


    console.log('CREATE: ', create)

    return (
        <HBPage>

        <span>{create ? 'Register New User' : 'Login'}</span>
        {user && (
            <>
            <span>Welcome, {user.user.name}!</span>
            </>

          )}


            <Formik 
            initialValues={initVals} 
            onSubmit={(values) => submitUser(values)} 
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    setValues
                }) => (
                    <Form>
                        <TextField style={{background: 'white'}} label="Name" name="name" value={values.name} onChange={handleChange}/>
                        <TextField style={{background: 'white'}} label="Password" name="password" value={values.password} onChange={handleChange}/>
                        <button type="submit">Submit</button>
                    </Form>
                )}

                
            </Formik>


            <Button variant="text" onClick={() => setCreate(!create)}>{create ? 'Login Existing User' : 'Register New User'}</Button>



        {user && (
            <>
                <span>User Profile: </span>
                <span>Name {user.user.name}</span>
            </>
        )}



        </HBPage>
    )
}


export default Login;