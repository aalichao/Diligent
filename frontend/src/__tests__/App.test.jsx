/*
 * Copyright (C) 2022-2024 David C. Harrison. All right reserved.
 *
 * You may not use, distribute, publish, or modify this code without
 * the express written permission of the copyright holder.
 */
import {it, vi, expect} from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';

import App from '../App';
// import Home from '../components/Home';
// import {MemoryRouter} from 'react-router-dom';


/**
 */
it('Renders Local Storage Home', async () => {
  // Mocking localStorage getItem and setItem
  vi.stubGlobal('localStorage', {
    getItem: vi.fn().mockReturnValue('temp'),
    setItem: vi.fn(),
  });
  /**
   * Mocking the Home component.
   */
  vi.mock('../components/Home', () => {
    const MockedHome = () => <div data-testid="mocked-home">Mocked Home</div>;
    return {
      default: MockedHome,
    };
  });

  // Rendering the App component
  render(<App />);

  // Expect to find the mocked Home component
  await waitFor(() => {
    expect(screen.getByTestId('mocked-home')).toBeInTheDocument();
  });

  // Assert that the Sign In text is not present
  expect(screen.queryByText('Sign In')).not.toBeInTheDocument();
});

/**
 */
it('Renders', async () => {
  vi.stubGlobal('localStorage', {
    getItem: vi.fn().mockReturnValue(null),
    setItem: vi.fn(),
  });
  render(<App />);
});
