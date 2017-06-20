import { describe, it } from 'mocha'
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai' 
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())
chai.use(sinonChai)

require.extensions['.css'] = () => undefined

//import chaiThings from 'chai-things'
