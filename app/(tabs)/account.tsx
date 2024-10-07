import DownloadPicture from "@/components/ButtomSheet";
import { useState } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function account(){
    const [pictureOpen, setPictureOpen] = useState(false);

    return <SafeAreaView style={{ flex: 1}}>
        <View style={{flex:1}}>

            <Text>Account page</Text>
            <Button title="Open Bottom sheet" onPress={() =>{
                setPictureOpen(true)
            }}></Button>
            {pictureOpen && <DownloadPicture onClose={() => setPictureOpen(false)}/>}
        </View>


    </SafeAreaView>
} 