import { render } from '@testing-library/react';
import Home from '../components/Home';
import Region from '../components/Region';
import AirPollutionDetails from '../components/AirPollutionDetails';

jest.mock('../components/Home');
jest.mock('../components/Region');
jest.mock('../components/Region');

describe('It should match snapshots', () => {
  it('Should match home snapshots ', () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });

  it('Should match region snapshots ', () => {
    const region = render(<Region />);
    expect(region).toMatchSnapshot();
  });

  it('Should match Airpollution details snapshots ', () => {
    const airpollutionDetails = render(<AirPollutionDetails />);
    expect(airpollutionDetails).toMatchSnapshot();
  });
});
