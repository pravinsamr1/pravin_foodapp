import React, { useState } from 'react'
import './home.css';
import Header1 from '../../components/Header1.js/Header1';
import Exploremenu from "../../components/Exploremenu/Exploremenu";
import Fooddisplay from "../../components/Fooddisplay/Fooddisplay";
import Appdownload from '../../components/App Download/Appdownload';


const Home = () => {

    const [categories, setCategories] = useState("All")


  return (
    <div>
        <Header1/>
        <Exploremenu category={categories} setcategory={setCategories}/>
        <Fooddisplay category={categories}/>
        <Appdownload/>
    </div>
  )
}

export default Home