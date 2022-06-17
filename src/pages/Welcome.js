import React from 'react'
import ReactDOM from "react-dom"

const Welcome = () => {
    return (
        <div>
        <h1>oi </h1>
        <select>
            <option value="bourbon">Bourbon</option>
            <option value="rye">Rye</option>
            <option value="american">American</option>
            <option value="irish">Irish</option>
            <option value="scotch">Scotch</option>
            <option value="all">Full Stock</option>
        </select>
        </div>
    )
}

ReactDOM.render(<Welcome />, document.querySelector("#root"));

export default Welcome