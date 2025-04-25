import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Undertale"]);

  const onAddCategory = (newCategory) => {
    setCategories([]);
    if (categories.includes(newCategory)) return; //Evitar que se repita la categoria
    setCategories([newCategory, ...categories]); //Mostrar
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <div key={category}>
          <GifGrid category={category}></GifGrid>
          <button>ola</button>
        </div>
      ))}
    </>
  );
};
