import {it, vi, beforeAll, afterAll, afterEach,
  beforeEach, expect} from 'vitest';
import {render, fireEvent, screen, waitFor} from '@testing-library/react';
import {http, HttpResponse} from 'msw';
import {setupServer} from 'msw/node';

import {MemoryRouter} from 'react-router-dom';

import Workspaces from '../components/Workspaces';
import SharedContext from '../components/SharedContext';

const URL='http://localhost:3010/v0/workspace/';

const server = setupServer();

beforeAll(() => server.listen());
beforeEach(() => {
  localStorage.clear();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


it('Handles Success1', async () => {
  const mockWorkspaces = [{workspace_id: '40304fac-bf2c-4e88-9028-3d6008689a59',
    workspace_data: {name: 'Welcome'}},
  {workspace_id: '40304fac-bf2c-4e88-9028-3d6008689a60',
    workspace_data: {name: 'Same'}}];
  server.use(
      http.get(URL, async () => {
        return HttpResponse.json(mockWorkspaces, {status: 200});
      }),
  );
  const setCurrentWorkspaceIDMock = vi.fn();

  render(
      <MemoryRouter>
        <SharedContext.Provider
          value={{setCurrentWorkspaceID: setCurrentWorkspaceIDMock}}>
          <Workspaces />
        </SharedContext.Provider>
      </MemoryRouter>,
  );

  const nativeSelect = screen.getByTestId('workspace-select');

  await waitFor(() =>
    expect(nativeSelect.querySelectorAll('option').length).not.toBe(0));

  // Find all options within the NativeSelect
  const options = nativeSelect.querySelectorAll('option');

  console.log(options.length);
  fireEvent.click(nativeSelect);

  fireEvent.click(screen.getByLabelText('Same'));

  const selectElement = nativeSelect.querySelector('select');

  fireEvent.change(selectElement,
      {target: {value: '40304fac-bf2c-4e88-9028-3d6008689a60'}});
});

/**
 * Generate a 500 to check UI diaplays error correctly
 */
it('Handles Server Error', async () => {
  server.use(
      http.get(URL, async () => {
        return HttpResponse.json({message: 'Hello CSE186'}, {status: 500});
      }),
  );
  const setCurrentWorkspaceIDMock = vi.fn();
  render(
      <MemoryRouter>
        <SharedContext.Provider
          value={{setCurrentWorkspaceID: setCurrentWorkspaceIDMock}}>
          <Workspaces />
        </SharedContext.Provider>
      </MemoryRouter>,
  );
});

it('Handles Success1', async () => {
  const setCurrentWorkspaceIDMock = vi.fn();
  const mockedUser = 'hi';
  server.use(
      http.get(URL, async () => {
        return HttpResponse.json({message: 'Hello CSE186'}, {status: 500});
      }),
  );
  vi.stubGlobal('localStorage', {
    getItem: vi.fn().mockReturnValue(JSON.stringify(mockedUser)),
    removeItem: vi.fn(),
  });
  render(
      <MemoryRouter>
        <SharedContext.Provider
          value={{setCurrentWorkspaceID: setCurrentWorkspaceIDMock}}>
          <Workspaces />
        </SharedContext.Provider>
      </MemoryRouter>,
  );
});
