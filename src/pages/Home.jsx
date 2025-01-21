import Slider from '../components/Slider';
import ChatButton from '../components/ChatButton';
import NewProducts from '../components/NewProducts';
import Explainer from '../components/Explainer';

function Home({ addToCart }) {
  return (
    <div className="">
      <Slider />
      <NewProducts addToCart={addToCart} />
      <Explainer />
    </div>
  );
}

export default Home;
