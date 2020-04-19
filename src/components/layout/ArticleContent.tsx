import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

export interface IArticleContentProps {
  className?: string;
  spacing?: number;
}

const useStyles = makeStyles<Theme, Partial<IArticleContentProps>>((theme) =>
  createStyles({
    ArticleContent: ({ spacing = 2 }) => ({
      display: "grid",
      gridGap: theme.spacing(spacing),
    }),
  })
);

const ArticleContent: React.FC<IArticleContentProps> = ({
  className,
  spacing = 2,
  children,
}) => {
  const classes = useStyles({ spacing });
  return (
    <div className={clsx(classes.ArticleContent, className)}>{children}</div>
  );
};

export default ArticleContent;
