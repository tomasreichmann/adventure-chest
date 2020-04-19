import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

export interface IImageBoxProps {
  className?: string;
  uri: string;
}

const useStyles = makeStyles<Theme, Partial<IImageBoxProps>>(
  createStyles({
    root: {
      maxWidth: "100%",
    },
  })
);

const ImageBox: React.FC<IImageBoxProps> = ({
  className,
  uri,
}) => {
  const classes = useStyles({});
  return <img className={clsx(classes.root, className)}  src={uri} />;
};

export default ImageBox;
