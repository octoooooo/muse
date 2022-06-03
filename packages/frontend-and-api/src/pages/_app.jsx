import PropTypes from 'prop-types';
import React from 'react';

import '../styles/global.css';

function App({ Component, pageProps }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
