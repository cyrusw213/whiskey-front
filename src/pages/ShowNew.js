import { useState } from "react"


const ShowNew = (props) => {

    const id = props.match.params.id;
    const whiskey = props.whiskey
    const drink = whiskey.find(w => w._id === id);
    const [whiskeyShow, setWhiskey] = useState(drink)
    console.log(drink)

    //state for form
    // const [ editForm, setEditForm ] = useState(drink);

    // //handle change function for form
    // const handleChange = (e) => {
    //     setEditForm({ ...editForm,
    //                 [e.target.name]: e.target.value
    //             })
    // }
    // //handle submit for form
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const { rating, _id } = editForm
    //     props.updateWhiskey({ rating }, _id);
    //     //redirect people back to index
    // }

    return (
        <div className="show">
            <h1> {drink.Brand}</h1>
            <img src={drink.Photo} alt={drink.Name} />
            <h3>{drink.Name} ${drink.Price}</h3>
            <h5>{drink.Rating}</h5>
            {/* <form onSubmit={handleSubmit}>
                <input 
                name="rating"
                value={editForm.rating}
                placeholder="Rate from 1-5"
                onChange={handleChange}
                type="text"
                />
                <input type="submit" value="Update Rating"/>
            </form> */}
        </div>

    )
};


export default ShowNew;