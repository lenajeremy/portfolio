import { createContext } from "react";


const ShowMenuContext = createContext({
    showMenu: true,
    toggleMenu: () => {}
})

export { ShowMenuContext }