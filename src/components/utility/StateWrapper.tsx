import React from "react";
import Pending, { IPendingProps } from "./Pending";
import { IState as IUsePromiseState } from "../../hooks/usePromise";
import ErrorMessage, { IErrorMessageProps } from "./ErrorMessage";
import NoDataErrorMessage from "./NoDataErrorMessage";

export interface IStateWrapperProps<V> extends IUsePromiseState<V> {
    children: JSX.Element | null;
    ErrorComponent?: React.ComponentType<IErrorMessageProps>;
    PendingComponent?: React.ComponentType<IPendingProps>;
}

const StateWrapper = <V, _>({
    isPending,
    error,
    value = null,
    ErrorComponent = ErrorMessage,
    PendingComponent = Pending,
    children,
}: IStateWrapperProps<V>): JSX.Element | null => {
    if (isPending) {
        return <PendingComponent />;
    }
    if (error) {
        return <ErrorComponent {...error} />;
    }
    if (value === null) {
        return <NoDataErrorMessage Component={ErrorComponent}/>;
    }
    return children;
};

export default StateWrapper;
