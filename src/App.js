import { BrowserRouter} from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';



function App() {
  return (
        <div className='app' font-familly= "roboto">

          <BrowserRouter>
                      <AnimatedRoutes />
          </BrowserRouter>
       </div>
  );
}

export default App;

/*
<Header></Header>
                  <Aside></Aside>
                  <Content></Content>
                  <Footer></Footer>


Admin pages
                  
                   <Route path="/transaf/api/v1/Administrator/login"  element={<AuthPage />} /> 
                  <Route path="/transaf/api/v1/Administrator/admin/home"  element={<AdminHome />} /> 
                  <Route path="/transaf/api/v1/Administrator/admin/users"  element={<AdminHome />} /> 
                  <Route path="/transaf/api/v1/Administrator/admin/vehicules"  element={<AdminHome />} /> 
                  <Route path="/transaf/api/v1/Administrator/admin/admins"  element={<AdminHome />} /> 
*/ 
