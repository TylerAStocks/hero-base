import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


interface HBModalType {
    open: boolean;
    onClose: any;
    data: any;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll', 
  maxHeight: '80vh'
};


const HBModal: React.FC<HBModalType> = ({open, onClose, data}) => {


    console.log('data', data)

    return(
        <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            {data?.map((entry: any) => {
                return (
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '16px'}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <Typography variant="h6" style={{marginRight: '12px'}}>
                            {entry?.type}
                            </Typography>
                            <Typography variant="h6">
                            {entry?.name}
                            </Typography>
                        </div>
                        <Typography variant="h6">
                        ({entry?.cost})
                        </Typography>
                    <Typography id="modal-modal-title" >
                    {entry?.description}
                    </Typography>
                    </div>
                )
            })}
        </Box>
        </Modal>
    )
}

export default HBModal;