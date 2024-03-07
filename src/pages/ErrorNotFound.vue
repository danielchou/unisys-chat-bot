<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>



        <!-- <q-chat-message
        name="AI"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        text-html
        :text="['hey, how are <strong>you</strong>?']"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        name="<span class='text-negative'>Jane (trusted name but untrusted text)</span>"
        name-html
        text-html
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[
          'doing fine, how r you?',
          'I just feel like typing a really, really, <strong>REALLY</strong> long message to annoy you...'
        ]"
        size="6"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name="<span class='text-negative'>Jao (trusted)</span>"
        name-html
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['<strong>Did it work?</strong>']"
        text-html
        stamp="1 minutes ago"
        size="8"
        text-color="white"
        bg-color="primary"
      />
      <q-chat-message
        name="<span class='text-negative'>Daniel (trusted)</span>"
        name-html
        text-html
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="[
          'hahaha?',
          '奇怪 我怎找不到那個檔案??...'
        ]"
        size="6"
        stamp="4 minutes ago"
        text-color="white"
        
        bg-color="primary"
      />
      <q-chat-message
        name="AI"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="['怎會沒有? 你在桌子下面找找看...']"
        text-html
        stamp="1 minutes ago"
        sent
        bg-color="amber-7"
      /> -->
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
