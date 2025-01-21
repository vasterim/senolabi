import Slider from '../components/Slider';
import ChatButton from '../components/ChatButton';
import NewProducts from '../components/NewProducts';
import Explainer from '../components/Explainer';
Explainer
function Home() {
  return (
    <div className="">
      <Slider />
      <NewProducts />
      <Explainer />
    </div>
  );
}

export default Home;
