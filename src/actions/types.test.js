import * as types from './types';

describe('Types', () => {
  it('should export FETCH_DATA_REQUEST constant', () => {
    expect(types.FETCH_DATA_REQUEST).toEqual('FETCH_DATA_REQUEST');
  });

  it('should export FETCH_DATA_SUCCESS constant', () => {
    expect(types.FETCH_DATA_SUCCESS).toEqual('FETCH_DATA_SUCCESS');
  });

  it('should export FETCH_DATA_FAILURE constant', () => {
    expect(types.FETCH_DATA_FAILURE).toEqual('FETCH_DATA_FAILURE');
  });
});