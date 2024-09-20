import { useState } from "react";
import { View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { Avatar, Button, Card, Dialog, Divider, Icon, Portal, Text } from "react-native-paper";

export default function PersyaratanCard() {
  const [modal, setModal] = useState(false)
  return (
    <Card mode="contained">
      <Card.Title
        title="Persyaratan Pendaftaran Perkara"
        left={(props) => <Avatar.Icon {...props} icon="file-document-edit" />}
      />
      <Card.Content>
        <Text variant="bodySmall">Sebelum memulai pendaftara, Silahklan lihat persyaratan pendaftaran disini.</Text>
        <Button style={{ margin: 12 }} onPress={() => setModal(true)} icon={"eye"} mode="elevated">Lihat Persyaratan</Button>
      </Card.Content>
      <Portal>
        <Dialog visible={modal} onDismiss={() => setModal(false)}>
          <GestureHandlerRootView>
            <View style={{ flexDirection: "row", marginHorizontal: 25 }}>
              <View style={{ flex: 1 }} />
              <Button mode="text" onPress={() => setModal(false)}>
                <Icon source={"close"} size={20} />
              </Button>
            </View>
            <Dialog.ScrollArea>
              <ScrollView contentContainerStyle={{ paddingHorizontal: 6 }}>
                <Text variant="titleSmall">Persyaratan Pendaftaran Cerai</Text>
                <Text variant="bodySmall">{'\u2B24'} Cerai Gugat/Talak dapat diajukan apabila suami-isteri telah pisah tempat tinggal selama 6 bulan berturut-turut, kecuali terjadi KDRT dengan syarat melampirkan hasil visum;
                </Text>
                <Text variant="bodySmall">{'\u2B24'}Surat Gugatan (rangkap 5) yang ditujukan kepada Ketua Pengadilan Agama Jakarta Utara. Apabila dibuat sendiri (Softcopy harus diserahkan pada saat pendaftaran dalam flashdisk/CD/email). Surat Gugatan dapat dibuat di POSBAKUM (Pos Bantuan Hukum) yang tersedia di Pengadilan secara gratis;
                </Text>
                <Text variant="bodySmall">{'\u2B24'}Fotokopi 1 lembar KTP Penggugat/Pemohon yang memuat bagian depan dan belakang KTP, dengan posisi atas-bawah pada 1 kertas A4, tidak boleh dipotong;
                </Text>
                <Text variant="bodySmall">{'\u2B24'}Asli Buku Nikah/Duplikat Kutipan Akta Nikah beserta fotokopi Buku Nikah Pemohon 1 rangkap yang dimateraikan Rp. 10.000,- dan dicap leges di kantor pos.
                </Text>
                <Text variant="bodySmall">{'\u2B24'}Apabila terdapat perbedaan identitas (nama) antara KTP dengan Buku Nikah, maka harus melampirkan surat keterangan dari kelurahan yang menerangkan bahwa pemilik identitas KTP dan Buku Nikah tersebut adalah orang yang sama.
                </Text>
                <Text variant="bodySmall">{'\u2B24'}Fotokopi 1 lembar Kartu Keluarga Pemohon;
                </Text>
                <Text variant="bodySmall">{'\u2B24'}Surat Keterangan Lurah setempat, apabila Suami/Istri Ghoib atau tidak diketahui alamatnya yang pasti. Wajib mencantumkan waktu ghoib sejak kapan.
                </Text>
                <Text variant="bodySmall">{'\u2B24'}Surat Ijin Atasan (bagi PNS/TNI/POLRI/BUMN);
                </Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Surat Keterangan Domisili dari Kelurahan, dalam hal apabila alamat domisili dan KTP berbeda;
                </Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Akta kelahiran anak, Apabila ada anak yang masih dibawah umur.
                </Text>
                <Divider style={{ margin: 12 }} />
                <Text variant="titleSmall">Persyaratan Pendaftaran Dispensasi Nikah</Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Surat Permohonan (rangkap 5) yang ditujukan kepada Ketua Pengadilan Agama Jakarta Utara. Apabila dibuat sendiri (Softcopy harus diserahkan pada saat pendaftaran dalam flashdisk/CD/email). Surat Permohonan dapat dibuat di POSBAKUM (Pos Bantuan Hukum) yang tersedia di Pengadilan secara gratis;
                </Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Fotokopi 1 lembar KTP Para Pemohon (sebagai orang tua) dan calon besan yang memuat bagian depan dan belakang KTP, dengan posisi atas-bawah pada 1 kertas A4, tidak boleh dipotong;
                </Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Fotokopi 1 lembar KTP anak dan calon yang memuat bagian depan dan belakang KTP, dengan posisi atas-bawah pada 1 kertas A4, tidak boleh dipotong;
                </Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Fotokopi 1 rangkap Buku Nikah orang tua (Pemohon), bermaterai Rp. 10.000,- dan dicap leges di kantor pos.
                </Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Fotokopi ijazah terakhir anak dan calon, masing-masing 1 rangkap;
                </Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Fotokopi 1 lembar akta kelahiran anak dan calon, bermaterai Rp 10.000,- dan dicap leges di kantor pos;
                </Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Fotokopi 1 lembar Kartu Keluarga orangtua (Pemohon);
                </Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Surat Keterangan Domisili dari Kelurahan, dalam hal alamat domisili dan KTP berbeda;
                </Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Surat asli serta fotokopi, penolakan dari KUA.
                </Text>
                <Divider style={{ margin: 12 }} />
                <Text variant="titleSmall">Isbat NIkah</Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Surat Permohonan (rangkat 5) yang ditujukan kepada Ketua Pengadilan Agama Jakarta Utara. Apabila dibuat sendiri (Softcopy HARUS diserahkan pada saat pendaftaran dalam flashdisk/CD/diemail). Surat Permohonan dapat dibuat di POSBAKUM (Pos Bantuan Hukum) yang tersedia di Pengadilan secara gratis;
                </Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Fotokopi 1 lembar Kartu Keluarga;
                </Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Fotokopi 1 lembar KTP Suami-Isteri Pemohon yang memuat bagian depan dan belakang KTP, dengan posisi atas-bawah pada 1 kertas A4, tidak boleh dipotong.
                </Text>
                <Text variant="bodySmall">{'\u2B24'}
                  Surat Keterangan dari kelurahan status suami atau isteri sebelum menikah. Apabila duda/janda, disertai dengan melampirkan Akta Cerai.
                </Text>
                <Text variant="bodySmall">
                  Surat Keterangan KUA setempat menerangkan bahwa pernikahannya tidak tercatat di Register KUA setempat.
                </Text>
                <Text variant="bodySmall">
                  Apabila pernikahan yang disahkan adalah pernikahan orang tua yang sudah meninggal (isbat nikah contentious), maka membawa Akta Kematian orang tua dan Akta Kelahiran Pemohon.
                </Text>
                <Text variant="bodySmall">
                  Surat Keterangan Domisili dari Kelurahan, dalam hal alamat domisili dan KTP berbeda;
                </Text>
              </ScrollView>
            </Dialog.ScrollArea>
          </GestureHandlerRootView>
        </Dialog>
      </Portal>
    </Card>
  )
}