import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { expect } from 'chai'
import { shallow, render } from 'enzyme'
import { spy } from 'sinon'

import Recipe from './index'

describe('<Recipe />', () => {

    it('should render the recipe', () => {
        let title = 'first recipe'
        let description = 'this is the best recipe ever'
        let imgUrl = 'http://tst.com/img.png'
        const wrapper = render(
            <MemoryRouter>
                <Recipe title={title} description={description} imgUrl={imgUrl} />
            </MemoryRouter>
        )
        
        const recipeComponent = wrapper.find('div.recipeItem')

        expect(recipeComponent).to.be.present()
        expect(recipeComponent.find('img')).to.have.attr('src', imgUrl)
        expect(recipeComponent.find('h4 a')).to.have.text(title)
    })

    it('should toogle selected state when clicked', () => {
        const recipeComponent = shallow(<Recipe selectHandler={spy()} title="title" description="dec" imgUrl="http://tst.com/img.png" />)

        expect(recipeComponent.find('.recipe-selected')).to.not.be.present()
        recipeComponent.find('img').simulate('click')
        expect(recipeComponent.find('.recipe-selected')).to.be.present()
        expect(recipeComponent.find('.recipeItem-selected')).to.be.present()
    })

    it('should call handler when click', () => {
        const onClick = spy()
        const recipeComponent = shallow(<Recipe selectHandler={onClick}
            title="title" description="dec" imgUrl="http://tst.com/img.png" incredients={incredients} />)

        recipeComponent.find('img').simulate('click')
        expect(onClick).to.have.been.calledWith(incredients, true)
        recipeComponent.find('img').simulate('click')
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