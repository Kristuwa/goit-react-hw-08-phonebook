export const handlePending = state => ({
  ...state,
  isLoading: true,
});

export const handleRejected = (state, action) => ({
  ...state,
  isLoading: false,
  error: action.payload,
});

export const handleFulfield = state => ({
  ...state,
  isLoading: false,
  error: null,
});

export const fetchContactsFulfilledReduser = (state, action) => {
  return {
    ...state,
    items: action.payload,
  };
};

export const addContactFulfilledReduser = (state, action) => {
  return {
    ...state,
    items: [...state.items, action.payload],
  };
};

export const deleteContactFulfilledReduser = (state, action) => {
  return {
    ...state,
    items: state.items.filter(({ id }) => id !== action.payload.id),
  };
};
