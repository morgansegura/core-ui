export type BorderRadiusProp =
  | "none"
  | "sm"
  | "md"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "full";

export type HeaderVariantProp = "hide-on-scroll" | "default";

export type ColorProp =
  | Extract<IntentProp, "info" | "success" | "warning" | "danger" | "error">
  | "inherit"
  | "primary"
  | "secondary"
  | "tertiary"
  | "light"
  | "dark";

// export type ElevationProp = "sans" | "serif";

export type ButtonVariantProp = "contained" | "outlined" | "text" | string;

export type IntentProp = "info" | "success" | "warning" | "danger" | "error";

export type FontFamilyProp = "sans" | "serif";

export type LineHeightProp =
  | "none"
  | "tight"
  | "snug"
  | "normal"
  | "relaxed"
  | "loose";

export type LetterSpacingProp =
  | "tighter"
  | "tight"
  | "normal"
  | "wide"
  | "wider"
  | "widest";

export type TextTransformProp =
  | "uppercase"
  | "lowercase"
  | "capitalize"
  | "normal"
  | "italic"
  | "dropcap"
  | "ucfirst"
  | "underline";

export type TextDecorationProp =
  | "underline"
  | "line-though"
  | "overline"
  | "no-underline";

export type FontStyleProp = "italic" | "not-italic";

export type LetterSizeProp =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export type ResponsivePropObject<T> = {
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
};

export type ResponsiveProp<T> = T | ResponsivePropObject<T>;

export type SizeProp =
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl"
  | "10xl"
  | "full";

export type TargetProp = "_blank" | "_self" | "_parent" | "_top" | "framename";

export type WeightProp =
  | "extralight"
  | "thin"
  | "light"
  | "normal"
  | "medium"
  | "bold"
  | "semibold"
  | "black";

export type FlexDirectionProp = "col" | "col-reverse" | "row" | "row-reverse";

export type SpacingDirectionProp = "my" | "mt" | "mb" | "py" | "pt" | "pb";
export type TypographyLayoutProp =
  | "dashboard"
  | "prose"
  | "layout"
  | "store"
  | "document";
