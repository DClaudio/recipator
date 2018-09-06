import React from 'react'
import { shallow } from 'enzyme'

import App from './app'

describe('<App />', () => {

    it('should shallow render the App without errors', () => {
        const appComponent = shallow(<App />)
    })

})