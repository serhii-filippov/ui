import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Map />
      <HomePage />
    </div>
  );
};

export default App;