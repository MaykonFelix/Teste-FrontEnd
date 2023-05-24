
import { TitleAnimation } from "./components";
import { AppRouters } from "./routes";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  TitleAnimation();

  return (
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  );
};
