import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Container } from '@mui/material';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' exact Component={ProductList} />
          <Route path='/product/:id' Component={ProductDetail} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;