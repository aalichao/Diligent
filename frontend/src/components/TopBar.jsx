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
import './Home.css';

import SharedContext from './SharedContext';
import Workspaces from './Workspaces';

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

/**
 * @return {object} a <div> containing an <h2>
 */
function TopBar() {
  const drawerWidth = 240;

  const {currentWorkspaceID, setCurrentWorkspaceID, OpenChannel,
    setOpenChannel, currentChannelName} =
    React.useContext(SharedContext);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: {sm: '100%'},
        height: '50px',
        ml: {md: `${drawerWidth}px`},
        backgroundColor: 'purple',
        zIndex: (theme) => theme.zIndex.drawer + 2,
      }}
    >
      {/* Workspaces */}
      <SharedContext.Provider value = {{currentWorkspaceID,
        setCurrentWorkspaceID}}>
        {!OpenChannel && <Workspaces />}
        {OpenChannel &&
        <div style={{display: 'flex', alignItems: 'center',
          marginLeft: '10px'}}>
          <IconButton onClick={() => setOpenChannel(false)}
            sx={{marginTop: '5px'}}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h7" noWrap component="div"
            sx={{color: 'black', marginLeft: '10px',
              marginBottom: '5px', alignSelf: 'flex-end'}}>
            {currentChannelName}
          </Typography>
        </div>}
      </SharedContext.Provider>
    </AppBar>
  );
}


export default TopBar;
