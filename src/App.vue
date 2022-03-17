<template>
  <v-app>
    <!-- ツールバー -->
    <v-app-bar
      app
      color="green"
      dark
    >
      <!-- タイトル -->
      <v-toolbar-title>{{ appName }}</v-toolbar-title>
      <v-spacer/>
      <!-- テーブルアイコンのボタン -->
      <v-btn icon to="/">
        <v-icon>mdi-file-table-outline</v-icon>
      </v-btn>
      <!-- 歯車アイコンのボタン -->
      <v-btn icon to="/settings">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',

  computed: mapState({
    appName: state => state.settings.appName
  }),

  // Appインスタンス生成前に一度だけ実行されます
  beforeCreate () {
    this.$store.dispatch('loadSettings')
  }
}
</script>
