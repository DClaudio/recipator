import React from 'react'
import { shallow } from 'enzyme'
import RecipePage from './index'

describe('<RecipePage />', () => {

    it('should render the RecipePage page without errors', () => {
        const recipe = {
            title: '',
            incredients: []
        }
        const recipePageComponent = shallow(<RecipePage recipe={recipe} />)
    })

})