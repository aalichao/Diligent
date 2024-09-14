/*
#######################################################################
#
# Copyright (C) 2020-2024 David C. Harrison. All right reserved.
#
# You may not use, distribute, publish, or modify this code without
# the express written permission of the copyright holder.
#
#######################################################################
*/

import React from 'react';
import {useNavigate} from 'react-router-dom';
import SharedContext from './SharedContext';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import Paper from '@mui/material/Paper';

/**
 * @return {object} a <div> containing an <h2>
 * BotBar from
 * https://mui.com/material-ui/react-bottom-navigation/
 */
function BotBar() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  const {setCurrentWorkspaceID, setCurrentChannelName, OpenChannel,
    setOpenChannel, setCurrentChannelID} = React.useContext(SharedContext);

  const history = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentWorkspaceID('');
    setCurrentChannelName('');
    setCurrentChannelID('');
    setOpenChannel(false);
    history('/login');
  };

  return (
    <Box sx={{pb: 7}} ref={ref}>
      <CssBaseline />
      <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0,
        height: '50px'}}
      elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction disabled={!OpenChannel}
            onClick={() => setOpenChannel(false)}
            label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Logout"
            onClick={logout} icon={<LogoutIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default BotBar;
