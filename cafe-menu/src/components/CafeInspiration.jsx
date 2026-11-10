import { useState } from "react";
import { useEffect } from "react";

export default function CafeInspiration() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    async function loadRecipes() {
        try {
        const respone = await fetch("https://dummyjson.com/recipes?limit=4");
        const data = await respone.json();
        setRecipes(data.recipes);
        setLoading(false);
        } catch (error) {
        console.error("Error fetching recipes:", error);
        setLoading(false);
        }
    }
     loadRecipes();
}, []);   

return (
    <section>
        <h2>Cafe Inspiration</h2>
        {loading ? (
        <p>Loading recipes ideas...</p>
        ) : (
        <div className="recipie-grid">
            {recipes.map((recipe) => (
                <article
                    key={recipe.id}
                    className="recipe-card" >
                    <h3>{recipe.name}</h3>
                    <img
                        src={recipe.image}
                        alt={recipe.name}
                        width="180"
                    />
                    <p>Difficulty: {recipe.difficulty}</p>
                </article>
            ))}
        </div>
        )}
    </section>
);
}