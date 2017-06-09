import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import RecipeList from './index'

describe('<RecipeList />', () => {
    it('should render the recipe list', () => {
        let title = 'first recipe'
        const recipeListComponent = shallow(
            <RecipeList>
                <div>1</div>
                <div>2</div>
            </RecipeList>
        )
        expect(recipeListComponent.childAt(0)).to.have.text('1')
        expect(recipeListComponent.childAt(1)).to.have.text('2')
    })
})  