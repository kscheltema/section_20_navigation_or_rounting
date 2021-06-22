import {Route} from 'react-router-dom';
import Welcome from './Components/Welcome';
import Products from './Components/Products';

function App() {
  return (
    <div>
<Route path='/welcome'>
<Welcome />  
   </Route>
   <Route path='/products'>
<Products />
   </Route>
    </div>
  );
}

export default App;
