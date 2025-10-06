import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
                <Typography id="modal-modal-title" variant="h6" component="h2">
                {entry?.description}
                </Typography>
                )
            })}
        </Box>
        </Modal>
    )
}

export default HBModal;