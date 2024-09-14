import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Icon } from 'react-native-paper';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Image
        source={require('@/assets/images/gedung.jpg')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 1,
        }}
      />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Pengadilan Agama Cianjur</ThemedText>
      </ThemedView>
      <ThemedText>KOMPAK : Komitmen, Optimal, Mandiri, Profesional, Akuntabel, Konsisten.</ThemedText>
      <Collapsible title="Alamat">
        <ThemedText>
          Jl. Raya Bandung No.45, Sabandar, Kec. Karangtengah, Kabupaten Cianjur, Jawa Barat 43281
        </ThemedText>
      </Collapsible>
      <Collapsible title="Kontak">
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <ThemedText>
            Telepon
          </ThemedText>
          <ThemedText type="defaultSemiBold"> (0263) 261090</ThemedText>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <ThemedText>
            Whatsapp
          </ThemedText>
          <ThemedText type="defaultSemiBold">62877-0065-9000</ThemedText>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <ThemedText>
            Email
          </ThemedText>
          <ThemedText type="defaultSemiBold">pa.cianjur_ptabdg@yahoo.co.id</ThemedText>
        </View>
      </Collapsible>
      <Collapsible title="Social Media">
        <View style={{ flexDirection: "row", gap: 26, alignItems: "center" }}>
          <Icon size={20} source={"web"}></Icon>
          <ThemedText>
            www.pa-cianjur.go.id
          </ThemedText>
        </View>
        <View style={{ flexDirection: "row", gap: 26, alignItems: "center" }}>
          <Icon size={20} source={"instagram"}></Icon>
          <ThemedText>
            www.pa-cianjur.go.id
          </ThemedText>
        </View>
        <View style={{ flexDirection: "row", gap: 26, alignItems: "center" }}>
          <Icon size={20} source={"facebook"}></Icon>
          <ThemedText>
            www.pa-cianjur.go.id
          </ThemedText>
        </View>
        <View style={{ flexDirection: "row", gap: 26, alignItems: "center" }}>
          <Icon size={20} source={"twitter"}></Icon>
          <ThemedText>
            www.pa-cianjur.go.id
          </ThemedText>
        </View>
        <View style={{ flexDirection: "row", gap: 26, alignItems: "center" }}>
          <Icon size={20} source={"youtube"}></Icon>
          <ThemedText>
            www.pa-cianjur.go.id
          </ThemedText>
        </View>
      </Collapsible>
      <Collapsible title="Pengantar Ketua Pengadilan">
        <ThemedText>
          Assalamu'alaikum, Wr. Wb.
        </ThemedText>
        <ThemedText style={{ textAlign: "justify", marginVertical: 12 }}>
          Puji syukur kehadirat Allah SWT, atas rahmat dan hidayah-Nya, sehingga Pengadilan Agama Cianjur telah dapat membuka secara resmi website Pengadilan Agama Cianjur dengan alamat website www.pa-cianjur.go.id

          Kehadiran website Pengadilan Agama Cianjur ini adalah salah satu wujud komitmen kami dalam rangka menunjang keterbukaan informasi bagi masyarakat luas khususnya dan para pencari keadilan diwilayah hukum Pengadilan Agama Cianjur. Keterbukaan informasi menjadi salah satu standarisasi yang harus diaplikasikan oleh semua lembaga. Mudahnya masyarakat mendapatkan informasi menjadi syarat reformasi birokrasi yang harus diterapkan.

          Mahkamah Agung mengeluarkan Surat Keputusan Nomor : 144/KMA/SKIVIII/2007 tentang keterbukaan informasi di Pengadilan, dengan terbitnya undang-undang Nomor 14 Tahun 2008 tentang keterbukaan informasi publik, seiring dengan Komitmen kami Mahkamah Agung telah mengeluarkan SK KMA Nomor : 1-144/KMA/SK/I/2011 tentang pedoman pelayanan informasi di Pengadilan, SK KMA Nomor : 026/KMA/SK/II/2012 tentang standar pelayanan peradilan dan SK KMA Nomor: 2-144/KMA/SK/VIII/2022 tentang Standar Pelayanan Informasi Publik di Pengadilan.

          Disamping sebagai bagian dari transparansi peradilan, website ini juga menjadi salah satu bentuk peningkatan kualitas IT bagi aparat peradilan. Website ini diharapkan dapat menjadikan bahan atau masukkan bagi publik untuk memberikan masukkan dan sebagai umpan balik (feedback) untuk sebuah proses perbaikan yang berkelanjutan.

          Kami senantiasa selalu berusaha menyajikan informasi seobjektif mungkin, akan tetapi kami sadari masih terdapat kekurangan, oleh karena itu, kami mengharapkan koreksi, saran dari semua pihak demi peningkatan kinerja dan kesempurnaan website ini.

          Demikian, website resmi Pengadilan Agama Cianjur ini dengan harapan semoga dapat membantu pengunjung sehingga bermanfaat bagi kita semua.
        </ThemedText>
        <ThemedText>
          Wassalam,

          Ketua Pengadilan Agama Cianjur
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {

  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
