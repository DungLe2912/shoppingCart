import React from 'react';
import ProductsContainer from './containers/ProductsContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './components/message';
import Cart from './components/Cart';
function App() {
  return (

    <div>
      <Header />
      <main id="mainContainer">
        <div className="container">
          {/* Products */}
          <ProductsContainer />
          {/* Message */}
          <Message />
          {/* Cart */}
          <Cart/>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>

  );
}

export default App;
