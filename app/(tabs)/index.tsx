// https://ideogram.ai/assets/image/lossless/response/6LfQJ4gdQtiyFeuUXrE_6Q
// https://ideogram.ai/assets/progressive-image/balanced/response/7Xwsm_A8Q4KMOyye8S_nXA
// https://ideogram.ai/assets/progressive-image/balanced/response/T3vqZgl8QE6IH4DI4B7i0w


import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Link } from "expo-router";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function expolore(){
    return <SafeAreaView style={{flex: 1}}>
        
        <ParallaxScrollView headerImage={<Image style={{flex: 1}} source={{
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/T3vqZgl8QE6IH4DI4B7i0w"
        }} />} headerBackgroundColor={{
            dark: "",
            light: ""
        }}>
            <Text>Explore page</Text>
        </ParallaxScrollView>
    </SafeAreaView>
}