import React from 'react'
import Cards from './Cards'

function FoodSearch ({match}) {
    const name = match.params.name
    return (
        <div>
            <Cards/>
        </div>
    )
}

export default FoodSearch