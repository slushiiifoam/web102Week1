import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 Days in Japan</h1>
      <h2>Welcome to Japan, Engineer! Check out this calendar to get to know the city and see what sights awaits you in the coming week!</h2>
      <Calendar />
      
    </div>
  )
}

export default App