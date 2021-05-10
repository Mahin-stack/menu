import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if(category === 'all'){
    setMenuItems(items)
    return;
    }
    const newItems = items.filter((item) => 
    //if the category of items matches with the category ive passed
    // {eg: all} then it will keep those and remove others 
    item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Mahin's menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;


