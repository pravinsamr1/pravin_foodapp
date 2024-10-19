import React, { useContext, useState } from 'react'
import './fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/Storecontext'


const Fooditem = ({ id, name, price, description, image }) => {

    const[itemCount,setItemCount] = useState(0)

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-image-container'>
                <img className='food-item-img' src={image} alt='Food-Image'></img>
                {!itemCount
                    ? <img className='add' onClick={() => setItemCount(prev=> prev+1)} src={assets.add_icon_white} alt='addbutton' />
                    : <div className='food-item-counter'>
                        <img onClick={() => setItemCount (prev=>prev-1)} src={assets.remove_icon_red} alt='remove button' />
                        <p>{itemCount}</p>
                        <img onClick={() => setItemCount(prev=> prev+1)} src={assets.add_icon_green} alt='add button' />
                    </div>
                }
                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='addbutton' />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='remove button' />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='add button' />
                    </div>
                } 
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='star_rating '></img>
                </div>
                <p className='food-item-desc'>
                    {description}
                </p>
                <p className='food-item-price'>₹{price}</p>
            </div>
        </div>
    )
}

export default Fooditem