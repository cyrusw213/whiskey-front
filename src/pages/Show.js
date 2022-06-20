import { useState } from "react"


const Show = (props) => {

    const id = props.match.params.id;
    const drink = props.whiskey.find(p => p._id === id);

    //state for form
    const [ editForm, setEditForm ] = useState(drink);

    //handle change function for form
    const handleChange = (e) => {
        setEditForm({ ...editForm,
                    [e.target.name]: e.target.value
                })
    }
    //handle submit for form
    const handleSubmit = (e) => {
        e.preventDefault();
        const { rating, _id } = editForm
        props.updateWhiskey({ rating }, _id);
        //redirect people back to index
    }

    return (
        <div className="show">
            <h1> {drink.Brand}</h1>
            <img src={drink.Photo} alt={drink.Name} />
            <h3>{drink.Name} ${drink.Price}</h3>
            <h5>{drink.Rating}</h5>
            <form onSubmit={handleSubmit}>
                <input 
                name="rating"
                value={editForm.rating}
                placeholder="Rate from 1-5"
                onChange={handleChange}
                type="text"
                />
                <input type="submit" value="Update Rating"/>
            </form>
        </div>

    )
};


export default Show;