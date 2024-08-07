import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Buyers from './components/Buyers/index';
import Provide from './components/Provide/index';
import Why from './components/Why/index';
import Network from './components/Network/index';
import Clientsay from './components/Clientsay/index';
import Newsletter from './components/Newsletter/Newsletter';


export default function Home() {
  const showAllComponents = false; // toggle this variable to show/hide components

  return (
    <main>
      <Banner />
      {showAllComponents && <Companies />}
      {showAllComponents && <Buyers />}
      <Provide />
      <Why />
      {showAllComponents && <Network />}
      {showAllComponents && <Clientsay />}
      {showAllComponents && <Newsletter />}
    </main>
  );
}

