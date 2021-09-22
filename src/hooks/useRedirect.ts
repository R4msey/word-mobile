import { useCallback } from "react"
import { useNavigation } from "@react-navigation/core"

export const useRedirect = () => {
  const navigation = useNavigation()

  const redirectToGameScreen = useCallback((genre, data) => {

    navigation.navigate('RootGame', {
      screen: 'RootGame',
      params: { genre, data }
    })
  }, [])

  return {
    redirectToGameScreen
  }
}
