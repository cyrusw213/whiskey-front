import { useEffect, useState } from "react"



const Show = (props) => {
    // console.log(props?.whiskey)
    const id = props.match.params.id;
    const drink = props?.whiskey?.find(p => p._id === id);
    const user = props?.user;
    const FavoriteComponent = props.favoriteComponent

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
                <h1 className="showHead"> {drink?.Brand}</h1>
                <h2>{drink?.Name}</h2>
                <h4>${drink?.Price}</h4>
                <h4>{drink?.Country}</h4>
                <a href={drink?.Website} target="_blank" rel="noreferrer">Distiller Website</a>
                <h5>Rating: {drink?.Rating}</h5>

                {
                    user
                        ? <div id='favorites-link' onClick={() => props.handleFavoritesClick(drink)}>
                            <FavoriteComponent />
                            <form onSubmit={handleSubmit}>
                                <input
                                    name="Rating"
                                    value={editForm?.Rating}
                                    placeholder="Rate from 1-5"
                                    onChange={handleChange}
                                    type="number"
                                    min="1"
                                    max="5"
                                />
                                <input type="submit" value="Update Rating" />
                            </form>
                        </div>
                        : <></>

                }
            </div>
        </div>

    )
};


export default Show;