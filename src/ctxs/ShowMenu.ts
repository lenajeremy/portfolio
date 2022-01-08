import { createContext } from "react";


const ShowMenuContext = createContext({
    shouldShow: true,
    toggleState() {
        this.shouldShow = !this.shouldShow;
        alert('hello')
        // return this.shouldShow
    }
})

export { ShowMenuContext }