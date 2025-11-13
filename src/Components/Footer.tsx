import { useContext } from "react";
import { UserContext } from "../UserContext.tsx";
import axios from "axios";


const Footer: React.FC = () => {

    const { user, setUser } = useContext(UserContext);


    const handleLogOut = () => {
        axios.post('/users/logoutAll',{}, {
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')?.replace(/['"]+/g, '')}`
            }
        })
        .then(function (response) {
            setUser(response.data)
        })
        .catch(function (error) {
            console.error(error)
        })
    }


    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '60px',
            backgroundColor: '#1e1e1e',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            color: '#fff',
            zIndex: 1000,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
        >
        <a rel="noreferrer" target="_blank" href={"https://drive.google.com/file/d/1LVQd2qZbaC7TF96OMATlBatraJNDFFbk/view?usp=sharing"} >
                <p>Rulebook</p>
        </a>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    )
}

export default Footer;