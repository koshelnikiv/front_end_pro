const initialState = {
  data: null,
  loading: false,
  error: null,
  lastEndpoint: '',
};

export const swapiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SWAPI_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_SWAPI_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        lastEndpoint: action.endpoint,
      };
    case 'FETCH_SWAPI_FAILURE':
      return { ...state, loading: false, error: action.error };
    case 'CLEAR_DATA':
      return { ...state, data: null, lastEndpoint: '' };
    default:
      return state;
  }
};
