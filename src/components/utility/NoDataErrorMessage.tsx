import React from "react";
import ErrorMessage, { IErrorMessageProps } from "./ErrorMessage";

export interface INoDataErrorMessageProps extends Partial<IErrorMessageProps>{
    Component?: React.ComponentType<IErrorMessageProps>
}

const NoDataErrorMessage: React.FC<INoDataErrorMessageProps> = ({
    message = "No data",
    Component = ErrorMessage,
    ...restProps
}) => {
    return <Component message={message} {...restProps} />;
};

export default NoDataErrorMessage;
