import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TouchAppIcon from '@mui/icons-material/TouchApp';
//import ShareIcon from '@mui/icons-material/Share';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import FormCommand from './FormCommand02';



const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  }));

const actions = [
  { icon: <TouchAppIcon />, name: 'passer une commande' },
  { icon: <LocalShippingIcon />, name: 'Ajouter Vehicule' },
  { icon: <AccountCircleIcon />, name: 'Profile' },
];

export default function UserSpeedDial() {

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <StyledSpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        direction={"left"}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            onClick={() => { if(action.name === 'Ajouter Vehicule') { navigate('/user/vehicules') }
                             if(action.name === 'Profile') { navigate('/user/profile')}
                             if(action.name === 'passer une commande') { handleClickOpen()} } }
            tooltipTitle={action.name}
          />
        ))
        }
        <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Commande</DialogTitle>
                <DialogContent>
                              <DialogContentText>
                                                Precisez nous vos besoins et un agent vous contactera dans 
                                                l'heure pour finaliser votre commande!!
                              </DialogContentText>
                                                  <FormCommand />
                </DialogContent>
                              <DialogActions>
                                            <Button onClick={handleClose}>Annuler</Button>
                                            <Button onClick={handleClose}>Confirmer</Button>
                              </DialogActions>
        </Dialog>
      </StyledSpeedDial>
    </Box>
  );
}