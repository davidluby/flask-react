import ReactDom from "react-dom/client"

import Example from "../example/Example"

function Card() {
  return (
    <div class="border border-primary border-3 p-2">
        <Example />
    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Card />)

export default Card