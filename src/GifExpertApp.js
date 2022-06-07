import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ['One Punch','Samurai X','Dragon ball']
  const [categories, setCategories] = useState(["One Punch"]);

  /*  const handleAdd = () => {
    //setCategories([...categories,'HunterXHunter']);
    setCategories( category => [...category, 'HunterXHunter']);
  } */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />

      <ol>
        {categories.map( (category, i) => <GifGrid key={ category } category={ category } />
          //return <li key={category}> {category} </li>;
        )}
      </ol>
    </>
  );
};
