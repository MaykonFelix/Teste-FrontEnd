import './global.css'
import { Home } from "./pages";

import { TitleAnimation } from "./components";

export const App = () => {
  TitleAnimation();

  return (
    <>
      <Home />
    </>
  );
};
