import {it, expect, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import BotBar from '../components/BotBar';
import SharedContext from '../components/SharedContext';
import {MemoryRouter} from 'react-router-dom';

it('renders BotBar with disabled Home button', () => {
  const contextValues = {
    setCurrentWorkspaceID: vi.fn(),
    setCurrentChannelName: vi.fn(),
    setOpenChannel: vi.fn(),
    setCurrentChannelID: vi.fn(),
    OpenChannel: false,
  };
  render(
      <MemoryRouter>
        <SharedContext.Provider value = {contextValues}>
          <BotBar />
        </SharedContext.Provider>
      </MemoryRouter>,
  );

  // Check if Home button is disabled
  const homeButton = screen.getByRole('button', {name: 'Home'});
  expect(homeButton).toBeDisabled();

  // Check if Logout button is enabled
  const logoutButton = screen.getByRole('button', {name: 'Logout'});
  expect(logoutButton).toBeEnabled();
});

it('calls logout function when Logout button is clicked', () => {
  const setCurrentWorkspaceIDMock = vi.fn();
  const setCurrentChannelNameMock = vi.fn();
  const setCurrentChannelIDMock = vi.fn();
  const setOpenChannelMock = vi.fn();

  const contextValues = {
    setCurrentWorkspaceID: vi.fn(),
    setCurrentChannelName: vi.fn(),
    setOpenChannel: vi.fn(),
    setCurrentChannelID: vi.fn(),
    OpenChannel: false,
  };

  // Mock the localStorage API
  const localStorageMock = {
    removeItem: vi.fn(),
  };
  Object.defineProperty(window, 'localStorage', {value: localStorageMock});

  render(
      <MemoryRouter>
        <SharedContext.Provider
          value={{
            ...contextValues,
            setCurrentWorkspaceID: setCurrentWorkspaceIDMock,
            setCurrentChannelName: setCurrentChannelNameMock,
            setCurrentChannelID: setCurrentChannelIDMock,
            setOpenChannel: setOpenChannelMock,
          }}
        >
          <BotBar />
        </SharedContext.Provider>
      </MemoryRouter>,
  );

  // Click the Logout button
  fireEvent.click(screen.getByRole('button', {name: 'Logout'}));

  expect(localStorageMock.removeItem).toHaveBeenCalledWith('user');
});

it('calls logout function when Logout button is clicked', () => {
  const setCurrentWorkspaceIDMock = vi.fn();
  const setCurrentChannelNameMock = vi.fn();
  const setCurrentChannelIDMock = vi.fn();
  const setOpenChannelMock = vi.fn();

  const contextValues = {
    setCurrentWorkspaceID: vi.fn(),
    setCurrentChannelName: vi.fn(),
    setOpenChannel: vi.fn(),
    setCurrentChannelID: vi.fn(),
    OpenChannel: true,
  };

  // Mock the localStorage API
  const localStorageMock = {
    removeItem: vi.fn(),
  };
  Object.defineProperty(window, 'localStorage', {value: localStorageMock});

  render(
      <MemoryRouter>
        <SharedContext.Provider
          value={{
            ...contextValues,
            setCurrentWorkspaceID: setCurrentWorkspaceIDMock,
            setCurrentChannelName: setCurrentChannelNameMock,
            setCurrentChannelID: setCurrentChannelIDMock,
            setOpenChannel: setOpenChannelMock,
          }}
        >
          <BotBar />
        </SharedContext.Provider>
      </MemoryRouter>,
  );

  // Click the Logout button
  fireEvent.click(screen.getByRole('button', {name: 'Home'}));
});
