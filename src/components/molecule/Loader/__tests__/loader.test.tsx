import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Loader } from '..';

test('renders Loader', () => {
  const { asFragment } = render(<Loader />);

  expect(asFragment()).toMatchSnapshot();
});
