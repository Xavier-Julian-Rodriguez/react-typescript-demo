import './App.css';
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }
  const nameList = [
    {
      first: 'Peter',
      last: 'Parker'
    },
    {
      first: 'Inspector',
      last: 'Gadget'
    },
    {
      first: 'Optimus',
      last: 'Prime'
    },
  ]
  return (
    <div className="App">
     <Greet name='Xavier' messageCount={10} isLoggedIn={false}/>
     <Person name={personName} />
     <PersonList names={nameList} />
    </div>
  );
}

export default App;
