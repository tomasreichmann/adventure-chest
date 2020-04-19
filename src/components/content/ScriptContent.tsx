import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import IconBook from "../icons/IconBook";
import ContentWithIcon from "./ContentWithIcon";

export interface IScriptContentProps {
  className?: string;
}

const scriptIcon = <IconBook width="100%" />

const useStyles = makeStyles<Theme, Partial<IScriptContentProps>>(() => ({
  ScriptContent: {},
}));


const ScriptContent: React.FC<IScriptContentProps> = ({
  children,
  className,
}) => {
  const classes = useStyles({});

  return (
    <ContentWithIcon className={clsx(classes.ScriptContent, className)} icon={scriptIcon}>
      {children}
    </ContentWithIcon>
  );
};

export default ScriptContent;
