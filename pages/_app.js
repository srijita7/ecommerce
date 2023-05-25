import React from 'react';

import { Layout } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        {/* the component we are currently on */}
        <Component {...pageProps} /> 
      </Layout>
    </StateContext>
  )
}

export default MyApp