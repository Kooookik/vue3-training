<script lang="ts" setup>
import { onMounted } from "vue"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PrefectureDisplay } from "@/types/prefecture"
// eslint-disable-next-line import/order
import PrefectureCheck from "./PrefectureCheck.vue"
// eslint-disable-next-line import/order
import { usePopulationStore } from "@/store/population"
import { usePrefectureStore } from "@/store/prefectureList"
// TODO: prefectureで千葉県を表示してみましょう
// eslint-disable-next-line camelcase
// const prefecture_12 = ref<PrefectureDisplay[]>({
//   prefCode: 12,
//   prefName: "千葉県",
//   isCheck: true
// })

// // eslint-disable-next-line camelcase
// const prefecture_13 = ref<PrefectureDisplay>({
//   prefCode: 13,
//   prefName: "東京都",
//   isCheck: true
// })

// // eslint-disable-next-line camelcase
// const prefecture_14 = ref<PrefectureDisplay>({
//   prefCode: 14,
//   prefName: "神奈川県",
//   isCheck: true
// })

// const prefectureList = ref<PrefectureDisplay[]>([
//   // { prefCode: 11, prefName: "埼玉県", isCheck: false },
//   // { prefCode: 12, prefName: "千葉県", isCheck: false },
//   // { prefCode: 13, prefName: "東京都", isCheck: false },
//   // { prefCode: 14, prefName: "神奈川県", isCheck: false }
// ])

const prefectureStore = usePrefectureStore()
const populationStore = usePopulationStore()

// const prefecture_isCheck = computed(() => {
//   return  prefectureList.value.filter((x) => x.isCheck)
// })

// eslint-disable-next-line camelcase
// const prefecture_Checked = computed({
//   get: () =>
//     prefectureStore.prefectureList.filter(function (value) {
//       return value.isCheck
//     }),
//   // eslint-disable-next-line @typescript-eslint/no-empty-function
//   set: () => {}
// })

// onMounted(async () => {
//   // TODO: 全県取得のAPIへリクエストを送ってみましょう!
//   const response = await axiosInstance.get<PrefectureResponse>("/prefectures")
//   prefectureStore.prefectureList = response.data.result.map((x) => ({
//     ...x,
//     isCheck: false
//   }))
// })

onMounted(() => {
  prefectureStore.fetchPrefectureList()
})

// function handleCheck(prefecture: PrefectureDisplay) {
//   const index =  prefectureList.value.findIndex(
//     (x) => x.prefCode === prefecture.prefCode
//   )
//   if (index !== -1) {
//      prefectureList.value[index].isCheck = prefecture.isCheck
//   }
// }

// function handleCheck2(prefecture: PrefectureDisplay, index: number) {
//   prefectureStore.prefectureList[index].isCheck = prefecture.isCheck
// }

function handleCheck2(pref: PrefectureDisplay) {
  prefectureStore.checkPrefecture(pref.prefCode, pref.isCheck)
  if (pref.isCheck) populationStore.fetchPopulation(pref)
  else populationStore.disposePopulation(pref)
}
</script>

<template>
  <div class="prefecture-container">
    <h3>都道府県</h3>
    <div class="prefecture-flex">
      <!-- TODO: 県を表示してみましょう -->
      <div v-for="pref in prefectureStore.prefectureList" :key="pref.prefCode">
        <PrefectureCheck
          :prefecture="pref"
          @check="handleCheck2"
        ></PrefectureCheck>
      </div>
    </div>
    <div>
      <!-- <div v-for="pref in prefecture_Checked" :key="pref.prefCode">
        {{ pref.prefName }}
      </div> -->
    </div>
  </div>
</template>
<style scoped>
.prefecture-container {
  max-width: 900px;
  width: 100%;
}

.prefecture-flex {
  display: grid;
  grid-template-columns: 50% 50% 50% 50% 50%;
  /* grid-template-columns: 33% 33% 33%; */
  /* grid-template-columns: 25% 25% 25% 25%; */
}
</style>
