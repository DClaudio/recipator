import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import { computeNewState, aggregateIncredients } from '../../src/components/AggregationLogic'

describe('AggregationLogic', () => {

    const incredientsList1 = () => [
        {
            "name": "onion",
            "quantity": 1,
            "unit": "unit(s)"
        },
        {
            "name": "garlic",
            "quantity": 2,
            "unit": "unit(s)"
        },
        {
            "name": "rice",
            "quantity": 200,
            "unit": "grams"
        }
    ]
    const incredientsList2 = () => [
        {
            "name": "onion",
            "quantity": 1,
            "unit": "unit(s)"
        },
        {
            "name": "garlic",
            "quantity": 1,
            "unit": "unit(s)"
        },
        {
            "name": "pasta",
            "quantity": 100,
            "unit": "grams"
        }
    ]

    it('should append incredients to the list', () => {
        const expectedResult = [
            {
                "name": "onion",
                "quantity": 2,
                "unit": "unit(s)"
            },
            {
                "name": "garlic",
                "quantity": 3,
                "unit": "unit(s)"
            },
            {
                "name": "rice",
                "quantity": 200,
                "unit": "grams"
            },
            {
                "name": "pasta",
                "quantity": 100,
                "unit": "grams"
            }
        ]

        const result = computeNewState(incredientsList1(), incredientsList2(), true)
        expect(result).to.eql(expectedResult)
    })

    it('should remmove incredeints from the list', () => {
        const incrToRemove = [
            {
                "name": "garlic",
                "quantity": 1,
                "unit": "unit(s)"
            },
            {
                "name": "onion",
                "quantity": 1,
                "unit": "unit(s)"
            }
        ]
        const expectedResult = [
            {
                "name": "garlic",
                "quantity": 1,
                "unit": "unit(s)"
            },
            {
                "name": "rice",
                "quantity": 200,
                "unit": "grams"
            }
        ]

        const result = computeNewState(incredientsList1(), incrToRemove, false)

        expect(result).to.deep.have.same.members(expectedResult)
    })

})