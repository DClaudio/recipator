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
        let quantity = groupedByName[key].reduce((acc, item) => acc + item.quantity, 0)
        return { name: key, quantity }
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
        .map(incredientToRemove => ({
            name: incredientToRemove.name,
            quantity: currentIncredient.quantity - incredientToRemove.quantity
        }))
    return !isEmpty(modifiedIncredient)? modifiedIncredient[0] : currentIncredient
}

function groupBy(prop, array) {
    return array.reduce((groups, item) => {
        var val = item[prop];
        groups[val] = groups[val] || [];
        groups[val].push(item);
        return groups;
    }, {});
}

