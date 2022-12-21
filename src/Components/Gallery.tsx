import React, { useState} from 'react';
import "./css/gallery.css"


import GalleryItem from './GalleryItem';

const RecipeGallery = ({data}:any) => {
  const [recipeCards, setRecipeCards] = useState([]);

  //creates each individule instance in the gallery
  const GalleryMapped = data.map((recipeCard:any, i:number) => (
      <GalleryItem recipeCard = {recipeCard} key={i}/>
    ))



return (
  <div>
     <header>
      <h1 style={{ marginBottom: "60px", textAlign: "center" }}>Recipe Gallery</h1>
      </header>
      <div className='item-container'>

        {GalleryMapped}
     
  </div>
  </div>
  )
}

export default RecipeGallery;
