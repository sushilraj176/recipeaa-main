 import React,{useEffect,useState} from "react";
import Recipe from "./Recipe";
import "./App.css";
import Header from "./Header";




const  App = () => {

  const [recipes,setRecipes]=useState([]);
   const [search,setSearch]=useState("");
    const [query,setQuery]=useState("cakes");
    



  const url= `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`;

  useEffect(()=>{
   getRecipes();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  } , []);
   
  const getRecipes=async () =>{
  const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
    
     };

   const updateSearch=e=>{
     setSearch(e.target.value);

   } ;
   const getSearch = e =>{
     e.preventDefault();
     setQuery(search);
     
   } ;

   return (
    <div className="App">
      <Header/>
    <form onSubmit={getSearch}className="search-form">
    <input className="search-bar" type="text" value={search} onChange={updateSearch} />
    <button className="search-button" type="submit"> Search</button>
    </form>
  
    <div className="recipes">
    {recipes.map(recipe => (
      <Recipe 
      Key={recipe.recipe.label}
       title={recipe.recipe.label}
       ingredients={recipe.recipe.ingredients}
        image={recipe.recipe.image}
         />
            
        
    ))}
    </div>
     </div>
 );

    } ;
    export default App ;
