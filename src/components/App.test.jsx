import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import _ from 'lodash'

import App, { computeNewState } from './App'

describe('<App />', () => {

    it('should render the App without errors', () => {
        const appComponent = shallow(<App />)
    })

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
})