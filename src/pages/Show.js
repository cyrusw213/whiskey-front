import { useState } from "react"
import ProductInfo from './ProductInfo.js'


const Show = (props) => {

    const id = props.match.params.id;
    const drink = props.whiskey.find(p => p._id === id);

    //state for form
    const [editForm, setEditForm] = useState(drink);

    //handle change function for form
    const handleChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        })
    }
    //handle submit for form
    const handleSubmit = (e) => {
        e.preventDefault();
        const { Rating, _id } = editForm;
        props.updateWhiskey({ Rating }, _id);
        //redirect people back to index
    }

    return (


        <div className="product">
            <h1> {drink.Brand}</h1>
            <img src={drink.Photo} alt={drink.Name} />
            <h2>Name: {drink.Name}</h2>
            <h4>Price: ${drink.Price}</h4>
            <h4>Origin: {drink.Country}</h4>
            <h4>Website: {drink.Website}</h4>
            <h5>Rating: {drink.Rating}</h5>
            <form onSubmit={handleSubmit}>
                <input
                    name="Rating"
                    value={editForm.Rating}
                    placeholder="Rate from 1-5"
                    onChange={handleChange}
                    type="number"
                />
                <input type="submit" value="Update Rating" />
            </form>
        </div>

    )
};


export default Show;