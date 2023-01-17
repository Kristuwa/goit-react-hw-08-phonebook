export const handlePending = state => ({
  ...state,
  isLoading: true,
});

export const handleRejected = (state, action) => ({
  ...state,
  isLoading: false,
  error: action.payload,
});

export const handleFulfilled = state => ({
  ...state,
  isLoading: false,
  error: null,
});

export const fetchContactsFulfilledReducer = (state, action) => {
  return {
    ...state,
    items: action.payload,
  };
};

export const addContactFulfilledReducer = (state, action) => {
  return {
    ...state,
    items: [...state.items, action.payload],
  };
};

export const deleteContactFulfilledReducer = (state, action) => {
  return {
    ...state,
    items: state.items.filter(({ id }) => id !== action.payload.id),
  };
};

export const logOutFulfilledReducer = state => {
  return { ...state, items: [], error: null, isLoading: false };
};
