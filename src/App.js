import React from 'react'
import Header from './header/Header'
import ItemMid from './items/MiddleItems';
import MenuIt from './menuTools/MenuItems';
import NewsItems from './menuTools/News';

const App = () => {
    return (
        <div>
            <Header />
            <ItemMid />
            <MenuIt />
            <NewsItems />
        </div>
    )
}
export default App