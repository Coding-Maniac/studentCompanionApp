import React from 'react';
import {ActivityIndicator} from 'react-native';

const AppLoadingWrapper = ({isLoading, children}) => {
  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return children;
};

export default AppLoadingWrapper;
