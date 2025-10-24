import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import growthChart from './growth.png';
import leapingChart from './leaping-chart.png';
import shrinkingChart from './shrinking.png';
import { useEffect, useState } from 'react';


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
  bgcolor: '#c9decf',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll', 
  maxHeight: '80vh'
};


const HBModal: React.FC<HBModalType> = ({open, onClose, data}) => {


    const [img, setImg] = useState(data?.image)

    console.log('modal data: ', data)


    useEffect(() => {

        switch(data?.image){
            case 'growth':
                setImg(growthChart);
                return;
            case 'leaping':
                setImg(leapingChart)
                return;
            case 'shrinking':
                setImg(shrinkingChart);
                return;
            default:
                setImg(null)
                return;
            
        }
    }, [data?.image])



    return(
        <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            {data?.children?.map((entry: any) => {
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


            {data?.image && (
                <img src={img} alt={data?.image}/>
            )}
        </Box>
        </Modal>
    )
}

export default HBModal;