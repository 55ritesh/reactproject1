
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import DetailContainer from './Components/DetailContainer';
import Watch from './Components/Watch';
import Form from './Components/Form';

const appRouter=createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children:[
    {
      path:'/',
      element:<DetailContainer/>
    },
    {
      path:"/watch",
      element:<Watch/>
    },
    {
      path:"/form",
      element:<Form/>
    },
  ]
  },
  {
    path:"/watch",
    element:<Watch/>
  }
])

function App() {
  return (
   <Provider store={store}>
    <div>
     <Header/>
     {/* <Body/> */}
     <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
