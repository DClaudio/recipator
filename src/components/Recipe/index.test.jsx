import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'

import Recipe from './index'

describe('<Recipe />', () => {

    it('should render the recipe', () => {
        let title = 'first recipe'
        let description = 'this is the best recipe ever'
        let imgUrl = 'http://tst.com/img.png'
        const recipeComponent = shallow(<Recipe title={title} description={description} imgUrl={imgUrl} />)
        expect(recipeComponent.find('img')).to.have.attr('src', imgUrl)
        expect(recipeComponent.hasClass('recipeItem')).to.equal(true)
        expect(recipeComponent.find('h4')).to.have.text(title)
        expect(recipeComponent.find('p')).to.have.text(description)
    })

    it('should render the recipe incredients', () => {
        let incredients = [
            {
                "name": "garlic",
                "quantity": 1
            },
            {
                "name": "rice",
                "quantity": 3
            }]
        const recipeComponent = shallow(<Recipe title="title"
            description="description" imgUrl="imgUrl" incredients={incredients} />)
            
        let incredientsList = recipeComponent.find("ul.recipeItem__incredients")
        expect(incredientsList).to.be.present()
        expect(incredientsList.childAt(0)).to.have.html('<li>garlic: 1</li>')
        expect(incredientsList.childAt(1)).to.have.html('<li>rice: 3</li>')
    })
})  