import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Columns, { IColumnsProps } from "../../layout/Columns";

// const useStyles = makeStyles<Theme, Partial<IFlowDiagramProps>>((theme) => ({
//   FlowDiagram: {
//   },
// }));

export interface IFlowDiagramProps extends IColumnsProps{
  className?: string;
}

const FlowDiagram: React.FC<IFlowDiagramProps> = ({
  className,
  children,
  ...restProps
}) => {
  // const classes = useStyles({});

  return (
    <Columns {...restProps}>
      {children}
    </Columns>
  );
};

export default FlowDiagram;
