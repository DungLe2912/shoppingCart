import React from 'react';
import ProductsContainer from './containers/ProductsContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
function App() {
  return (

    <div>
      <Header />
      <main id="mainContainer">
        <div className="container">
          {/* Products */}
          <ProductsContainer />
          {/* Message */}
          <MessageContainer />
          {/* Cart */}
          <CartContainer/>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>

  );
}

export default App;
