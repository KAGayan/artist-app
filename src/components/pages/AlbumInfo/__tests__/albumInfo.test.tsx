import '@testing-library/jest-dom';
import { render } from 'config';
import { AlbumInfo } from '..';

test('renders AlbumInfo', () => {
  window.scrollTo = jest.fn();

  const { asFragment } = render(<AlbumInfo />);

  expect(asFragment()).toMatchSnapshot();
});
