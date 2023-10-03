<script lang="ts" setup>
import { computed, onMounted, ref } from "vue"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PrefectureResponse } from "@/types/api"
import { PrefectureDisplay } from "@/types/prefecture"
import axiosInstance from "@/utils/axiosSettings"
import PrefectureCheck from "./PrefectureCheck.vue"
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

const prefectures = ref<PrefectureDisplay[]>([
  // { prefCode: 11, prefName: "埼玉県", isCheck: false },
  // { prefCode: 12, prefName: "千葉県", isCheck: false },
  // { prefCode: 13, prefName: "東京都", isCheck: false },
  // { prefCode: 14, prefName: "神奈川県", isCheck: false }
])

// const prefecture_isCheck = computed(() => {
//   return prefectures.value.filter((x) => x.isCheck)
// })

// eslint-disable-next-line camelcase
const prefecture_Checked = computed({
  get: () =>
    prefectures.value.filter(function (value) {
      return value.isCheck
    }),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  set: () => {}
})

onMounted(async () => {
  // TODO: 全県取得のAPIへリクエストを送ってみましょう!
  const response = await axiosInstance.get<PrefectureResponse>("/prefectures")
  prefectures.value = response.data.result.map((x) => ({
    ...x,
    isCheck: false
  }))
})

function handleCheck(pref: PrefectureDisplay) {}
</script>

<template>
  <div class="prefecture-container">
    <h3>都道府県</h3>
    <div class="prefecture-flex">
      <!-- TODO: 県を表示してみましょう -->
      <div v-for="prefecture in prefectures" :key="prefecture.prefCode">
        <!-- <input v-model="prefecture.isCheck" type="checkbox" /> -->
        <PrefectureCheck
          v-if="prefectures.length > 0"
          :prefecture="prefecture"
          @check="handleCheck"
        ></PrefectureCheck>
      </div>
    </div>
    <div>
      <div v-for="pref in prefecture_Checked" :key="pref.prefCode">
        {{ pref.prefName }}
      </div>
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
  grid-template-columns: 33% 33% 33%;
  /* grid-template-columns: 25% 25% 25% 25%; */
}
</style>
