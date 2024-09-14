import {it, beforeAll, afterAll, afterEach,
  expect, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
// import {http, HttpResponse} from 'msw';
import {setupServer} from 'msw/node';

// import {MemoryRouter} from 'react-router-dom';

import Home from '../components/Home';
import SharedContext from '../components/SharedContext';
import {MemoryRouter} from 'react-router-dom';

const server = setupServer();

beforeAll(() => {
  server.listen();
  vi.mock('../components/TopBar', () => {
    // Mocked TopBar component
    const MockedTopBar = () => <div data-testid="top-bar" />;

    // Return object with default export
    return {
      default: MockedTopBar,
    };
  });

  vi.mock('../components/ChannelList', () => {
    // Mocked ChannelList component
    const MockedChannelList = () => <div data-testid="channel-list" />;

    // Return object with default export
    return {
      default: MockedChannelList,
    };
  });

  vi.mock('../components/MessageList', () => {
    // Mocked MessageList component
    const MockedMessageList = () => <div data-testid="message-list" />;

    // Return object with default export
    return {
      default: MockedMessageList,
    };
  });

  vi.mock('../components/BotBar', () => {
    // Mocked BotBar component
    const MockedBotBar = () => <div data-testid="bot-bar" />;

    // Return object with default export
    return {
      default: MockedBotBar,
    };
  });
});
afterEach(() => vi.resetAllMocks());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('renders TopBar and ChannelList when OpenChannel is false', () => {
  const setOpenChannelMock = vi.fn();
  const OpenChannel = false;
  render(
      <MemoryRouter>
        <SharedContext.Provider
          value={{OpenChannel: OpenChannel,
            setOpenChannel: setOpenChannelMock}}>
          <Home />
        </SharedContext.Provider>
      </MemoryRouter>,
  );

  expect(screen.getByTestId('top-bar')).toBeInTheDocument();
  expect(screen.getByTestId('channel-list')).toBeInTheDocument();
  expect(screen.queryByTestId('message-list')).toBeNull();
  expect(screen.getByTestId('bot-bar')).toBeInTheDocument();
});

it('renders TopBar and MessageList when OpenChannel is true', () => {
  const setOpenChannelMock = vi.fn();
  const OpenChannel = true;
  render(
      <MemoryRouter>
        <SharedContext.Provider
          value={{OpenChannel: OpenChannel,
            setOpenChannel: setOpenChannelMock}}>
          <Home />
        </SharedContext.Provider>
      </MemoryRouter>,
  );

  expect(screen.getByTestId('top-bar')).toBeInTheDocument();
  expect(screen.queryByTestId('channel-list')).toBeNull();
  expect(screen.getByTestId('message-list')).toBeInTheDocument();
  expect(screen.getByTestId('bot-bar')).toBeInTheDocument();
});
