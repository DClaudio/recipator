import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import App from './App'

describe('<App />', () => {

    it('should shallow render the App without errors', () => {
        const appComponent = shallow(<App />)
    })

})