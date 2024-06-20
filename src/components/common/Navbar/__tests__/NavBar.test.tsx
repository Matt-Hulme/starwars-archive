import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Navbar } from "../Navbar";
import { BrowserRouter as Router } from 'react-router-dom';

describe('NavBar', () => {
  it('should render the component', () => {
    const { getAllByText, getByRole } = render(
      <Router>
        <Navbar />
      </Router>
    );
    getAllByText('Characters').forEach(link => {
      expect(link).toBeInTheDocument();
    });
    getAllByText('Films').forEach(link => {
      expect(link).toBeInTheDocument();
    });
    getAllByText('Planets').forEach(link => {
      expect(link).toBeInTheDocument();
    });
    getAllByText('Species').forEach(link => {
      expect(link).toBeInTheDocument();
    });
    getAllByText('Starships').forEach(link => {
      expect(link).toBeInTheDocument();
    });
    getAllByText('Vehicles').forEach(link => {
      expect(link).toBeInTheDocument();
    })
    expect(getByRole('img', { name: 'StarWars logo' })).toHaveAttribute('src', '/assets/images/SW_Logo.png');
  });
})