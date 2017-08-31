import differenceWith from 'lodash/differenceWith'
import isEqual from 'lodash/isEqual'
import pullAll from 'lodash/pullAll'
import isEmpty from 'lodash/isEmpty'

export function computeNewState(currentIncredients, incredients, isAppend) {
    return isAppend
        ? aggregateIncredients([...currentIncredients, ...incredients])
        : removeIncredients(currentIncredients, incredients)
}

export function aggregateIncredients(incredientList = []) {
    const groupedByName = groupBy("name", incredientList)
    return Object.keys(groupedByName).map(key => {
        let result = groupedByName[key].reduce(
            (acc, item) => Object.assign(item, { quantity: acc.quantity + item.quantity }),
            { quantity: 0 }
        )
        return result
    })
}

function removeIncredients(currentIncredients, incredientsToRemove) {
    return currentIncredients
        .map(currentInredient => {
            const modifiedIncredient = modifyIncredient(incredientsToRemove, currentInredient)
            return modifiedIncredient
        }).filter(incredient => incredient.quantity != 0)
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
    return !isEmpty(modifiedIncredient) ? modifiedIncredient[0] : currentIncredient
}

function groupBy(prop, array) {
    return array.reduce((groups, item) => {
        let val = item[prop];
        groups[val] = groups[val] || [];
        groups[val].push(Object.assign({}, item));
        return groups;
    }, {});
}

