import NumberBox from './NumberBox'
import Dice from './Dice';

function App() {
  return (
    <div>
      <h1>Our React App</h1>
      <NumberBox initialValue={10} />
      <NumberBox initialValue={0} />
      <Dice />
    </div>
  );
}

export default App;