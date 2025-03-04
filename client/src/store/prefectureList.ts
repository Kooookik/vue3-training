// eslint-disable-next-line import/order
import { Prefecture, PrefectureDisplay } from "@/types/prefecture"
import { defineStore } from "pinia"
import { ref } from "vue"
import axiosInstance from "../utils/axiosSettings"
export const usePrefectureStore = defineStore("prefectureList", () => {
  // TODO: Storeの中身を書くこと
  const prefectureList = ref<PrefectureDisplay[]>([])

  // 人口の取得
  async function fetchPrefectureList() {
    const res = await axiosInstance.get("/prefectures")
    prefectureList.value = res.data.result.map((x: Prefecture) => ({
      ...x,
      isCheck: false
    }))
  }
  // チェックの値を変更する
  function checkPrefecture(prefCode: number, value: boolean) {
    prefectureList.value = prefectureList.value.map(
      (prefecture: PrefectureDisplay) => {
        if (prefecture.prefCode === prefCode) {
          prefecture.isCheck = value
        }
        return prefecture
      }
    )
  }
  return {
    fetchPrefectureList,
    prefectureList,
    checkPrefecture
  }
})
