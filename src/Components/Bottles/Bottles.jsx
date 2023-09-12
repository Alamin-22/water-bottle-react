import PropTypes from 'prop-types';

const Bottles = ({ bottle, handleAddToCart}) => {
    const { name, price, img } = bottle
    return (
        <div className="">
            <div className="card card-compact bg-base-100 shadow-xl bg-slate-200">
                <figure><img src={img} alt="Bottle" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleAddToCart(bottle)} className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Bottles.propTypes={
    bottle: PropTypes.object.isRequired
}

export default Bottles;