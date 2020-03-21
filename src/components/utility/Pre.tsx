import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import theme from "../../theme";

export interface IPreProps {
    className?: string;
    Component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
    maxHeight?: React.CSSProperties["maxHeight"];
    [key: string]: any;
}

const useStyles = makeStyles<typeof theme, Partial<IPreProps>>({
  root: {
    position: "relative",
    maxHeight: ({ maxHeight }) => maxHeight,
    overflow: "auto",
  },
});

const Pre: React.FC<IPreProps> = ({
    children,
    Component = "pre",
    maxHeight = 300,
    className,
    ...restProps
}) => {
    const classes = useStyles({maxHeight});
    return <Component className={clsx(classes.root, className)} {...restProps}>
        {JSON.stringify(children, null, 2)}
    </Component>
};

export default Pre;
