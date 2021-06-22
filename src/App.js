import {Route} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <header>    place to store the navigation         </header>
      <main>          place to store the routes         </main>
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
