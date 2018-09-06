import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import RecipeList from '../../src/components/recipeList'

describe('<RecipeList />', () => {
    it('should render the recipe list', () => {
        let title = 'first recipe'
        const recipeListComponent = shallow(
            <RecipeList>
                <div>1</div>
                <div>2</div>
            </RecipeList>
        )

        expect(recipeListComponent.childAt(0)).to.have.className('column-third')

        expect(recipeListComponent.childAt(1)).to.have.className('column-third')
        // ['column-third', 'column'].every(c => expect(recipeListComponent.childAt(0)).to.have.className(c))

        expect(recipeListComponent.childAt(1).hasClass('column-third')).to.equal(true)
        expect(recipeListComponent.find('[data-col=0]').contains(<div>1</div>)).to.equal(true)
        expect(recipeListComponent.find('[data-col=1]').contains(<div>2</div>)).to.equal(true)
    })
})  