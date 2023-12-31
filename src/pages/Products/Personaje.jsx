

const Personaje = ({personaje}) => {

    const{name, species, image}= personaje

    return (
        <div className="col-md-4 mb-2">
            <div className="card mb-2">
                <img src={image} alt={`image-${name}`} />
                <div className="card-body">
                    <h5>{name}</h5>
                    <p>{species}</p>
                </div>
            </div>   
        </div>
    );
}

export default Personaje;
