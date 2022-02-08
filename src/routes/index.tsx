import { Layout } from '../layout/Layout/Layout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home, Login } from '../page';
import { NotFound } from '../page';
import { PrivateRoute } from "./PrivateRoute";
import Redirect from "../page/auth/Redirect";

const PageRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/private" element={<PrivateRoute children={ <div>Только ауз</div>}/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={ <Login/> } />
        <Route path="/redirect" element={ <Redirect/> } />
      </Routes>
    </BrowserRouter>
);
export default PageRoutes;

