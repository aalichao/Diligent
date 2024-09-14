import MessageList from '../components/MessageList';
import {it, beforeAll, afterAll, afterEach, expect} from 'vitest';
import {render, waitFor, screen} from '@testing-library/react';
import {http, HttpResponse} from 'msw';
import {setupServer} from 'msw/node';

import {MemoryRouter} from 'react-router-dom';
import SharedContext from '../components/SharedContext';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


it('Handles Success', async () => {
  const currentChannelID = '40304fac-bf2c-4e88-9028-3d6008689a59';
  const message = [{chat_data: {'received': '2024-02-27T03:14:03.148Z',
    'content': 'hello! This is my first message!', 'from': 'Anna Admin'}},
  {chat_data: {'received': '2024-02-27T03:21:03.148Z',
    'content': 'hello! This is my third message!', 'from': 'Anna Admin'}}];
  server.use(
      http.get(`http://localhost:3010/v0/channel/${currentChannelID}/message`, async () => {
        return HttpResponse.json(message, {status: 200});
      }),
  );

  render(
      <MemoryRouter>
        <SharedContext.Provider
          value={{currentChannelID}}>
          <MessageList />
        </SharedContext.Provider>
      </MemoryRouter>,
  );

  await waitFor(() => {
    // Query for the elements inside the <Box> component
    const elements = screen.getAllByText(/Anna Admin/);

    // Assert that there are elements inside the <Box> component
    expect(elements.length).toBeGreaterThan(0);
  });
});

/**
 * Generate a 500 to check UI diaplays error correctly
 */
it('Handles Blank', async () => {
  const currentChannelID = '';
  server.use(
      http.get(`http://localhost:3010/v0/channel/${currentChannelID}/message`, async () => {
        return HttpResponse.json({message: 'Hello CSE186'}, {status: 500});
      }),
  );
  render(
      <MemoryRouter>
        <SharedContext.Provider
          value={{currentChannelID}}>
          <MessageList />
        </SharedContext.Provider>
      </MemoryRouter>,
  );
});

/**
 * Generate a 500 to check UI diaplays error correctly
 */
it('Handles Server Error', async () => {
  const currentChannelID = '40304fac-bf2c-4e88-9028-3d6008689a59';
  server.use(
      http.get(`http://localhost:3010/v0/channel/${currentChannelID}/message`, async () => {
        return HttpResponse.json({message: 'Hello CSE186'}, {status: 500});
      }),
  );
  render(
      <MemoryRouter>
        <SharedContext.Provider
          value={{currentChannelID}}>
          <MessageList />
        </SharedContext.Provider>
      </MemoryRouter>,
  );
});

