import {it, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import TopBar from '../components/TopBar';
import SharedContext from '../components/SharedContext';
import {MemoryRouter} from 'react-router-dom';

vi.mock('../components/Workspaces', () => {
  // Mocked Workspaces component
  const MockedWorkspaces = () => <div data-testid="top-bar" />;

  // Return object with default export
  return {
    default: MockedWorkspaces,
  };
});

it('renders workspaces when not in open channel mode', () => {
  const contextValues = {
    currentWorkspaceID: '40304fac-bf2c-4e88-9028-3d6008689a59',
    setCurrentWorkspaceID: vi.fn(),
    OpenChannel: false,
    setOpenChannel: vi.fn(),
    currentChannelName: 'General',
  };
  render(
      <MemoryRouter>
        <SharedContext.Provider value={contextValues}>
          <TopBar />
        </SharedContext.Provider>
      </MemoryRouter>,
  );
});

it('renders workspaces when not in open channel mode', () => {
  const contextValues = {
    currentWorkspaceID: '40304fac-bf2c-4e88-9028-3d6008689a59',
    setCurrentWorkspaceID: vi.fn(),
    OpenChannel: true,
    setOpenChannel: vi.fn(),
    currentChannelName: 'General',
  };
  render(
      <MemoryRouter>
        <SharedContext.Provider value={contextValues}>
          <TopBar />
        </SharedContext.Provider>
      </MemoryRouter>,
  );
  fireEvent.click(screen.getByTestId('ArrowBackIcon'));
});
