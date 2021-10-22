import React from "react";
import style from "./recipes.modules.css";
const Recipe = ({title,ingredients,image}) =>{
return(
<div className={style.recipes}>
   <h1>{title}
   </h1>
   <img src={image} alt="" />
       <ol>
              {ingredients.map(ingredient=>(
                 <li>{ingredient.text}
                      </li>))}
        </ol>
         
</div>

);

};
export default Recipe;