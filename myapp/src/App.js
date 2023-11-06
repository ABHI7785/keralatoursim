
import './App.css';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';
import Card3 from './Components/Card3';
import Card4 from './Components/Card4';
import Carous from './Components/Carous';
import Carous2 from './Components/Carous2';
import Gallery from './Components/Gallery';
import Header1 from './Components/Header1';
import Plan from './Components/Plan';
import Videosec from './Components/Videosec';
import Whatt from './Components/Whatt';

function App() {
  return (
    <div className="App">
      <Header1/>
      <Carous/>
      <Carous2/>
      <Card1/>
      <Card2/>
    <Whatt/>
    <Card3/>
    <Videosec/>
    <Card4/>
    <Plan/>
    <Gallery/>
     
    </div>
  );
}

export default App;
