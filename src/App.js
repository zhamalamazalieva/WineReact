import Header from './components/header';
import Hero from './components/hero';
import NewWine from './components/newWine';
import Sort from './components/sort';
import Reviews from './components/reviews';
import Offer from './components/offer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <NewWine/>
      <Sort/>
      <Reviews/>
      <Offer />
    </div>
  );
}

export default App;
