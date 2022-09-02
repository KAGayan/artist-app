import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import {
  env, render, screen, waitFor,
} from 'config';
import mocks from 'mocks';
import { AlbumInfo } from '..';

const server = setupServer(
  rest.get(`${env.BASE_URL}/`, (req, res, ctx) => res(ctx.json({ ...mocks.albumResponse }))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders AlbumInfo', async () => {
  window.scrollTo = jest.fn();
  const { asFragment } = render(<AlbumInfo />);

  await waitFor(() => expect(screen.getByText(mocks.albumResponse.album.name)).toBeInTheDocument());

  await waitFor(() => expect(asFragment()).toMatchSnapshot());
});
