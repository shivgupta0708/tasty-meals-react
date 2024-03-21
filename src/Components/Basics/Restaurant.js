import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi';
import Menucard from './Menucard';
import Navbar from './Navbar';

const uniqueList = [
  ...new Set(Menu.map((curElem)=>{
    return curElem.category;
  })
  ) ,
  "All",
];
const Restaurant = () => {
    const [menuData , setmenuData] = useState(Menu);
    const [menuList, setmenuList] = useState(uniqueList); 

    const filterItem = (category) => {
      if (category === "All") {
        setmenuData(Menu);
        return;
      }

        const updatedList = Menu.filter((curElem) => {
          return curElem.category === category;
        });
    
        setmenuData(updatedList);
      };



  return (
    <>
<Navbar filterItem={filterItem} menuList={menuList}/>
{/* humne navbar component mai ek function pass kiya fiter item and ek array pass kiya menulist */}
<Menucard menuData = {menuData} />   {/* menuData categiry ke according sorted hai*/}
    </>
  )
}

export default Restaurant
