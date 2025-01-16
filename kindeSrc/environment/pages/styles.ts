// CSS Variables configuration
const kindeVariables = {
  baseFontFamily:
    "-apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, Segoe UI, Roboto, sans-serif",
  controlSelectTextBorderRadius: "4px",
  buttonPrimaryBackgroundColor: "#3E27B7",
  buttonPrimaryColor: "#fff",
  buttonBorderRadius: "10px",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "#e9edec",
  buttonSecondaryColor: "#3d1cba",
  buttonSecondaryBorderStyle: "none",
  buttonSecondaryBackgroundColor: "rgba(235,233,248,0.6)",
  buttonSecondaryBorderRadius: "10px",
} as const;

export const generateCSSVariables = (): string => `
  :root {
    --kinde-base-font-family: ${kindeVariables.baseFontFamily};
    --kinde-control-select-text-border-radius: ${kindeVariables.controlSelectTextBorderRadius};
    --kinde-button-primary-background-color: ${kindeVariables.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
    --kinde-button-border-radius: ${kindeVariables.buttonBorderRadius};
    --kinde-button-secondary-background-color: ${kindeVariables.buttonSecondaryBackgroundColor};
    --kinde-button-secondary-border-width: ${kindeVariables.buttonSecondaryBorderWidth};
    --kinde-button-secondary-border-color: ${kindeVariables.buttonSecondaryBorderColor};
    --kinde-button-secondary-border-style: ${kindeVariables.buttonSecondaryBorderStyle};
    --kinde-button-secondary-border-radius: ${kindeVariables.buttonSecondaryBorderRadius};
    --kinde-button-secondary-color: ${kindeVariables.buttonSecondaryColor};
  }

  [data-kinde-choice-separator] {
    text-transform: uppercase;
  }

  [data-kinde-control-label] {
    font-size: 14px;
    font-weight: 600;
  }

  [data-kinde-control-select-text] { 
    height: 54px;
  }

  [data-kinde-button] {
    height: 42px;
  }

  .kinde-button-variant-primary .kinde-button-text{
    font-weight: 600;
    font-size: 18px;
  }

  [data-kinde-layout-widget] {
    width: 360px;
  }

  [data-kinde-fallback-action] {
    display: none;
  }
`;
