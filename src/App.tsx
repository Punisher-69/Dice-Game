import "./App.css";
import MainMenu from "./Components/MainMenu";
import { createBrowserRouter, RouterProvider } from "react-router";
import Game from "./Components/Game";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainMenu />,
    },
    {
      path: "/game",
      element: <Game />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
