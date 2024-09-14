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

// import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import {Toolbar} from '@mui/material';

// import IconButton from '@mui/material/IconButton';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';


/**
 * Fetches workspaces data from the server.
 *
 * @param {string} channelID
 * @param {function} setMessages
 */
async function getMessages(channelID, setMessages) {
  if (!channelID) {
    setMessages([]);
    return;
  }
  await fetch(`http://localhost:3010/v0/channel/${channelID}/message`, {
    method: 'get',
  })

      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((json) => {
        setMessages(json);
      })
      .catch((error) => {
        // console.error('Error fetching Messages:', error);
        setMessages([]);
      });
}

/**
 * @return {object} a <div> containing messages list
 */
function MessageList() {
  const {currentChannelID} = React.useContext(
      SharedContext,
  );

  const [messages, setMessages] = React.useState([]);


  // Fetch messages
  React.useEffect(() => {
    getMessages(currentChannelID, setMessages);
  }, [currentChannelID, setMessages]);

  return (
    <Box sx={{marginTop: '50px', marginBottom: '10px'}}>
      {messages && messages
          .sort((a, b) =>
            a.chat_data.received.localeCompare(b.chat_data.received))
          .map((message, index) => {
            const {received, from, content} = message.chat_data;

            return (
              <div key={index}>
                <Typography variant="subtitle1">
                  {`${new Date(received).toLocaleDateString()}`}
                </Typography>
                <Typography variant="subtitle1">
                  {`\t ${from} ${new Date(received).toLocaleTimeString()}`}
                </Typography>
                <Typography variant="body1">{`\t ${content}`}</Typography>
              </div>
            );
          })}
    </Box>
  );
}

export default MessageList;
