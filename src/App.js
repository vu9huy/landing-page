import './App.scss';
import Body from './Components/Body/Body';
import Navigation from './Components/Navigaton/Navigation';
import Footer from './Components/Footer/Footer';
import QuickItemGroups from './Components/Body/QuickItems/QuickItemsGroup';

function App() {


  return (
    <div className="App" >
      <Navigation className='Navigation' />
      <Body />
      <Footer className='footer' />
      <QuickItemGroups />
    </div>
  );
}

export default App;
