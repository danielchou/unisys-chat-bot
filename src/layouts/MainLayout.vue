<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="custom-header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Unisys
        </q-toolbar-title>

        <div>UnisysChatBot v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          後台知識管理區
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: '優利AI智能小幫手',
    caption: 'unisys chat bot',
    icon: 'chat',
    link: '/#/chatbot'
  },  
  {
    title: '文件知識補充區',
    caption: 'RAG',
    icon: 'school',
    link: '/#/RAG'
  },
  {
    title: '資料彙整系統',
    caption: 'vector DB、report system',
    icon: 'school',
    link: '/CleanData'
  },
  {
    title: '資料校正、分析、LOG紀錄',
    caption: '資料反饋區',
    icon: 'code',
    link: 'LOG'
  },
  {
    title: '系統設定',
    caption: '前端功能快速設定',
    icon: 'settings',
    link: '/#/Settings'
  },
  
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style scoped>
.custom-header {
  background-color: #003134;
}
</style>