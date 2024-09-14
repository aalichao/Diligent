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

import {Box} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

/**
 * Fetches workspaces data from the server.
 *
 * @param {function} setWorkspaces Set the workspaces state
 */
async function getWorkspaces(setWorkspaces) {
  const user = JSON.parse(localStorage.getItem('user'));
  const bearerToken = user ? user.accessToken : '';
  await fetch(`http://localhost:3010/v0/workspace/`, {
    method: 'get',
    headers: new Headers({
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  })

      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((json) => {
        setWorkspaces(json);
      })
      .catch((error) => {
        // console.error('Error fetching workspaces:', error);
        setWorkspaces([]);
      });
}

/**
 * Component to display workspaces.
 *
 * @return {object} JSX
 */
function Workspaces() {
  const {setCurrentWorkspaceID} =
    React.useContext(SharedContext);
  // const [currentWorkplace, setCurrentWorkplace] = React.useState('');

  const [workspaces, setWorkspaces] = React.useState([]);

  // Fetch workspaces
  React.useEffect(() => {
    getWorkspaces(setWorkspaces);
  }, [setWorkspaces]);

  React.useEffect(() => {
    setCurrentWorkspaceID(workspaces?.[0]?.workspace_id);
    // setCurrentWorkplace(workspaces[0]?.workspace_data.name);
  }, [workspaces, setCurrentWorkspaceID]);

  const handleWorkspaceChange = (event) => {
    const selectedWorkspaceID = event.target.value;
    setCurrentWorkspaceID(selectedWorkspaceID);
  };

  return (
    <Box sx={{display: 'flex', alignItems: 'center', minWidth: 120,
      marginLeft: '10px'}}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="workspace-native">
        </InputLabel>
        <NativeSelect
          data-testid="workspace-select"
          onChange={handleWorkspaceChange}
          inputProps={{
            name: 'workspace',
            id: 'workspace-native',
          }}
        >
          {workspaces.map((workspace) => (
            <option aria-label={workspace.workspace_data.name}
              key={workspace.workspace_id}
              value={workspace.workspace_id}>
              {workspace.workspace_data.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default Workspaces;
