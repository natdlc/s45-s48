import React from 'react';

// creates context object
// stores info to be shared to other components within the app
// avoids prop-drilling

const UserContext = React.createContext();

// provider component
// allows other components to use context object
export const UserProvider = UserContext.Provider;

export default UserContext;