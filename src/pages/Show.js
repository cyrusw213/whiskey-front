function Show(props) {
    const id = props.match.params.id;
    const whiskey = props.whiskey;
    const drink = whiskey.find(whiskey => whiskey._id === id)




    return (
        <div className="show">
            <h1> {drink.Brand}</h1>
            <img src={drink.Photo} alt={drink.Name} />
            <h3>{drink.Name} ${drink.Price}</h3>

        </div>

    )
};


export default Show;