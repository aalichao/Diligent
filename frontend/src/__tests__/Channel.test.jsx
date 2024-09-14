import ChannelList from '../components/ChannelList';
import {it, vi, beforeAll, afterAll, afterEach, expect} from 'vitest';
import {render, fireEvent,
  screen, waitFor} from '@testing-library/react';
import {http, HttpResponse} from 'msw';
import {setupServer} from 'msw/node';

import {MemoryRouter} from 'react-router-dom';
import SharedContext from '../components/SharedContext';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


it('Handles Success', async () => {
  const currentWorkspaceID = '40304fac-bf2c-4e88-9028-3d6008689a59';
  const setCurrentChannelID = vi.fn();
  const setCurrentChannelName = vi.fn();
  const setOpenChannel = vi.fn();
  const message = [{id: '40304fac-bf2c-4e88-9028-3d6008689a60',
    channel_data: {'name': 'Secret'}},
  {id: '40304fac-bf2c-4e88-9028-3d6008689a61',
    channel_data: {'name': 'Normal'}},
  {id: '40304fac-bf2c-4e88-9028-3d6008689a62',
    channel_data: {'name': 'Restricted'}}];
  server.use(
      http.get(`http://localhost:3010/v0/workspace/${currentWorkspaceID}/channel`, async () => {
        return HttpResponse.json(message);
      }),
  );

  render(
      <MemoryRouter>
        <SharedContext.Provider
          value={{currentWorkspaceID, setCurrentChannelID,
            setCurrentChannelName, setOpenChannel}}>
          <ChannelList />
        </SharedContext.Provider>
      </MemoryRouter>,
  );

  await waitFor(() => {
    expect(screen.getByText('Normal')).toBeInTheDocument();
  });

  const textElement = screen.getByText('Normal');

  // Simulate a click event on the text element
  fireEvent.click(textElement);

  fireEvent.click(screen.getByLabelText('ChannelOpen'));

  //   const selectElement = screen.getByTestId('workspace-select');

  // Simulate a change in the select element
  //   fireEvent.click(selectElement);

  //   fireEvent.click(screen.getByText('Welcome'));

  // You can add additional assertions related to setCurrentWorkplaceIDMock
});

it('Handles Success', async () => {
  const currentWorkspaceID = '';
  const setCurrentChannelID = vi.fn();
  const setCurrentChannelName = vi.fn();
  const setOpenChannel = vi.fn();
  const message = [{id: '40304fac-bf2c-4e88-9028-3d6008689a60',
    channel_data: {'name': 'Secret'}},
  {id: '40304fac-bf2c-4e88-9028-3d6008689a61',
    channel_data: {'name': 'Normal'}},
  {id: '40304fac-bf2c-4e88-9028-3d6008689a62',
    channel_data: {'name': 'Restricted'}}];
  server.use(
      http.get(`http://localhost:3010/v0/workspace/${currentWorkspaceID}/channel`, async () => {
        return HttpResponse.json(message);
      }),
  );

  render(
      <MemoryRouter>
        <SharedContext.Provider
          value={{currentWorkspaceID, setCurrentChannelID,
            setCurrentChannelName, setOpenChannel}}>
          <ChannelList />
        </SharedContext.Provider>
      </MemoryRouter>,
  );
});

/**
 * Generate a 500 to check UI diaplays error correctly
 */
it('Handles Server Error', async () => {
  const currentWorkspaceID = '40304fac-bf2c-4e88-9028-3d6008689a59';
  const setCurrentChannelID = vi.fn();
  const setCurrentChannelName = vi.fn();
  const setOpenChannel = vi.fn();
  server.use(
      http.get(`http://localhost:3010/v0/workspace/${currentWorkspaceID}/channel`, async () => {
        return HttpResponse.json({message: 'Hello CSE186'}, {status: 500});
      }),
  );
  render(
      <MemoryRouter>
        <SharedContext.Provider
          value={{currentWorkspaceID, setCurrentChannelID,
            setCurrentChannelName, setOpenChannel}}>
          <ChannelList />
        </SharedContext.Provider>
      </MemoryRouter>,
  );
});
