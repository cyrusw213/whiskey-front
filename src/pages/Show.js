import { useEffect, useState } from "react"



const Show = (props) => {
    console.log(props?.whiskey)
    const id = props.match.params.id;
    const drink = props?.whiskey?.find(p => p._id === id);

    //state for form
    const [editForm, setEditForm] = useState(drink);

    //handle change function for form
    const handleChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {

        setEditForm(drink);
    }, [drink])

    //handle submit for form
    const handleSubmit = (e) => {
        e.preventDefault();
        const { Rating, _id } = editForm;
        props.updateWhiskey({ Rating }, _id);
        //redirect people back to index
    }

    return (

        <div className="container">
            <div className="product">
                <div className="imgDiv">
                    <img className="prodImg" src={drink?.Photo} alt={drink?.Name} />
                </div>
                {/* <h1 className="showHead"> {drink?.Brand}</h1> */}
                <h1>{drink?.Name}</h1>
                <h4>${drink?.Price}</h4>
                <h4>{drink?.Country}</h4>
                <a href={drink?.Website} target="_blank" rel="noreferrer">Distiller Website</a>
                <h5>Rating: {drink?.Rating}</h5>

                {
                    props.user ?
                        <form onSubmit={handleSubmit} >
                            <input className="rate"
                                name="Rating"
                                value={editForm?.Rating}
                                placeholder="Rate from 1-5"
                                onChange={handleChange}
                                type="number"
                                min="1"
                                max="5"
                            />
                            <input type="submit" value="Update Rating" className="form" />
                        </form>
                        : <></>
                }
            </div>
        </div>

    )
};


export default Show;