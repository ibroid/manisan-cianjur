import xhttp from "@/utils/axios.http";
import { AxiosError } from "axios";
import { useCallback, useState } from "react";

export type MyPerkaraResponseType = {
  nomor_perkara: String;
  pihak_p: String;
  pihak_t: String
};

export default function useFindMyPerkara() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [data, setData] = useState<MyPerkaraResponseType | null>(null);
  let abortController: AbortController;

  const startFetch = useCallback(async (nik: String) => {
    abortController = new AbortController();
    setLoading(true);
    setError(false);
    setData(null)
    try {
      const fetchRequest = await xhttp.post<MyPerkaraResponseType>('api/find_my_perkara', { nik }, { signal: abortController.signal });
      setData(fetchRequest.data);
      console.log(fetchRequest.data)
    } catch (error: any) {
      setError(true);
      if (error instanceof AxiosError) {
        setErrorMessage(error.response?.data ?? error.message);
      }
      setError(error.message);
    }
    setLoading(false);
  }, []);

  const cancelFetch = () => {
    if (abortController instanceof AbortController) {
      abortController.abort();
    }
  };

  return {
    loading,
    error,
    errorMessage,
    startFetch,
    cancelFetch,
    data
  };
}