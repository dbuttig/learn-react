// Challenge: Re-write the first lines of React code we just had.
// You can render anything you want to the screen, doesn't have
// to be an h1 element.

import { createRoot } from "react-dom/client"
// could instead import ReactDOM

const root = createRoot(document.getElementById("root"))
// if imported ReactDOM would instead call ReactDOM.createRoot

root.render(<h1>Hello, React! I am Daniel!</h1>)