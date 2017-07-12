import React from 'react'
import { shallow } from 'enzyme'
import Root from './index'

describe.only('<Root />', () => {

    it('should render the Root page without errors', () => {
        const rootComponent = shallow(<Root recipeList={[]} />)
    })

})