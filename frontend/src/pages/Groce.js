import React from 'react';
import Card from '../components/Card';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Groce = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/items') // adjust to your endpoint
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const fruitsAndVeggies = items.slice(0, 8);
  const cookingEssentials = items.slice(8, 16);
  const householdEssentials = items.slice(16, 24);
  const bodyAndSkinCare = items.slice(24, 32);

  const renderCards = (data) =>
    data.map(item => (
      <Card
        key={item.id}
        imageurl={item.imageurl}
        itemname={item.itemname}
        price={item.price}
      />
    ));

  return (
    <div className="p-6 space-y-10 bg-slate-300">
      <h2 className="text-2xl font-bold ">Fruits & Vegetables</h2>
      <div className="grid grid-cols-4 gap-4 ">
        {renderCards(fruitsAndVeggies)}
      </div>

      <h2 className="text-2xl font-bold">Cooking Essentials</h2>
      <div className="grid grid-cols-4 gap-4 ">
        {renderCards(cookingEssentials)}
      </div>

      <h2 className="text-2xl font-bold">Household Essentials</h2>
      <div className="grid grid-cols-4 gap-4 ">
        {renderCards(householdEssentials)}
      </div>

      <h2 className="text-2xl font-bold">Body & Skin Care</h2>
      <div className="grid grid-cols-4 gap-4 ">
        {renderCards(bodyAndSkinCare)}
      </div>
    </div>
  );
};

export default Groce;