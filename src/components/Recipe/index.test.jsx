import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Recipe from './index'

describe('<Recipe />', () => {
    it('should render the recipe', () => {
        let title = 'first recipe'
        let description = 'this is the best recipe ever'
        let imgUrl = 'http://tst.com/img.png'
        const recipeComponent = shallow(<Recipe title={title} description={description} imgUrl={imgUrl} />)
        expect(recipeComponent.find('img')).to.have.attr('src', imgUrl)
        expect(recipeComponent.hasClass('recipe-item')).to.equal(true)
        expect(recipeComponent.find('h4')).to.have.text(title)
        expect(recipeComponent.find('p')).to.have.text(description)
    })
})  