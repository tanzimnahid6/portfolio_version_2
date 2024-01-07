import { createBrowserRouter} from "react-router-dom";
import Portfolio from "../Portfolio";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio></Portfolio>,
  },
]);
export default router