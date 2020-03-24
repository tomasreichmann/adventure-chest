import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

export interface IImageFrameProps {
  url: string;
  aspectRatio?: string;
  backgroundPosition?: React.CSSProperties["backgroundPosition"];
  Component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
}

const useStyles = makeStyles<Theme, Partial<IImageFrameProps>>(
  createStyles({
    root: {
      position: "relative",
    },
    image: ({ aspectRatio = "16:9", backgroundPosition = "center center", url }) => {
      const [widthAspect, heightAspect] = aspectRatio
        .split(":")
        .map(aspectFragment => parseInt(aspectFragment, 10));
      const widthToHeightRatio = heightAspect / widthAspect;
      return {
        display: "block",
        paddingTop: `${widthToHeightRatio * 100}%`,
        background: `url("${url}") ${backgroundPosition} / cover no-repeat`,
      };
    },

  })
);

const ImageFrame: React.FC<IImageFrameProps> = ({
  url,
  Component = "div",
  aspectRatio = "16:9",
  backgroundPosition = "center center",
}) => {
  const classes = useStyles({ aspectRatio, backgroundPosition, url });
  return <Component className={clsx(classes.root)} ><span className={classes.image} /></Component>;
};

export default ImageFrame;
