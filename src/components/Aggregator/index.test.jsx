import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Aggregator, { aggregateIncredients } from './index'

describe('<Aggregator /> ', () => {

    it('should render the aggregator', () => {
        const aggregatorComponent = shallow(<Aggregator incredients={[...recipe1Incr, ...recipe2Incr]} />)
        const aggregatorList = aggregatorComponent.find('ul')
        expect(aggregatorList).to.be.present()
        expect(aggregatorList).to.have.exactly(4).descendants('li')
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