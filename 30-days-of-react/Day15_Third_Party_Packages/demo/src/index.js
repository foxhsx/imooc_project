import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header';
import Countries from './Country/Countries';
import Footer from './Footer/Footer';
import Time from './Time/Time';
import StyledComponents from './StyledComponent/StyledComponents';
import { Button } from 'reactstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Button color="danger">Danger!</Button>
    <Countries />
    <Time />
    <StyledComponents />
    <Footer />
  </React.StrictMode>
);
