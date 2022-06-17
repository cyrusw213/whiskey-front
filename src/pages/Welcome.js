import React from 'react'
import ReactDOM from "react-dom"

const Welcome = () => {
    return (
        <select>
            <option value="bourbon">Bourbon</option>
            <option value="rye">Rye</option>
            <option value="american">American</option>
            <option value="irish">Irish</option>
            <option value="scotch">Scotch</option>
            <option value="all">Full Stock</option>
        </select>
    )
}

ReactDOM.render(<Welcome />, document.querySelector("#root"));

export default Welcome