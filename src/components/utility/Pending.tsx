import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import clsx from "clsx";

export interface IPendingProps {
    className?: string;
    Component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
    typographyProps?: TypographyProps;
    [key: string]: any;
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
});

const defaultTypographyProps: TypographyProps & { component: IPendingProps["Component"] } = {
    variant: "caption",
    component: "div",
}

const Pending: React.FC<IPendingProps> = ({
    children,
    Component = "div",
    typographyProps = defaultTypographyProps,
    className,
    ...restProps
}) => {
    const classes = useStyles();
    return <Component className={clsx(classes.root, className)} {...restProps}>
        <CircularProgress />
        {children && <Typography {...typographyProps}>{children}</Typography>}
    </Component>
};

export default Pending;
