import { Image, StyleSheet, ActivityIndicator, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useCallback, useContext, useMemo, useState } from 'react';
import useFetchTimeline from '@/hooks/useFetchTimeline';
import { Button, Surface, TextInput, Text, Icon, MD3Colors, ProgressBar } from 'react-native-paper';
import Timeline from "react-native-timeline-flatlist";
import { Link, router, useFocusEffect } from 'expo-router';
import usePreviewPutusan from '@/hooks/usePreviewPutusan';
import { MainContext } from '@/context/MainProvider';
import PreviewPutusanButton from '@/components/PreviewPutusanButton';


export default function HomeScreen() {
  const { destate } = useContext(MainContext)
  const thisYear = useMemo(() => {
    return new Date().getFullYear()
  }, [])

  const [nomorPerkara, setNomorPerkara] = useState<string>("")

  const {
    loading,
    error,
    errorMessage,
    startFetchTimeline,
    cancelFetchTimeline,
    timelineData
  } = useFetchTimeline()

  useFocusEffect(
    useCallback(() => {

      return () => {
        cancelFetchTimeline()
      }
    }, [])
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#9AC1FB', dark: '#CCFDDA' }}
      headerImage={
        <Image
          source={require('@/assets/images/banner_beranda.png')}
          style={styles.reactLogo}
          resizeMode="contain"
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Selamat Datang!</ThemedText>
        <HelloWave />

      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Text>Silahkan masukan nomor perkara untuk melihat proses perkara</Text>
        <TextInput
          label="Nomor Perkara"
          placeholder={`Contoh : 123/Pdt.G/${thisYear}/PA.JU`}
          value={nomorPerkara}
          onChangeText={text => setNomorPerkara(text)}
          right={<TextInput.Icon icon="pencil" />}
        />
        <Button
          disabled={loading}
          buttonColor='#9AC1FB'
          mode="contained"
          onPress={() => {
            if (nomorPerkara.length > 0) {
              startFetchTimeline(nomorPerkara)
            }
          }}>
          Cari
        </Button>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Terjadi Kesalahan : {errorMessage}</Text>}
        {
          !loading && !error && timelineData && timelineData.data.length > 0 &&
          <>
            <ThemedText>Proses perkara nomor : {timelineData.nomor_perkara}</ThemedText>
            <Timeline
              style={{
                flex: 1,
                marginTop: 20,
              }}
              isUsingFlatlist={false}
              circleSize={20}
              dotSize={18}
              circleColor='rgba(0,0,0,0)'
              lineColor='rgb(45,156,219)'
              timeContainerStyle={{ minWidth: 52 }}
              timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
              descriptionStyle={{ color: 'gray' }}
              innerCircle={'dot'}
              onEventPress={() => { }}
              dotColor="#FF9797"
              separator={false}
              detailContainerStyle={{ marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#BBDAFF", borderRadius: 10 }}
              columnFormat='two-column'
              data={timelineData.data.map((v, i) => {
                return {
                  time: v.tanggal,
                  title: v.judul,
                  description: v.isi + "\n\n" + v.keterangan,

                }
              })}
            />
            <Surface style={{
              padding: 24,
              height: "auto",
              width: "auto",
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: "#FF9797",
              borderRadius: 12
            }}>
              <View style={{ flexDirection: "row", gap: 6, alignContent: "center", alignItems: "center" }}>
                <Icon
                  source="alert-circle-outline"
                  color={"#fff"}
                  size={20}
                />
                <Text variant="titleMedium" style={{ color: "#fff", textAlign: "justify" }} >
                  Demi melindungi privasi data pribadi dari para pihak. Kami mohon maaf tidak bisa menampilkan data senditif seperti nama, alamat dan lainnya.
                </Text>
              </View>
            </Surface>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

              <Link asChild href={`/transaksi/${timelineData.perkara_id}`}>
                <Button
                  icon={"cash"}
                >
                  Riwayat Transaksi
                </Button>
              </Link>

              <PreviewPutusanButton perkara_id={timelineData.perkara_id} />
            </View>
          </>
        }

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 12,
  },
  reactLogo: {
    width: "90%",
    alignSelf: "center"
  },
});
