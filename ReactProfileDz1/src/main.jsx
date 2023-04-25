import { createRoot } from "react-dom/client";

const rootElem = document.querySelector("#root");

import App from "./components/App";

createRoot(rootElem).render(<App />);
