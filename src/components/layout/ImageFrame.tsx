import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

export interface IImageFrameProps {
  className?: string;
  uri: string;
  aspectRatio?: string;
  backgroundPosition?: React.CSSProperties["backgroundPosition"];
  Component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
}

const useStyles = makeStyles<Theme, Partial<IImageFrameProps>>(
  createStyles({
    root: {
      position: "relative",
    },
    image: ({ aspectRatio = "16:9", backgroundPosition = "center center", uri }) => {
      const [widthAspect, heightAspect] = aspectRatio
        .split(":")
        .map(aspectFragment => parseInt(aspectFragment, 10));
      const widthToHeightRatio = heightAspect / widthAspect;
      return {
        display: "block",
        paddingTop: `${widthToHeightRatio * 100}%`,
        background: `url("${uri}") ${backgroundPosition} / cover no-repeat`,
      };
    },

  })
);

const ImageFrame: React.FC<IImageFrameProps> = ({
  className,
  uri,
  Component = "div",
  aspectRatio = "16:9",
  backgroundPosition = "center center",
}) => {
  const classes = useStyles({ aspectRatio, backgroundPosition, uri });
  return <Component className={clsx(classes.root, className)} ><span className={classes.image} /></Component>;
};

export default ImageFrame;
