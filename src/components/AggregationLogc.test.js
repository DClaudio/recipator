import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import { computeNewState, aggregateIncredients } from './AggregationLogic'

describe('AggregationLogic', () => {

    const incredientsList1 = [
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
    const incredientsList2 = [
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

    it('should append incredients to the list', () => {
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

        const result = computeNewState(incredientsList1, incredientsList2, true)
        expect(result).to.eql(expectedResult)
    })

    it('should remmove incredeints from the list', () => {
        const incrToRemove = [
            {
                "name": "garlic",
                "quantity": 1
            },
            {
                "name": "onion",
                "quantity": 1
            }
        ]
        const expectedResult = [
            {
                "name": "garlic",
                "quantity": 1
            },
            {
                "name": "rice",
                "quantity": 2
            }
        ]

        const result = computeNewState(incredientsList1, incrToRemove, false)
        
        expect(result).to.deep.have.same.members(expectedResult)
    })

})