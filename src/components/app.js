import React from 'react';
import styled from 'styled-components';
import Layout from './layout';
import Header from './header';
import Button from './button';

const App = () => (
  <Layout>
    <Header />
    <Button>Default</Button>
    <Button primary>Primary</Button>
  </Layout>
);

export default App;



