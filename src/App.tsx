import './App.css';
import { Button } from './components/Button';
import { Fitzgerald } from './components/Fitzgerald';
import { Greet } from './components/Greet'
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Person } from './components/Person'
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Container } from './components/Container'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'
import { UserContextProvider } from './components/context/UserContext'
import { User } from './components/context/User'

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
     <Input value='' handleChange={(event) => console.log(event)}/>
     <Container styles={{ border: '1px solid black', padding: '1rem' }}/>
     <div>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
     </div>
     <div>
      <UserContextProvider>
        <User />
      </UserContextProvider>
     </div>
    </div>
  );
}

export default App;
