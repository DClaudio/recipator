import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Layout from '~/components/Layout'


describe('<Layout />', () => {

    it('should shallow render the header, footer and child component', () => {
        const layoutComponent = shallow(
            <Layout>
                <div class="childComponent">tst</div>
            </Layout>
        )

        expect(layoutComponent.find('div.childComponent')).to.be.present
        expect(layoutComponent.find('Header')).to.be.present
        expect(layoutComponent.find('Footer')).to.be.present
    })

})