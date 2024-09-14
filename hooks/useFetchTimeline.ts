import xhttp from "@/utils/axios.http";
import { AxiosError } from "axios";
import { useCallback, useState } from "react";

export type TimelineType = {
  judul: String
  tanggal: String
  keterangan: String
  isi: String
}

export type TimelineResponseType = {
  perkara_id: String;
  nomor_perkara: String;
  data: TimelineType[]
}

export default function useFetchTimeline() {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [timelineData, setTimelineData] = useState<TimelineResponseType>();
  let abortController: AbortController;

  const startFetchTimeline = useCallback(async (nomorPerkara: string) => {
    abortController = new AbortController();
    setLoading(true);
    setError(false)
    try {
      const fetchRequest = await xhttp.post<TimelineResponseType>("/api/timeline", {
        nomor_perkara: nomorPerkara
      }, { signal: abortController.signal })
      setTimelineData(fetchRequest.data)

    } catch (error: any) {
      setError(true)
      if (error instanceof AxiosError) {
        setErrorMessage(error.response?.data ?? error.message)
      }

      setError(error.message)
    }

    setLoading(false)
  }, [])

  const cancelFetchTimeline = () => {
    if (abortController instanceof AbortController) {
      abortController.abort();
    }
  }


  return {
    loading,
    error,
    errorMessage,
    startFetchTimeline,
    cancelFetchTimeline,
    timelineData
  }

}