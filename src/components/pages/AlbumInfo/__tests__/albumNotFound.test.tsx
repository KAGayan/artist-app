import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { ReactElement } from 'react';
import { store } from 'store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { env } from 'config';
import { AlbumInfo } from '..';

const server = setupServer(
  rest.get(
    `${env.BASE_URL}/`,
    (req, res, ctx) => res(ctx.json({
      album: {
        artist: 'Eminem', listeners: '119874', image: [{ size: 'small', '#text': '' }, { size: 'medium', '#text': '' }, { size: 'large', '#text': '' }, { size: 'extralarge', '#text': '' }, { size: 'mega', '#text': '' }, { size: '', '#text': '' }], mbid: '', tags: '', name: '(null)', playcount: '1879721', url: 'https:/www.last.fm/music/Eminem/(null)',
      },
    })),
  ),
);

interface Props {
  children: ReactElement;
  reduxStore: any;
}

const ReduxProvider = ({ children, reduxStore }: Props) => (
  <Provider store={reduxStore}>{children}</Provider>
);

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

window.scrollTo = jest.fn();

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  jest.resetAllMocks();
});
afterAll(() => {
  server.close();
  jest.clearAllMocks();
});

test('loads and displays Album Not Found!', async () => {
  const history = createMemoryHistory();
  const pageTree = render(
    <Router
      location={history.location}
      navigator={history}
    >
      <ReduxProvider reduxStore={store}>
        <AlbumInfo />
      </ReduxProvider>
    </Router>,
  );

  await waitFor(() => screen.getByRole('alert'));

  expect(screen.getByRole('alert')).toHaveTextContent('Album Not Found!');
  expect(pageTree.container).toMatchSnapshot();
});
