import { StyleSheet } from "react-native"

import { COLORS } from "../common/colors"


export const modalStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.whiteTransparent
  },
  container: {
    borderColor: COLORS.background,
    borderWidth: .5,
    backgroundColor: COLORS.white,
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10
  }
})