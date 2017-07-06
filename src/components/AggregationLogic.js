import differenceWith from 'lodash/differenceWith'
import isEqual from 'lodash/isEqual'

export function computeNewState(oldList, newList, isAppend) {
    return isAppend
        ? [...oldList, ...newList]
        : differenceWith(oldList, newList, isEqual)
}

export function aggregateIncredients(incredientList = []) {
    const groupedByName = groupBy("name", incredientList)
    return Object.keys(groupedByName).map(key => {
        let quantity = groupedByName[key].reduce((acc, item) => acc + item.quantity, 0)
        return { name: key, quantity }
    })
}

function groupBy(prop, array) {
    return array.reduce((groups, item) => {
        var val = item[prop];
        groups[val] = groups[val] || [];
        groups[val].push(item);
        return groups;
    }, {});
}

