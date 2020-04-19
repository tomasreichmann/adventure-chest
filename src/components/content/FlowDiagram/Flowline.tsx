import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import theme from "../../../theme";

const inverseMap = {
  Left: "Right",
  Right: "Left",
  Top: "Bottom",
  Bottom: "Top",
}


const minLineSideLenght = 0;
const centerLenght = 30;

// const capitalizeFirst = (text: string) => {
//   return `${text[0]}${text.slice(1)}`;
// }

const getCurveStyles = (horizontal: "Left" | "Right", vertical: "Top" | "Bottom", color: React.CSSProperties["color"], borderSize: number, style: React.CSSProperties["borderStyle"] = "dashed"): CSSProperties => {
  const sizeWithoutHalfBorder = `${centerLenght/2 - borderSize/2}px`;
  return {
    boxSizing: "content-box",
    width: sizeWithoutHalfBorder,
    height: sizeWithoutHalfBorder,
    [`margin${inverseMap[horizontal]}`]: sizeWithoutHalfBorder,
    [`margin${inverseMap[vertical]}`]: sizeWithoutHalfBorder,
    [`border${inverseMap[horizontal]}`]: `${borderSize}px ${style} ${color}`,
    [`border${inverseMap[vertical]}`]: `${borderSize}px ${style} ${color}`,
    [`border${inverseMap[vertical]}${inverseMap[horizontal]}Radius`]: `100%`,
  }
}

const useLineStyles = makeStyles<Theme, Partial<ILineProps>>((theme) => ({
  HorizontalLine: ({ size = 2, style = "dashed", color = theme.palette.text.primary }) => ({
    width: "100%",
    borderTop: `${size}px ${style} ${color}`,
  }),
  VerticalLine: ({ size = 2, style = "dashed", color = theme.palette.text.primary }) => ({
    height: "100%",
    borderLeft: `${size}px ${style} ${color}`,
  }),
  TopRightCurve: getCurveStyles("Right", "Top", theme.palette.text.primary, 2),
  BottomRightCurve: getCurveStyles("Right", "Bottom", theme.palette.text.primary, 2),
  BottomLeftCurve: getCurveStyles("Left", "Bottom", theme.palette.text.primary, 2),
  TopLeftCurve: getCurveStyles("Left", "Top", theme.palette.text.primary, 2),
  TopArrow: {
    borderLeft: `8px solid transparent`,
    borderRight: `8px solid transparent`,
    borderBottom: `12px solid ${theme.palette.text.primary}`,
  },
  RightArrow: {
    borderTop: `8px solid transparent`,
    borderBottom: `8px solid transparent`,
    borderLeft: `12px solid ${theme.palette.text.primary}`,
  },
  BottomArrow: {
    borderLeft: `8px solid transparent`,
    borderRight: `8px solid transparent`,
    borderTop: `12px solid ${theme.palette.text.primary}`,
  },
  LeftArrow: {
    borderTop: `8px solid transparent`,
    borderBottom: `8px solid transparent`,
    borderRight: `12px solid ${theme.palette.text.primary}`,
  },
}));

export interface ILineProps {
  style?: React.CSSProperties["borderStyle"];
  color?: React.CSSProperties["borderColor"];
  size?: number;
}

const HorizontalLine: React.FC<ILineProps> = (props) => {
  const classes = useLineStyles(props);
  return <div className={classes.HorizontalLine} />
}
const VerticalLine: React.FC<ILineProps> = (props) => {
  const classes = useLineStyles(props);
  return <div className={classes.VerticalLine} />
}

const TopRightCurve: React.FC = () => {
  const classes = useLineStyles({});
  return <div className={classes.TopRightCurve} />
}
const BottomRightCurve: React.FC = () => {
  const classes = useLineStyles({});
  return <div className={classes.BottomRightCurve} />
}
const BottomLeftCurve: React.FC = () => {
  const classes = useLineStyles({});
  return <div className={classes.BottomLeftCurve} />
}
const TopLeftCurve: React.FC = () => {
  const classes = useLineStyles({});
  return <div className={classes.TopLeftCurve} />
}

