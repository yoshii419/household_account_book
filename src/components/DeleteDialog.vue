<template>
  <!-- 削除ダイアログ -->
  <v-dialog
    v-model="show"
    persistent
    max-width="290"
  >
    <v-card>
      <v-card-title
        class="dialog-title"
      >
        削除確認
      </v-card-title>
      <v-card-text class="black--text mt-1">
        「{{ item.title }}」を削除しますか？
      </v-card-text>
      <v-card-actions>
        <v-btn
          :disabled="loading"
          @click="onClickClose"
        >
          キャンセル
        </v-btn>
        <v-spacer/>
        <v-btn
          color="error"
          :loading="loading"
          @click="onClickDelete"
        >
          削除
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'DeleteDialog',

  data () {
    return {
      /** ダイアログの表示状態 */
      show: false,
      /** 受け取ったデータ */
      item: {}
    }
  },

  computed: mapState({
    /** ローディング状態 */
    loading: state => state.loading.delete
  }),

  methods: {
    ...mapActions([
      /** データ削除 */
      'deleteAbData'
    ]),
    /**
     * ダイアログを表示します。
     * このメソッドは親から呼び出されます。
     */
    open (item) {
      this.show = true
      this.item = item
    },
    /** キャンセルがクリックされたとき */
    onClickClose () {
      this.show = false
    },
    /** 削除がクリックされたとき */
    async onClickDelete () {
      await this.deleteAbData({ item: this.item })
      this.show = false
    }
  }
}
</script>

<style scoped>

.dialog-title {
  background-color: #4CAF50;
  color: white;
}
.v-card__title {
  font-weight: bold !important;
}

</style>
