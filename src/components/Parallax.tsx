import React, { forwardRef, RefObject, useEffect } from 'react'


const WithParallaxEffect = forwardRef(
    ({
        children }, ref
    ) => {
        useEffect(() => {
            window.addEventListener('click', () => {
                alert(ref)
            })
        }, [])
        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        )
    })

export { WithParallaxEffect }