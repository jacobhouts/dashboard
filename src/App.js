import './App.css';
import SideBar from './sidebar'
import Reviews from './reviews'
import Rating from './avg'
import Sentiment from './sentiment'
import Visitors from './visitors'


function App() {
  return (
    <div className="App">
      <div className="buttons">
        <SideBar/>
      </div>
      <div className="reviews">
        <Reviews reviews='1,281'/>
      </div>
      <div className="average">
        <Rating avg='4.6'/>
      </div>
      <div className="sentiment">
        <Sentiment sentiment1='960' sentiment2='122' sentiment3='321'/>
      </div>
      <div className="visitors">
        <Visitors visitors='821'/>
      </div>
    </div>
  );
}

export default App;