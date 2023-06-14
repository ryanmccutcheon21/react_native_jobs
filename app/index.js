import { View, ScrollView, SafeAreaView } from 'react-native'
import { useState } from 'react'
import { Stack, useRouter } from 'expo-router'

import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {
    // define router 
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('')

    return (
        // wrap in SafeAreaView to show content w/o anything appearing over View
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    // choose whether to hide elevation shadow on Android or bottom border on iOS
                    headerShadowVisible: false,
                    headerLeft: () => (
                        // hamburger button
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        // profile icon
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    // make header title empty string so 'index' is not showing in header
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium,
                }}>
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home