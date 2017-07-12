import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { spy } from 'sinon'

import ReadMore from './index'

describe('<ReadMore />', () => {
    //TODO: write proper tests
    it('should render the ReadMore', () => {
        const readMoreComponent = shallow(<ReadMore className="tst"> this is the text </ReadMore>)

        expect(readMoreComponent.hasClass('tst')).to.be.true
    })
})