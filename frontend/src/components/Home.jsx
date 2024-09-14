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
import TopBar from './TopBar';

import ChannelList from './ChannelList';
import MessageList from './MessageList';
import BotBar from './BotBar';

/**
 * @return {object} JSX Table
 */
function Home() {
  // const user = JSON.parse(localStorage.getItem('user'));

  // const [name, setName] = React.useState(user ? user.name : '');

  const [currentWorkspaceID, setCurrentWorkspaceID] = React.useState('');

  const [currentChannelName, setCurrentChannelName] = React.useState('');
  const [currentChannelID, setCurrentChannelID] = React.useState('');

  const {OpenChannel, setOpenChannel} = React.useContext(SharedContext);

  return (
    <SharedContext.Provider value = {{currentWorkspaceID, currentChannelID,
      currentChannelName, setCurrentChannelName,
      OpenChannel, setOpenChannel,
      setCurrentChannelID, setCurrentWorkspaceID}}>
      <TopBar />
      {!OpenChannel && <ChannelList />}
      {OpenChannel && <MessageList />}
      <BotBar />
    </SharedContext.Provider>
  );
}

export default Home;
