export const fetchSwapiData = (endpoint) => {
  return async dispatch => {
    dispatch({ type: 'FETCH_SWAPI_REQUEST' });
    try {
      const res = await fetch(`https://swapi.info/api/${endpoint}`);
      const data = await res.json();

      dispatch({ type: 'FETCH_SWAPI_SUCCESS', payload: data, endpoint });

    } catch (error) {
      dispatch({ type: 'FETCH_SWAPI_FAILURE', error: error.message });
    }
  };
};

export const clearData = () => ({ type: 'CLEAR_DATA' });
