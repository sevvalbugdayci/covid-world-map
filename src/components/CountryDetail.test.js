import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CountryDetail from './CountryDetail';

const mockStore = configureStore([thunk]);

describe('CountryDetail component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      data: {
        countries: [
          {
            country: 'Turkey',
            activeCases: '2000',
            newCases: '+100',
            totalDeaths: '1000',
            newDeaths: '+10',
            totalRecovered: '8000',
            totalCases: '10000'
          }
        ]
      }
    });
  });

  it('should render country details when data is fetched successfully', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CountryDetail />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(getByText('Turkey Details')).toBeInTheDocument();
      expect(getByText('Total Cases: 2000')).toBeInTheDocument();
      expect(getByText('New Cases: +100')).toBeInTheDocument();
      expect(getByText('Total Deaths: 1000')).toBeInTheDocument();
      expect(getByText('New Deaths: +10')).toBeInTheDocument();
      expect(getByText('Total Recovered: 8000')).toBeInTheDocument();
      expect(getByText('Total Cases: 10000')).toBeInTheDocument();
    });
  });
});
