import { useState, useEffect } from "react";

export interface IState<V> {
    value: V | null;
    error: Error | null;
    isPending: boolean;
}

export const getInitialState = <V>(initialValue: V | null = null, initialIsPending: boolean = true): IState<V> => {
    return { value: initialValue, error: null, isPending: initialIsPending };
}

export function usePromise<V>(
    task: () => Promise<V>,
    initialValue: V | null = null,
    extraDependencies = [],
): IState<V> {
    const initialState: IState<V> = getInitialState<V>(initialValue);
    const [state, setState] = useState(initialState);

    useEffect(() => {
        let isSubscribed = true;
        const promise = task();
        if (promise) {
            setState({ value: initialValue, error: null, isPending: true });
            promise
                .then(value => (isSubscribed ? setState({ value, error: null, isPending: false }) : null))
                .catch(error => {
                    // tslint:disable-next-line:no-console
                    console.log("error", error);
                    return isSubscribed ? setState({ value: initialValue, error, isPending: false }) : null;
                });
        }

        return () => {
            isSubscribed = false;
        };
    }, [task, initialValue, ...extraDependencies]);

    return state;
}

export default usePromise;
