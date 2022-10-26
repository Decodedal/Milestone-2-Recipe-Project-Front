import React, { useState, useEffect, useParams } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

/*
function Cards() {
  // get ID from url
  const params = useParams();
  console.log(params); // {cardId: '123'}

  return <h2>cardId is {params.cardId}</h2>;
}
*/

const RecipePage = () => {
  const [recipe, setRecipeById] = useState([]);

  useEffect(() => {
    //fetchSampleRecipeById();
    fetchRecipeById();
}, []);

const fetchSampleRecipeById = () => {
  let sampleRecipe = [
      {id: 456, title: "Hawaiian Roll Sliders", author: "TOLSTOY", 
      description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests', 
      image: "https://www.simplyrecipes.com/thmb/79mZJHsJTh4cQitQ4osT6VmPw8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Meatball-Parm-Sliders-LEAD-5-837a559ccfab4a8ba861db245375a5f8.jpg"}
  ];  
  setRecipeById(sampleRecipe);
}

const fetchRecipeById = () => {
    axios
      .get('http://localhost:4000/recipe/Pizza')
      .then((res) => {
        console.log(res.data);
        setRecipeById(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
};

  return (
    <div>
          <div className='recipe-container' key={recipe.recipe_id}>
            <div>
              <img style={{ width: "300px", height: "auto" }} className='prod-image' src={recipe.image} alt='' />
            </div>
            <div>
              <h1 style={{ textAlign: "left" }} className='title'>{recipe.title}</h1>
              <p style={{ textAlign: "left" }}>
                <strong>Author:</strong> {recipe.author}
              </p>
              <p>
                <strong>Recipe Steps:</strong> {recipe.description}
              </p>
            </div>
          </div>
      <div className='back'>
        <Link to='/'>Recipe Gallery</Link>
      </div>
    </div>
  );
}

export default RecipePage;
