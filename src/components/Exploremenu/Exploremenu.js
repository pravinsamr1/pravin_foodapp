import React from 'react';
import './exploremenu.css'
import {menu_list} from "../../assets/assets";

const Exploremenu = ({category,setcategory})=>{



    return (
        <div className="exploremenu" id="exploremenu">
            <h1>Explore Our Menu</h1>
            <p className={'exploremenu-text'}>Choose your diverse menu featuring a delectable array of dishes
                to satisfy your cravings and elevate your dishes experience, one delicious meal at a time.</p>
            <div className={'exploremenu-list'}>
                {menu_list.map((item, index)=>{
                    return (
                        <div onClick={() => setcategory(prev=>prev===item.menu_name? "All": item.menu_name)} key={index} className={'explore-menu-list-item'}>
                            <img className={category === item.menu_name?"active":""} src={item.menu_image}/>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    )
}
export default Exploremenu;