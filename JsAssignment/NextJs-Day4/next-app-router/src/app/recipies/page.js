'use client';
import { useEffect, useState } from "react";
import './recipies.css';
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
export default function Recipies() {
    const [recipes, setRecipes] = useState([]);
    //useEffect(()=>{
    //  const fetchRecipes = async () => {
    //      const response = await fetch('https://dummyjson.com/recipes');
    //      const data = await response.json();
    //      setRecipes(data.recipes.slice(0, 10));
    //  };
    //  fetchRecipes();
    //},[])
    //useEffect(()=>{
    //     fetch('https://dummyjson.com/recipes')
    //     .then((response)=> response.json())
    //     .then((data)=> setRecipes(data.recipes.slice(0,10)))
    //     .catch((error)=> console.error('The Data is Not Found!', error))
    //}, []);
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch('https://dummyjson.com/recipes');
                const data = await response.json();
                setRecipes(data.recipes.slice(0,10));
            }
            catch(error){
                console.error('Data is not Found!', error);
            }
        };
        fetchData();
    },[]);
    return (
      <div className="wrapper--1">
        <h1>Recipies</h1>
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Prep Time (Minutes)</th>
                <th>Servings</th>
            </tr>
        </thead>
        <tbody>
            {recipes.map((recipe) => (
                <tr key={recipe.id}>
                    <td>{recipe.name}</td>
                    <td>{recipe.prepTimeMinutes}</td>
                    <td>{recipe.servings}</td>
                </tr>
            ))}
        </tbody>
        </table>
      </div>
    );
}