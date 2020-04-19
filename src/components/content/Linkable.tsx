import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Link, { LinkProps } from "../Link";

const useStyles = makeStyles(() => ({
  Linkable: {},
  link: {},
}));

export interface ILinkableProps extends Omit<LinkProps, "href"> {
  className?: string;
  href?: LinkProps["href"];
}

const Linkable: React.FC<ILinkableProps> = ({
  children,
  href,
  className,
  ...restProps
}) => {
  const classes = useStyles();
  if (href) {
    return (
      <Link
        {...restProps}
        href={href}
        className={clsx(classes.Linkable, classes.link, className)}
      >
        {children}
      </Link>
    );
  }
  return <span className={clsx(classes.Linkable, className)}>{children}</span>;
};

export default Linkable;
