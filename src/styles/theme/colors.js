import tokens from '../../../tokens/json/color.json'

const colors = {
  primary: {
    light: tokens.color.primaryLight.value,
    main: tokens.color.primaryMain.value,
    dark: tokens.color.primaryDark.value,
  },
  secondary: {
    light: tokens.color.secondaryLight.value,
    main: tokens.color.secondaryMain.value,
    dark: tokens.color.secondaryDark.value,
  },

  neutral: {
    percent00: tokens.color.neutral00.value,
    percent50: tokens.color.neutral50.value,
    percent100: tokens.color.neutral100.value,
    percent200: tokens.color.neutral200.value,
    percent300: tokens.color.neutral300.value,
    percent400: tokens.color.neutral400.value,
    percent500: tokens.color.neutral500.value,
    percent600: tokens.color.neutral600.value,
    percent700: tokens.color.neutral700.value,
    percent800: tokens.color.neutral800.value,
    percent900: tokens.color.neutral900.value,
  },
  alert: {
    success: tokens.color.alertSuccess.value,
    successLight: tokens.color.alertSuccessLight.value,
    warning: tokens.color.alertWarning.value,
    warningLight: tokens.color.alertWarningLight.value,
    error: tokens.color.alertError.value,
    errorLight: tokens.color.alertErrorLight.value,
  },
}

export default colors
