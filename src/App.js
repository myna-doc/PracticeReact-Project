import router from './Router';
import './App.css';
import { RouterProvider } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
  

  return (
   <>
   <RouterProvider router = {router} />
   </>
  );
}



export default App;