import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ShareIcon from '@mui/icons-material/Share';
import { styled } from '@mui/material/styles';



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
  { icon: <ShareIcon />, name: 'Share' },
];

export default function UserSpeedDial() {
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
            tooltipTitle={action.name}
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
}