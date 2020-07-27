const theme = {
  colors: {
    white: "#ffffff",
    Mirage: "#101824",
    CuttySark: '#547980',
    Keppel: '#45ADA8',
    Chinook: '#9DE0AD',
    Mimosa: '#E5FCC2',
    PaleSky: '#636E84',
  },
  spacing: {
    xs: "32rem",
    sm: "48rem",
    md: "64rem",
    lg: "80rem",
    xl: "96rem",
    "2xl": "112rem",
    "3xl": "128rem",
    "4xl": "144rem",
    "5xl": "160rem",
    auto: "auto"
  },

  fonts: {
    Courier:"courier-std, Inconsolata, monospace",
    Inconsolata: "Inconsolata, monospace"
  },

  fontSizes: {
    xs: "1.2rem",
    smish: "1.3rem",
    sm: "1.4rem",
    md: "1.6rem",
    lg: "1.8rem",
    xl: "2rem",
    xxl: "2.2rem",
    h3: "3.2rem"
  },

  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",

  borderRadius: "0.3rem",
  navHeight: "7rem",
  navScrollHeight: "7rem",
  margin: "2rem",

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  gradient: `linear-gradient(0.4turn, #64d6ff, #64ffda)`,

  loaderDelay: `6`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`
}

export default theme
