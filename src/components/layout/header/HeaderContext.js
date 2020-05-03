import React, { createContext, useState } from 'react';

export const HeaderContext = createContext();

const HeaderContextProvider = props => {
    const [showMenu, setShowMenu] = useState(null);

    const ToggleMenu = () => {
        setShowMenu(!showMenu)
    };

    return <HeaderContext.Provider value={{ showMenu, ToggleMenu}}>
        {props.children}
    </HeaderContext.Provider>
};

export default HeaderContextProvider;
