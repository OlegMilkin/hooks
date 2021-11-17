import useInput from './hooks/useInput'
import Hover from './components/Hover'

function App() {

  const userName = useInput('')
  const password = useInput('')


  return (
    <div className="App">
      <h2>
        Input hook
      </h2>
      <input {...userName} type="text" placeholder="username"/>
      <input {...password} type="text" placeholder="password"/>
      <hr/>
      {'name:' + userName.value}
      <hr/>
      {'password:' + userName.value}
      <h2>
        Hover hook
      </h2>
      <div>
        <Hover/>
      </div>
    </div>
  );
}

export default App;
