import React, { Component } from 'react'
import './App.css';
import Form from './components/Form';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="flex justify-center py-6 leading-3">
          <div className="pt-1">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M7.008 22.914c-4.134-1.896-7.008-6.072-7.008-10.914 0-6.623 5.377-12 12-12s12 5.377 12 12c0 4.439-2.415 8.318-6.002 10.394.002-5.398.004-12.809-.002-13.685-.003-.412-.3-.709-.673-.709-1.297 0-3.215 5.17-3.883 11 1.079-.003 2.056 0 2.056 0v4.482c-1.107.337-2.28.518-3.496.518-.852 0-1.683-.089-2.484-.258v-6.096c0-.585.36-.765 1.151-1.391.594-.47 1.016-1.212.935-1.963-.231-2.121-.793-6.292-.793-6.292h-.458v5h-.835l-.166-5h-.469l-.201 5h-.836l-.144-5h-.506l-.186 5h-.836v-5h-.5s-.509 4.198-.718 6.312c-.074.741.326 1.469.907 1.935.787.63 1.147.819 1.147 1.395v5.272z" /></svg>
          </div>
          <span className="pl-2 font-bold text-2xl">Food Recipes</span>
        </header>
        <Hero />
        <Form />
      </div>
    );
  }
}

export default App;
