
interface ActionType {
    counter?: 0;
    type: 'INCREMENT' | 'RESET'
}

const counterReducer = (counter: number, action: ActionType): number => {

    if (action.type === 'INCREMENT')
        return counter + 1;
    else if (action.type === 'RESET')
        return 0

    return counter;
}

export default counterReducer;