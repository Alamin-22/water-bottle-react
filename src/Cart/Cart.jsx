import PropTypes from 'prop-types';

const Cart = ({ cart, handleCartToRemove }) => {
    return (
        <div>
            <h4>Cart Added: {cart.length}</h4>
            <div className="flex flex-wrap gap-4 mb-2">
                {cart.map(bottle =>
                    <div key={bottle.id} className='space-y-3'>
                        <img className="w-24 h-28 rounded-lg" src={bottle.img}></img>
                        <button className='btn btn-secondary' onClick={() => handleCartToRemove(bottle.id)}>Remove</button>
                    </div>)}
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleCartToRemove: PropTypes.func.isRequired
}

export default Cart;