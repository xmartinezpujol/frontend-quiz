import { create } from "@storybook/theming";
import COLOR_PALETTE from '../src/Constants';

export default create({
  base: "dark",

  colorPrimary: COLOR_PALETTE.wasabiRad,
  colorSecondary: COLOR_PALETTE.noriDark,

  // UI
  appBg: COLOR_PALETTE.noriDark,
  appContentBg: COLOR_PALETTE.nori,
  appBorderColor: "black",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: COLOR_PALETTE.wasabiRad,
  textInverseColor: "rgba(255, 255, 255, 0.9)",

  // Toolbar default and active colors
  barTextColor: COLOR_PALETTE.wasabiRad,
  barSelectedColor: COLOR_PALETTE.pink,
  barBg: COLOR_PALETTE.noriDark,

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: COLOR_PALETTE.nori,
  inputBorderRadius: 4,

  brandTitle: "WASABI UI",
});
