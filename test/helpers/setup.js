import { describe, it } from 'mocha'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

require.extensions['.css'] = () => undefined

//import chaiThings from 'chai-things'
//chai.use(sinonChai)
