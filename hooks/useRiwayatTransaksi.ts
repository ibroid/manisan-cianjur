import xhttp from "@/utils/axios.http";
import { AxiosError } from "axios";
import { useCallback, useState } from "react";

export type TransaksiType = {
  jenis_transaksi: String;
  tanggal: String;
  keperluan: String;
  jumlah: String;
}

export type RiwayatTransaksiResponseType = {
  daftar_transaksi: TransaksiType[],
  total_masuk: String;
  total_keluar: String;
  sisa: String;
}

export default function useRiwayatTransaksi() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<String>("");
  let abortController: AbortController;

  const [data, setData] = useState<RiwayatTransaksiResponseType>()

  const fetchRiwayatPerkara = useCallback(async (perkara_id: String) => {
    abortController = new AbortController()
    setError(false)
    setLoading(true)

    try {
      const xresponse = await xhttp.post<RiwayatTransaksiResponseType>("/api/riwayat_transaksi", {
        perkara_id
      }, { signal: abortController.signal })

      setData(xresponse.data);
    } catch (error: any) {
      setError(true)
      if (error instanceof AxiosError) {
        setErrorMessage(error.response?.data ?? error.message)
      }

      setError(error.message)
    }

    setLoading(false)
  }, [])

  function cancelFetchRiwayatPerkara() {
    if (abortController) {
      abortController.abort()
    }
  }

  return {
    loading,
    error,
    errorMessage,
    fetchRiwayatPerkara,
    cancelFetchRiwayatPerkara,
    data
  }
}