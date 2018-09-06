import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import IncredientsList from './incredientsList'

describe('<IncredientsList /> ', () => {

    it('should render the IncredientsList', () => {
        const incredientsListComponent = shallow(<IncredientsList incredients={recipe1Incr} />)
        const incredientsList = incredientsListComponent.find('ul')
        expect(incredientsList).to.be.present()
        expect(incredientsList).to.have.exactly(3).descendants('li')
        expect(incredientsList.find('li').at(0)).to.have.text('onion 1 unit')
        expect(incredientsList.find('li').at(2)).to.have.text('rice 200 grams')

    })


    const recipe1Incr = [
        {
            "name": "onion",
            "quantity": 1,
            "unit": "unit"
        },
        {
            "name": "garlic",
            "quantity": 2,
            "unit": "unit"
        },
        {
            "name": "rice",
            "quantity": 200,
            "unit": "grams"
        }
    ]

})