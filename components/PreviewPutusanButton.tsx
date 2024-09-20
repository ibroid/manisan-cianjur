import { MainContext } from "@/context/MainProvider"
import usePreviewPutusan from "@/hooks/usePreviewPutusan"
import { canOpenURL, openURL } from "expo-linking"
import { useCallback, useContext, useEffect } from "react"
import { Button } from "react-native-paper"

type PreviewPutusanButtonProps = {
  perkara_id: String
}
export default function PreviewPutusanButton({ perkara_id }: PreviewPutusanButtonProps) {
  const { destate } = useContext(MainContext)

  const { fetchDirput, cancelFetchDirput, data, loading, error, errorMessage } = usePreviewPutusan()

  const openDirputUrl = useCallback(async () => {
    if (data !== undefined) {
      const canOpen = await canOpenURL(data?.link_dirput)

      if (canOpen) {
        openURL(data?.link_dirput)
      }
    }
  }, [data])

  useEffect(() => {
    if (error) {
      destate({
        type: "SNACKBAR",
        payload: {
          show: true,
          message: errorMessage
        }
      })
    }

    if (!loading && data !== undefined) {
      openDirputUrl()
    }

    // return () => cancelFetchDirput()
  }, [loading, error])

  return (
    <Button
      disabled={loading}
      onPress={() => fetchDirput(perkara_id)}
      icon={"certificate"}
    >Lihat Putusan</Button>
  )
}