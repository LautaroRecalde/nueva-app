import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/NavBar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

    return (
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element= {<ItemListContainer greeting='Bienvenidos!' />} />
      <Route path='/category/:categoryid' element= {<ItemListContainer greeting='Categoria:' />} />
      <Route path='/detail/:id' element= {<ItemDetailContainer/>} />
     </Routes>
     </BrowserRouter>
    );
  }
  
  export default App;