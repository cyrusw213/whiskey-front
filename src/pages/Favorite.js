import React, { useState } from 'react'
import {Link} from 'react-router-dom'



function Favorites(props) {

    const [favorite, setFavorite] = useState(props.Favorites)
    console.log(props.whiskey)

    return (
        <div className="favorites">

            {props.whiskey.map((whiskey, index) =>
                <div key={index}>
                    <img src={whiskey.Photo} alt={whiskey.brand} />
                    <Link to={`/whiskey/${whiskey._id}`}><h3>{whiskey.Name}</h3> </Link>

                </div>
            )


            }





        </div>
    )

}

export default Favorites