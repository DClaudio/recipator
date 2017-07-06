import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import { computeNewState, aggregateIncredients } from './AggregationLogic'

describe('<AggregationLogic', () => {

    it('should handle state change', () => {
        const incrToRemove = {
            "name": "garlic",
            "quantity": 1
        }
        const incrToRemain = {
            "name": "rice",
            "quantity": 3
        }
        const result = computeNewState([incrToRemain, incrToRemove], [Object.assign({}, incrToRemove)], false)
        expect(result).to.eql([incrToRemain])
    })

    it('should aggregate incredients', () => {
        const expectedResult = [
            {
                "name": "onion",
                "quantity": 2
            },
            {
                "name": "garlic",
                "quantity": 3
            },
            {
                "name": "rice",
                "quantity": 2
            },
            {
                "name": "pasta",
                "quantity": 1
            }
        ]
        const result = aggregateIncredients([...recipe1Incr, ...recipe2Incr])
        expect(result).to.eql(expectedResult)
    })


    const recipe1Incr = [
        {
            "name": "onion",
            "quantity": 1
        },
        {
            "name": "garlic",
            "quantity": 2
        },
        {
            "name": "rice",
            "quantity": 2
        }
    ]

    const recipe2Incr = [
        {
            "name": "onion",
            "quantity": 1
        },
        {
            "name": "garlic",
            "quantity": 1
        },
        {
            "name": "pasta",
            "quantity": 1
        }
    ]

})