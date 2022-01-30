import { sayHello } from "./greet";
import './index.html'
import './styles.css'
function showHello(divName: string, name: string) 
{
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
}
showHello("greeting", "simple TypeScript");