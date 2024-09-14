import {it, beforeAll, afterAll, afterEach,
  expect, vi} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import {http, HttpResponse} from 'msw';
import {setupServer} from 'msw/node';

import {MemoryRouter} from 'react-router-dom';

import Login from '../components/Login';

const URL='http://localhost:3010/v0/login';

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

/**
 * Send back known text and OK to check UI displays text as expected
 */
it('Has Clickable Button', async () => {
  server.use(
      http.post(URL, async () => {
        return HttpResponse.json({message: 'Hello CSE186'}, {status: 200});
      }),
  );
  render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
  );
  fireEvent.click(screen.getByText('Sign In'));
  await screen.findByText('Sign In');
});

/**
 * Generate a 500 to check UI diaplays error correctly
 */
it('Handles Server Error', async () => {
  server.use(
      http.post(URL, async () => {
        return HttpResponse.json({message: 'Hello CSE186'}, {status: 500});
      }),
  );
  const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
  render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
  );
  fireEvent.click(screen.getByText('Sign In'));
  await screen.findByText('Sign In', {exact: false});
  expect(alertMock).toHaveBeenCalledTimes(1);
});

it('Updates state on input change', async () => {
  render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
  );

  const emailInput = screen.getByRole('textbox', {name: /email address/i});
  const passwordInput = screen.getByRole('textbox', {name: /password/i});

  fireEvent.change(emailInput, {target: {value: 'test@example.com'}});
  fireEvent.change(passwordInput, {target: {value: 'password123'}});

  expect(emailInput).toHaveValue('test@example.com');
  expect(passwordInput).toHaveValue('password123');
});
