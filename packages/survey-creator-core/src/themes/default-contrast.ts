import { assign } from "./utils";
import { Default } from "./default";

const Theme = {
  "themeName": "default-contrast",
  "isLight": true,
  "cssVariables": {
    "--sjs-layer-1-background-500": "#FFFFFFFF",
    "--sjs-layer-1-background-400": "#EBEBEBFF",
    "--sjs-layer-1-foreground-100": "#000000FF",
    "--sjs-layer-1-foreground-50": "#00000099",
    "--sjs-layer-3-background-500": "#EBEBEBFF",
    "--sjs-layer-3-foreground-100": "#000000FF",
    "--sjs-layer-3-foreground-50": "#00000099",
    "--sjs-layer-2-background-500": "#F0F0F0FF",
    "--sjs-layer-2-background-400": "#DCDCDCFF",
    "--sjs-special-haze": "#D5C7FB59",
    "--sjs-border-25": "#C8C8C8FF",
    "--sjs-border-10": "#C8C8C8FF",
    "--sjs-primary-background-500": "#3A179EFF",
    "--sjs-primary-background-10": "#3A179E1A",
    "--sjs-primary-background-400": "#240973FF",
    "--sjs-primary-foreground-100": "#FFFFFFFF",
    "--sjs-primary-foreground-25": "#FFFFFF40",
    "--sjs-secondary-background-500": "#3A179EFF",
    "--sjs-secondary-background-25": "#3A179E40",
    "--sjs-secondary-background-10": "#3A179E1A",
    "--sjs-secondary-foreground-100": "#FFFFFFFF",
    "--sjs-secondary-forecolor-25": "#FFFFFF40",
    "--sjs-semantic-red-background-500": "#E50A66FF",
    "--sjs-semantic-red-background-10": "#E50A661A",
    "--sjs-semantic-red-foreground-100": "#FFFFFFFF",
    "--sjs-semantic-green-background-500": "#19AAB3FF",
    "--sjs-semantic-green-background-10": "#19AAB31A",
    "--sjs-semantic-green-foreground-100": "#FFFFFFFF",
    "--sjs-semantic-blue-background-500": "#4F43D9FF",
    "--sjs-semantic-blue-background-10": "#4F43D91A",
    "--sjs-semantic-blue-foreground-100": "#FFFFFFFF",
    "--sjs-semantic-yellow-background-500": "#FF710BFF",
    "--sjs-semantic-yellow-background-10": "#FF710B1A",
    "--sjs-semantic-yellow-foreground-100": "#FFFFFFFF",
    "--sjs-semantic-white-background-500": "#FFFFFFFF",
    "--sjs-code-gray-700": "#B6B6B6FF",
    "--sjs-code-blue-500": "#326FCAFF",
    "--sjs-code-gray-300": "#505050FF",
    "--sjs-code-green-500": "#08997CFF",
    "--sjs-code-red-500": "#F41B50FF",
    "--sjs-code-purple-500": "#C22FA2FF",
    "--sjs-code-yellow-500": "#F58D06FF",
    "--sjs-code-gray-500": "#8A8A8AFF",
    "--sjs-special-background": "#F4F2FBFF",
    "--sjs-layer-1-foreground-75": "#000000FF",
    "--sjs-layer-3-background-400": "#D7D7D7FF",
    "--sjs-special-glow": "#240A6D1A",
    "--sjs-special-shadow": "#00000040",
    "--sjs-layer-3-foreground-75": "#000000FF",
    "--sjs-layer-2-foreground-100": "#000000FF",
    "--sjs-layer-2-foreground-75": "#000000FF",
    "--sjs-layer-2-foreground-50": "#00000099",
    "--sjs-border-25-overlay": "#00000040"
  }
};
const themeCssVariables = {};
assign(themeCssVariables, Default.cssVariables, Theme.cssVariables);
assign(Theme, { cssVariables: themeCssVariables });

export default Theme;
export const DefaultContrast = Theme;