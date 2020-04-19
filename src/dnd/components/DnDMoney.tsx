import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import IconDnDGold from "../icons/IconDnDGold";
import { IIconProps } from "../../components/icons/Icon";

const useStyles = makeStyles<Theme>(() => ({
  DnDCoins: {},
  DnDCoinsIcon: {
    height: "1.3em",
    display: "inline-block",
    verticalAlign: "middle",
  },
  DnDMoney: {},
}));

export const dndCoinConversionMap = {
  cp: { cp: 1, sp: 0.1, ep: 0.02, gp: 0.01, pp: 0.001, mp: 0.0002 },
  sp: { cp: 10, sp: 1, ep: 0.2, gp: 0.1, pp: 0.01, mp: 0.002 },
  ep: { cp: 50, sp: 5, ep: 1, gp: 0.01, pp: 0.05, mp: 0.01 },
  gp: { cp: 100, sp: 10, ep: 2, gp: 1, pp: 0.1, mp: 0.02 },
  pp: { cp: 1000, sp: 100, ep: 20, gp: 10, pp: 1, mp: 0.2 },
  mp: { cp: 5000, sp: 500, ep: 100, gp: 50, pp: 5, mp: 1 },
};

export const dndCoinIconUriMap = {
  cp: "/copper.png",
  sp: "/silver.png",
  ep: "/electrum.png",
  gp: "/gold.png",
  pp: "/platinum.png",
  mp: "/moon.png",
};

export const dndCoinsTitleMap = {
  cp: "měděných mincí",
  sp: "stříbrných mincí",
  ep: "elektrových mincí",
  gp: "zlatých mincí",
  pp: "platinových mincí",
  mp: "měsíců",
};

export interface IDnDCoinProps {
  className?: string;
  coin: keyof typeof dndCoinConversionMap;
  value: number;
  title?: string;
  iconUri?: string;
  variant?: TypographyProps["variant"];
}



export const DnDCoins: React.FC<IDnDCoinProps> = ({
  className,
  coin,
  value,
  title = dndCoinsTitleMap[coin],
  iconUri = dndCoinIconUriMap[coin],
  variant = "body2",
}) => {
  const classes = useStyles({});
  return <Typography component="span" className={clsx(classes.DnDCoins, className)} variant={variant} title={`${value} ${title}`} >
    {value}&nbsp;<img src={iconUri} className={classes.DnDCoinsIcon} />
  </Typography>;
};

export interface IDnDMoneyProps {
  className?: string;
  cp?: number;
  sp?: number;
  ep?: number;
  gp?: number;
  pp?: number;
  mp?: number;
}

const DnDMoney: React.FC<IDnDMoneyProps> = ({
  className,
  cp,
  sp,
  ep,
  gp,
  pp,
  mp,
}) => {
  const classes = useStyles({});
  const coinElements = [];
  if (mp && mp > 0) {
    coinElements.push(<DnDCoins key="mp" coin="mp" value={mp} />);
  }
  if (pp && pp > 0) {
    coinElements.push(<DnDCoins key="pp" coin="pp" value={pp} />);
  }
  if (gp && gp > 0) {
    coinElements.push(<DnDCoins key="gp" coin="gp" value={gp} />);
  }
  if (ep && ep > 0) {
    coinElements.push(<DnDCoins key="ep" coin="ep" value={ep} />);
  }
  if (sp && sp > 0) {
    coinElements.push(<DnDCoins key="sp" coin="sp" value={sp} />);
  }
  if (cp && cp > 0) {
    coinElements.push(<DnDCoins key="cp" coin="cp" value={cp} />);
  }

  return (
    <span className={clsx(classes.DnDMoney, className)} >
      {coinElements.map((element, elementIndex) => {
        if (elementIndex < coinElements.length - 1) {
          return <React.Fragment key={elementIndex} >{element}&ensp;</React.Fragment>
        }
        return element;
      })}
    </span>
  );
};

export default DnDMoney;
