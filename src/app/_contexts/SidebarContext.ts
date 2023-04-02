'use client'
import React from 'react'

const SidebarContext = React.createContext<{
    isOpen: boolean
    setOpen: (val: boolean) => void
}>({ isOpen: false, setOpen: () => { } })

export default SidebarContext;