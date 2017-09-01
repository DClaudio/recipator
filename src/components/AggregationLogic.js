import _ from 'ramda'
import { Maybe } from 'monet'    
export function computeNewState(currentIncredients, incredients, isAppend) {
    return isAppend
        ? aggregateIncredients([...currentIncredients, ...incredients])
        : removeIncredients(currentIncredients, incredients)
}

export function aggregateIncredients(incredientList = []) {    
    const groupedByName = _.groupBy(_.prop('name'))(incredientList)
    return _.compose(
        _.map(key => {

            let result = groupedByName[key].reduce(
                (acc, item) => Object.assign(item, { quantity: acc.quantity + item.quantity }),
                { quantity: 0 }
            )
            return result
        }),
        Object.keys
    )(groupedByName)
}


function removeIncredients(currentIncredients, incredientsToRemove) {
    return _.compose(
        _.filter(incredient => incredient.quantity != 0),
        _.map(_.curry(modifyIncredient)(incredientsToRemove)),
        _.filter(incredient => !_.contains(incredient, incredientsToRemove))
    )(currentIncredients)
}

function modifyIncredient(incredientsToRemove, currentIncredient) {
    const modifiedIncredient = incredientsToRemove
        .filter(incredientToRemove => incredientToRemove.name === currentIncredient.name)
        .map(incredientToRemove => (Object.assign({},
            incredientToRemove,
            {
                name: incredientToRemove.name,
                quantity: currentIncredient.quantity - incredientToRemove.quantity
            })
        ))
    return !_.isEmpty(modifiedIncredient) ? modifiedIncredient[0] : currentIncredient
}

// function modifyIncredient(incredientsToRemove, currentIncredient) {
//     const inc = Maybe.fromNull(currentIncredient)
//         .map(_.prop('name'))
//         .map(name => _.find(_.propEq('name', name), incredientsToRemove))
//     console.log('inc: ', inc)

//        const x =  inc.map(incredientToRemove => Object.assign(
//             {},
//             incredientToRemove,
//             { quantity: currentIncredient.quantity - incredientToRemove.quantity }
//         ))
//         console.log('x: ', x)
//         return x.orSome(currentIncredient)
// }