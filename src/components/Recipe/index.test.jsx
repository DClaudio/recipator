import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'

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
        const recipeComponent = shallow(<Recipe title="title"
            description="description" imgUrl="imgUrl" incredients={incredients} />)

        let incredientsList = recipeComponent.find("ul.recipeItem__incredients")
        expect(incredientsList).to.be.present()
        expect(incredientsList.childAt(0)).to.have.html('<li>garlic: 1</li>')
        expect(incredientsList.childAt(1)).to.have.html('<li>rice: 3</li>')
    })

    it('should toogle selected state when clicked', () => {
        const recipeComponent = shallow(<Recipe selectHandler={spy()} title="title" description="dec" imgUrl="http://tst.com/img.png" />)

        expect(recipeComponent.find('.recipe-selected')).to.not.be.present()
        recipeComponent.simulate('click')
        expect(recipeComponent.find('.recipe-selected')).to.be.present()
    })

    it('should call handler when click', () => {
        const onClick = spy()
        const recipeComponent = shallow(<Recipe selectHandler={onClick}
            title="title" description="dec" imgUrl="http://tst.com/img.png" incredients={incredients} />)

        recipeComponent.simulate('click')
        expect(onClick).to.have.been.calledWith(incredients, true)
        recipeComponent.simulate('click')
        expect(onClick).to.have.been.calledWith(incredients, false)
    })
})

const incredients = [
    {
        "name": "garlic",
        "quantity": 1
    },
    {
        "name": "rice",
        "quantity": 3
    }
]