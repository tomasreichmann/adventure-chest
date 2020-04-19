import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import IconChest from "../icons/IconChest";
import ContentWithIcon from "./ContentWithIcon";

export interface IInventoryContentProps {
  className?: string;
}

const scriptIcon = <IconChest width="100%" />

const useStyles = makeStyles<Theme, Partial<IInventoryContentProps>>(() => ({
  InventoryContent: {},
}));


const InventoryContent: React.FC<IInventoryContentProps> = ({
  children,
  className,
}) => {
  const classes = useStyles({});

  return (
    <ContentWithIcon className={clsx(classes.InventoryContent, className)} icon={scriptIcon}>
      {children}
    </ContentWithIcon>
  );
};

export default InventoryContent;
