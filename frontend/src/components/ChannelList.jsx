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
import SharedContext from './SharedContext';

// import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NumbersIcon from '@mui/icons-material/Numbers';

// import AppBar from '@mui/material/AppBar';
/**
 * Fetches workspaces data from the server.
 *
 * @param {string} workspaceID
 * @param {function} setChannels
 */
async function getChannels(workspaceID, setChannels) {
  if (!workspaceID) {
    setChannels([]);
    return;
  }
  await fetch(`http://localhost:3010/v0/workspace/${workspaceID}/channel`, {
    method: 'get',
  })

      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((json) => {
        setChannels(json);
      })
      .catch((error) => {
        // console.error('Error fetching Channels:', error);
        setChannels([]);
      });
}

/**
 * @return {object} a <div> containing an <h2>
 * Nested List from
 * https://mui.com/material-ui/react-list/#nested-list
 */
function ChannelList() {
  const {currentWorkspaceID, setOpenChannel,
    setCurrentChannelName, setCurrentChannelID} =
    React.useContext(SharedContext);

  const [channels, setChannels] = React.useState([]);

  // Fetch workspaces
  React.useEffect(() => {
    getChannels(currentWorkspaceID, setChannels);
  }, [currentWorkspaceID]);

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChannelChange = (channelName, channelId) => {
    setCurrentChannelID(channelId);
    setCurrentChannelName(channelName);
    setOpenChannel(true);
  };

  return (
    <div>
      {/* <AppBar
        position="fixed"
        sx={{
          width: {sm: '100%'},
          ml: {md: `240px`},
          backgroundColor: 'purple',
        }}
      ></AppBar> */}
      <List
        role="list"
        sx={{width: '100%', maxWidth: 360,
          marginTop: '50px', bgcolor: 'background.paper'}}
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
      >
        <ListItemButton aria-label='ChannelOpen'
          onClick={handleClick}>
          <ListItemText primary="Channels" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List aria-label='mainlist' component="div" disablePadding>
            {channels.map((channel) => (
              <ListItemButton
                aria-label={channel.channel_data.name}
                onClick={() =>
                  handleChannelChange(channel.channel_data.name, channel.id)}
                key={channel.id}
                value={channel.channel_data.name}
                sx={{pl: 4}}>
                <ListItemIcon>
                  <NumbersIcon />
                  <ListItemText
                    role="listitem"
                    primary={channel.channel_data.name} />
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </div>
  );
}

export default ChannelList;
