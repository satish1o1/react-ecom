import './App.css'
import HomePage from './components/page/homepage/homepage.component'
import {Route,Switch} from 'react-router-dom'


function App() {
  return (
     <div>
        <Switch>
           <Route exact path='/' component={HomePage} />
        </Switch>
     </div>
  )
}

export default App;
