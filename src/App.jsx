import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Root from "./pages/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route path="/" index element={<Home />} />
        <Route path="user/:id" element={<User />} />
      </Route>
    </>
  )
);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
