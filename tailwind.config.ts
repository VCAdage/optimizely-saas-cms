import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "adage-paletteadage-black": "var(--adage-paletteadage-black)",
      "adage-paletteadage-dark-grey": "var(--adage-paletteadage-dark-grey)",
      "adage-paletteadage-light-blue-1": "var(--adage-paletteadage-light-blue-1)",
      "adage-paletteadage-light-blue-2": "var(--adage-paletteadage-light-blue-2)",
      "adage-paletteadage-light-grey": "var(--adage-paletteadage-light-grey)",
      black: "var(--black)",
      "ui-palettebackground": "var(--ui-palettebackground)",
      "ui-paletteborder": "var(--ui-paletteborder)",
      "ui-paletteborder-active": "var(--ui-paletteborder-active)",
      "ui-palettetext-primary": "var(--ui-palettetext-primary)",
      white: "var(--white)",
      'ghost-white': '#F8F8FC',
      'light-grey': '#D9D9D9',
      'azure': '#007EFC',
      'verdansk': '#6AF388',
      'people-eater': '#9847FF',
      'paleruby': '#EB5A79',
      'tangy': '#FFAA47',
      'vulcan': '#10141D',
      'vulcan-85': '#2C313F',
      'independence': '#484F61',
      'mischka': '#CED2DC',
      'pale-sky': '#656C81',
      'currentColor': 'currentColor',
      'transparent': 'transparent',
      'inherit': 'inherit'
    },
    fontFamily: {
      "cta-desktop": "var(--cta-desktop-font-family)",
      "cta-mobile": "var(--cta-mobile-font-family)",
      "h2-desktop": "var(--h2-desktop-font-family)",
      "h2-mobile": "var(--h2-mobile-font-family)",
      "h4-desktop": "var(--h4-desktop-font-family)",
      "h4-mobile": "var(--h4-mobile-font-family)",
      "p-desktop": "var(--p-desktop-font-family)",
      "p-desktop-bold": "var(--p-desktop-bold-font-family)",
      "p-mobile": "var(--p-mobile-font-family)",
      "p-mobile-bold": "var(--p-mobile-bold-font-family)",
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: '1.6rem',
            color: 'inherit',
            'h1': { color: 'inherit' },
            'h2': { color: 'inherit' },
            'h3': { color: 'inherit' },
            'h4': { color: 'inherit' },
            'h5': { color: 'inherit' },
            'h6': { color: 'inherit' },
          },
        },
      },
    }
  },
  safelist: [
    "btn--primary",
    "btn--secondary",
    "btn--default",
    "btn--cta"
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    function({ addBase }: { addBase: any }) {
     addBase({
        'html': { fontSize: "10px" },
        'body': {fontSize: "1.6rem"}
      })
    },
    function ({ addBase, theme }: { addBase: any; theme: any }) {
      function extractColorVars(colorObj: Record<string, string>, colorGroup = ''): Record<string, string> {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const cssVariable = colorKey === "DEFAULT" ? `-${colorGroup}` : `-${colorGroup}-${colorKey}`;

          const newVars =
            typeof value === 'string'
              ? { [cssVariable]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
};
export default config;
