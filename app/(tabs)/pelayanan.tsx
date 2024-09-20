import FindMyPerkaraCard from "@/components/FindMyPerkaraCard";
import PersyaratanCard from "@/components/PersyaratanCard";
import { View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { Avatar, Button, Card, IconButton, Text, TextInput } from "react-native-paper";

export default function Page() {
  return (
    <GestureHandlerRootView
      style={{ flex: 1, padding: 12 }}>
      <ScrollView>
        <FindMyPerkaraCard />
        <PersyaratanCard />
      </ScrollView>
    </GestureHandlerRootView>
  )
}