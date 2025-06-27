import {Route,Routes} from "react-router-dom"
import { DefaultLayout } from "./layout/defaulLayout"
import { Posts } from "./pages/Post"
import { Home } from "./pages/Home"


export function Router(){
    return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} /> 
        <Route path="issue/:id" element={<Posts />} /> 
      </Route>
    </Routes>
  );
}