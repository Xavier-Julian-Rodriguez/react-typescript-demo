import './App.css';
import { Button } from './components/Button';
import { Fitzgerald } from './components/Fitzgerald';
import { Greet } from './components/Greet'
import { Heading } from './components/Heading';
import { Person } from './components/Person'
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
     <Heading>Placeholder text</Heading>
     <Fitzgerald>
      <Heading>Fitzgerald est mon chat. Il est dans la maison avec Berlioz est Graham. Ou est ton animal du companie?</Heading>
     </Fitzgerald>
     <Greet name='Xavier' messageCount={10} isLoggedIn={false} />
     <Greet name='Xavier' isLoggedIn={true} />
     <Status status='success'/>
     <Person name={personName} />
     <PersonList names={nameList} />
     <Button handleClick={(event, id) => {
      console.log('Button clicked!', event, id)
     }}/>
    </div>
  );
}

export default App;
