import xhttp from "@/utils/axios.http";
import { isAxiosError } from "axios";
import { useCallback, useState } from "react";

interface PreviewPutusanResponseType {
  id: number;
  perkara_id: number;
  dokumen_ref_id: number;
  filename: string;
  path_filename: string;
  created_by: string;
  created_date: string;
  updated_by: string;
  updated_date: string;
  pihak_detil_id: number;
  keterangan: null;
  flag_sync: null;
  pengajuan_id: number;
  published: number;
  link_dirput: string;
}

export default function usePreviewPutusan() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  let abortController: AbortController;

  const [data, setData] = useState<PreviewPutusanResponseType>()

  const fetchDirput = useCallback(async (perkara_id: String) => {
    setError(false);
    setLoading(true)

    abortController = new AbortController()
    try {
      const xresponse = await xhttp.post<PreviewPutusanResponseType>("/api/preview_putusan", {
        perkara_id
      }, {
        signal: abortController.signal
      })

      setData(xresponse.data)

    } catch (error: any) {
      if (isAxiosError(error)) {
        setErrorMessage(error.message || error.response?.data.message);
      } else {
        setErrorMessage(error.message)
      }
      setError(true);
    }

    setLoading(false);
  }, []);

  function cancelFetchDirput() {
    if (abortController) {
      abortController.abort()
    }
  }

  return {
    loading,
    error,
    errorMessage,
    data,
    fetchDirput,
    cancelFetchDirput
  }
}