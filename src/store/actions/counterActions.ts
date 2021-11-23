export enum CounterActions {
    INCREMENT = 'counter/incremented',
    DECREMENT = 'counter/decremented',
}

export const increment = () => ({
    type: CounterActions.INCREMENT
});

export const decrement = () => ({
    type: CounterActions.DECREMENT
});