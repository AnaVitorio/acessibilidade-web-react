export async function axeAcessibilityReporter() {
    if(process.env.NODE_ENV === 'development' && typeof window !== 'undefined'){
        const axe = await require('@axe-core/react')
        const React = await require('react')
        const ReactDom = await require('react-dom')

        axe(React, ReactDom, 1000)
    }
    
}