import { Stack } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

// Makes native splash screen remain visible until hideAsync is called
// Makes splash screen visible when app is loading
SplashScreen.preventAutoHideAsync()

const Layout = () => {
    // Load fonts
    const [fontsLoaded] = useFonts({
        // import fonts from assets
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        // only show home page if fonts have been loaded
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    // don't show home screen if fonts are not loaded
    if (!fontsLoaded) return null

    return <Stack onLayout={onLayoutRootView} />
}

export default Layout