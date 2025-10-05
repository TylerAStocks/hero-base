

const Footer: React.FC = () => {

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
        <a target="_blank" href={"https://drive.google.com/file/d/1LVQd2qZbaC7TF96OMATlBatraJNDFFbk/view?usp=sharing"} >
                <p>Rulebook</p>
        </a>
      </div>
    )
}

export default Footer;