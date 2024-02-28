import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './dataActions';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './types';

describe('dataActions', () => {
  it('fetchDataRequest should create FETCH_DATA_REQUEST action', () => {
    const expectedAction = {
      type: FETCH_DATA_REQUEST
    };
    expect(fetchDataRequest()).toEqual(expectedAction);
  });

  it('fetchDataSuccess should create FETCH_DATA_SUCCESS action', () => {
    const data = {
      country: 'Turkey',
      totalCases: 1000,
      newCases: 50,
      totalDeaths: 20,
      newDeaths: 5,
      totalRecovered: 900,
      activeCases: 80
    };
    const expectedAction = {
      type: FETCH_DATA_SUCCESS,
      payload: data
    };
    expect(fetchDataSuccess(data)).toEqual(expectedAction);
  });

  it('fetchDataFailure should create FETCH_DATA_FAILURE action', () => {
    const error = 'Something went wrong';
    const expectedAction = {
      type: FETCH_DATA_FAILURE,
      payload: error
    };
    expect(fetchDataFailure(error)).toEqual(expectedAction);
  });
});
