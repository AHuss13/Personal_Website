export const THEMES = {
  dark: {
    red: {
      primary: "#FF0000",
      secondary: "#800000",
      background: "#121212",
      text: "#FFFFFF",
    },
    blue: {
      primary: "#0066CC",
      secondary: "#003366",
      background: "#121212",
      text: "#FFFFFF",
    },
  },
  light: {
    red: {
      primary: "#FF0000",
      secondary: "#800000",
      background: "#FFFFFF",
      text: "#121212",
    },
    blue: {
      primary: "#0066CC",
      secondary: "#003366",
      background: "#FFFFFF",
      text: "#121212",
    },
  },
} as const;

export const SITE_CONFIG = {
  title: "Adam Huss - Portfolio",
  description: "Personal portfolio showcasing my work and skills",
  url: "https://your-domain.com",
} as const;
