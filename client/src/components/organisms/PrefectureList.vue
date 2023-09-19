<script lang="ts" setup>
import { PrefectureDisplay } from "@/types/prefecture"
import axiosInstance from "@/utils/axiosSettings"
import { onMounted, ref } from "vue"
// TODO: prefectureで千葉県を表示してみましょう
// eslint-disable-next-line camelcase
const prefecture_12 = ref<PrefectureDisplay>({
  prefCode: 12,
  prefName: "千葉県",
  isCheck: true
})

// eslint-disable-next-line camelcase
const prefecture_13 = ref<PrefectureDisplay>({
  prefCode: 13,
  prefName: "東京都",
  isCheck: true
})

// eslint-disable-next-line camelcase
const prefecture_14 = ref<PrefectureDisplay>({
  prefCode: 14,
  prefName: "神奈川県",
  isCheck: true
})

// function check(bool: boolean) {
//   prefecture.value.isCheck = bool
// }

onMounted(() => {
  // TODO: 全県取得のAPIへリクエストを送ってみましょう!
  const response = axiosInstance.get("")
})
</script>
<template>
  <div class="prefecture-container">
    <h3>都道府県</h3>
    <div class="prefecture-flex">
      <!-- TODO: 県を表示してみましょう -->
      {{ prefecture_12.prefName }}
      <input v-model="prefecture_12.isCheck" type="checkbox" />
      <!-- @change="check(!prefecture.isCheck)" v-model使えばこれいらない-->
      <span v-if="prefecture_12.isCheck">true</span>
      <span v-else>false</span>
    </div>
    <div class="prefecture-flex">
      {{ prefecture_13.prefName }}
      <input v-model="prefecture_13.isCheck" type="checkbox" />
    </div>
    <div class="prefecture-flex">
      {{ prefecture_14.prefName }}
      <input v-model="prefecture_14.isCheck" type="checkbox" />
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
}
</style>
