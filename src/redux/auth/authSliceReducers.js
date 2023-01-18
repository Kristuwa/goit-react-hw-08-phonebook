export const registerFulfilledReducer = (state, action) => {
  return {
    ...state,
    user: action.payload.user,
    token: action.payload.token,
    isLoggedIn: true,
  };
};

export const logInFulfilledReducer = (state, action) => {
  return {
    ...state,
    user: action.payload.user,
    token: action.payload.token,
    isLoggedIn: true,
  };
};

export const logOutFulfilledReducer = state => {
  return {
    ...state,
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  };
};

export const refreshUserPendingReducer = state => {
  return { ...state, isRefreshing: true };
};

export const refreshUserFulfilledReducer = (state, action) => {
  return {
    ...state,
    user: action.payload,
    isLoggedIn: true,
    isRefreshing: false,
  };
};

export const refreshUserRejectedReducer = state => {
  return { ...state, isRefreshing: false };
};
