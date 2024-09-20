import useFindMyPerkara from "@/hooks/useFindMyPerkara";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View } from "react-native";
import { ActivityIndicator, Avatar, Button, Card, Text, TextInput } from "react-native-paper";

export default function FindMyPerkaraCard() {
  const { startFetch, cancelFetch, loading, error, errorMessage, data } = useFindMyPerkara()
  const [nik, setNik] = useState<string>("")

  return (
    <Card mode="contained" style={{ marginBottom: 12 }}>
      <Card.Title
        title="Lupa Nomor Perkara ?"
        left={(props) => <Avatar.Icon {...props} icon="account" />}
      />
      <Card.Content >
        <Text variant={"bodySmall"}>Temukan nomor perkara anda menggunakan Nomor Induk Kependudukan disini.</Text>
        <TextInput
          mode={"outlined"}
          placeholder="Contoh : 32xxxxx"
          label={"NIK"}
          value={nik}
          onChangeText={(text) => setNik(text)}
          style={{ height: 40, marginVertical: 8 }}
        />
        <Button
          icon={"magnify"}
          mode={"contained"}
          style={{
            margin: 10,
            width: "50%",
            alignSelf: "center"
          }}
          compact
          disabled={loading}
          onPress={() => {
            if (nik.length > 0) {
              startFetch(nik)
            }
          }}
        >
          {loading ?
            <ActivityIndicator color="#fff" />
            : "Cari"
          }
        </Button>
        {
          error && <Text variant="bodySmall">{errorMessage}</Text>
        }
        {
          data &&
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text variant="titleSmall">Perkara Ditemukan</Text>
            <Text variant="titleMedium">{data?.nomor_perkara}</Text>
            <Text variant="bodySmall">{data?.pihak_p}</Text>
            <Text variant="bodySmall">Dan/Melawan</Text>
            <Text variant="bodySmall">{data?.pihak_t}</Text>
          </View>
        }
      </Card.Content>
    </Card>
  )
}