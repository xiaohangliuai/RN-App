import { Link } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function expolore(){
    return <SafeAreaView>
        <Text>Explore page</Text>

        <Link href={"/accountInfo"}>
            <Text>Account information</Text>
        </Link>
    </SafeAreaView>
}