const TopArrow: React.FC = () => {
  const classes = useLineStyles({});
  return <div className={classes.TopArrow} />
}
const RightArrow: React.FC = () => {
  const classes = useLineStyles({});
  return <div className={classes.RightArrow} />
}
const BottomArrow: React.FC = () => {
  const classes = useLineStyles({});
  return <div className={classes.BottomArrow} />
}
const LeftArrow: React.FC = () => {
  const classes = useLineStyles({});
  return <div className={classes.LeftArrow} />
}

const useStyles = makeStyles<Theme, Partial<IFlowlineProps>>(() => ({
  Flowline: ({column, row}) => ({
    display: "grid",
    gridColumn: column,
    gridRow: row,
    gridTemplateColumns: `minmax(${minLineSideLenght}px, 1fr) ${centerLenght}px minmax(${minLineSideLenght}px, 1fr)`,
    gridTemplateRows: `minmax(${minLineSideLenght}px, 1fr) auto minmax(${minLineSideLenght}px, 1fr)`,
    justifyItems: "center",
    alignItems: "center",
  }),
  top: {
    gridColumn: "2",
    gridRow: "1",
    alignSelf: "stretch",
    marginTop: theme.spacing(-1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  right: {
    gridColumn: "3",
    gridRow: "2",
    justifySelf: "stretch",
    marginRight: theme.spacing(-1),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bottom: {
    gridColumn: "2",
    gridRow: "3",
    alignSelf: "stretch",
    marginBottom: theme.spacing(-1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  left: {
    gridColumn: "1",
    gridRow: "2",
    justifySelf: "stretch",
    marginLeft: theme.spacing(-1),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  center: {
    gridColumn: "2",
    gridRow: "2",
    justifySelf: "stretch",
    alignSelf: "stretch",
  },
  centerVertical: {
    gridColumn: "2",
    gridRow: "2",
    justifySelf: "center",
    alignSelf: "stretch",
  },
  centerHorizontal: {
    gridColumn: "2",
    gridRow: "2",
    justifySelf: "stretch",
    alignSelf: "center",
  },
}));

export interface IFlowlineProps {
  className?: string;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
  topArrow?: boolean;
  rightArrow?: boolean;
  bottomArrow?: boolean;
  leftArrow?: boolean;
  column?: React.CSSProperties["gridColumn"];
  row?: React.CSSProperties["gridRow"];
}


const Flowline: React.FC<IFlowlineProps> = ({
  className,
  top,
  right,
  bottom,
  left,
  topArrow,
  rightArrow,
  bottomArrow,
  leftArrow,
  column,
  row,
}) => {
  const classes = useStyles({ column, row, top, right, bottom, left });

  return <div className={clsx(classes.Flowline, className)}>
    {(top || topArrow) && <div className={classes.top} >{topArrow ? <><TopArrow /><VerticalLine /></> : <VerticalLine />}</div>}
    {(right || rightArrow) && <div className={classes.right} >{rightArrow ? <><HorizontalLine /><RightArrow /></> : <HorizontalLine />}</div>}
    {(bottom || bottomArrow) && <div className={classes.bottom} >{bottomArrow ? <><VerticalLine /><BottomArrow /></> : <VerticalLine />}</div>}
    {(left || leftArrow) && <div className={classes.left} >{leftArrow ? <><LeftArrow /><HorizontalLine /></> : <HorizontalLine />}</div>}

    {(top || topArrow) && (bottom || bottomArrow) && <div className={classes.centerVertical} ><VerticalLine /></div>}
    {(left || leftArrow) && (right || rightArrow) && <div className={classes.centerHorizontal} ><HorizontalLine /></div>}

    {(top || topArrow) && (right || rightArrow) && <div className={classes.center} ><TopRightCurve /></div>}
    {(bottom || bottomArrow) && (right || rightArrow) && <div className={classes.center} ><BottomRightCurve /></div>}
    {(bottom || bottomArrow) && (left || leftArrow) && <div className={classes.center} ><BottomLeftCurve /></div>}
    {(top || topArrow) && (left || leftArrow) && <div className={classes.center} ><TopLeftCurve /></div>}
  </div>;
};

export default Flowline;
