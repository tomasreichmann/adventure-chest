import React from "react";
import MuiAlert from '@material-ui/lab/Alert';

export interface IErrorMessageProps extends Pick<Error, "message"> {
    className?: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({
    message,
    className
}) => {
    return <MuiAlert className={className} elevation={0} variant="filled" severity="error" >{message}</MuiAlert>;
};

export default ErrorMessage;
