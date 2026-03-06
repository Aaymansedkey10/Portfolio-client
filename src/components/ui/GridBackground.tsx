import React from 'react'

const GridBackground = () => {
    return (
        <div className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: `linear-gradient(var(--secondary) 1px, transparent 1px), linear-gradient(90deg, var(--secondary) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
            }} />
    )
}

export default GridBackground