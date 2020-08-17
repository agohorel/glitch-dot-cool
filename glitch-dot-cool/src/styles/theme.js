const lightTheme = {
  colors: {
    scale_0: "#000",    
    scale_1: "#191919",
    scale_2: "#2b2b2b",
    scale_3: "#4b4b4b",
    scale_4: "#c4c4c4",
    scale_5: "#e6e6e6",
    scale_6: "#fff",
    invalid: "#ba1a1a",
    valid: "#0ca3d6",
  },
}

const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    scale_6: "#000",
    scale_5: "#191919",
    scale_4: "#2b2b2b",
    scale_3: "#4b4b4b",
    scale_2: "#c4c4c4",
    scale_1: "#e6e6e6",
    scale_0: "#fff",
  },
}

module.exports = { lightTheme, darkTheme }
