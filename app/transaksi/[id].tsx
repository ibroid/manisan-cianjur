import { ThemedText } from "@/components/ThemedText";
import useRiwayatTransaksi from "@/hooks/useRiwayatTransaksi";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback } from "react";
import { FlatList, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator, Button, Card, Text } from "react-native-paper";

export default function Page() {

  const { fetchRiwayatPerkara, cancelFetchRiwayatPerkara, loading, error, errorMessage, data } = useRiwayatTransaksi()

  const { id } = useLocalSearchParams()

  useFocusEffect(useCallback(() => {
    fetchRiwayatPerkara(id as string)

    return () => {
      cancelFetchRiwayatPerkara()
    }
  }, []))

  if (!loading && !error && data && data.daftar_transaksi.length > 0) {
    return <FlatList
      style={{ flex: 1, marginBottom: 24 }}
      data={data.daftar_transaksi}
      renderItem={({ item }) => <Card style={{ marginVertical: 12, marginHorizontal: 24 }}>
        <Card.Title
          title={item.tanggal}
          style={{
            backgroundColor: item.jenis_transaksi == "Masuk" ? "#9AC1FB" : "#FF9797"
          }} />
        <Card.Content>
          <Text variant="titleLarge">{item.keperluan}</Text>
          <Text variant="bodyMedium">Transaksi {item.jenis_transaksi}</Text>
        </Card.Content>
        <Card.Actions>
          <Text variant="titleLarge">{item.jumlah}</Text>
        </Card.Actions>
      </Card>}
      ListFooterComponent={
        <View style={{
          marginHorizontal: 24,
          flexDirection: "column"
        }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

            <Text variant="bodyLarge">Total Masuk : </Text>
            <Text variant="bodyLarge">{data.total_masuk} </Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

            <Text variant="bodyLarge">Total Keluar : </Text>
            <Text variant="bodyLarge">{data.total_keluar} </Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

            <Text variant="bodyLarge">Sisa : </Text>
            <Text variant="bodyLarge">{data.sisa} </Text>
          </View>
        </View>
      }
    />
  }

  return <View style={{
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12
  }}>
    {loading && <ActivityIndicator size={"large"} />}
    {error && <Text>Terjadi Kesalahan : {errorMessage}</Text>}
  </View>
}