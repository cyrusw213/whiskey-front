import React from 'react'
import {Link} from 'react-router-dom'



function Favorites(props) {
    
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