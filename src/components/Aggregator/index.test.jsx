import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Aggregator, { aggregateIncredients } from './index'

describe('<Aggregator /> ', () => {

    it('should render the aggregator', () => {
        const aggregatorComponent = shallow(<Aggregator incredients={recipe1Incr} />)
        const aggregatorList = aggregatorComponent.find('ul')
        expect(aggregatorList).to.be.present()
        expect(aggregatorList).to.have.exactly(3).descendants('li')
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