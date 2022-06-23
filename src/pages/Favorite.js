import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import RemoveFavorites from '../components/RemoveFavorites';



function Favorites(props) {

    const [favorite, setFavorite] = useState(props.Favorites)
    const RemoveComponent = props.favoriteComponent;  

    console.log(props.whiskey)

    return (
        <div className="flex-container">
            {
        <div className="favorites">

            {props.whiskey.map((whiskey, index) =>
                <div key={index}>
                    <img src={whiskey.Photo} alt={whiskey.brand} />
                    <Link to={`/whiskey/${whiskey._id}`}><h3>{whiskey.Name}</h3> </Link>
                    <div id='favorites-link' onClick={ () => props.handleFavoritesClick(whiskey)}>
                        <RemoveFavorites  />
                    </div>
                </div>
            )


            }





        </div>
 } </div>
    )

}

export default Favorites