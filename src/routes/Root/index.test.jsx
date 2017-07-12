import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Root from './index'

describe('<Root />', () => {

    it('should render the Root page without errors', () => {
        const appComponent = shallow(<Root recipeList={[]} />)
    })

})