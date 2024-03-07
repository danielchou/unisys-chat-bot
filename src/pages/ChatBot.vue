<template>
  <div class="row justify-center">
    <div id="msg-container">
      <div id="msg-body" style="width:100%; padding:0" >
        <div style="width:100%"  v-for="(msg, index) in messages" :key="index">
          <template v-if="msg.name === 'AI'">
            <q-chat-message
              avatar="icons/ai_avator.jpg"
              :stamp="formatTime(msg.stamp)"
              text-color="white"
              bg-color="teal-6"
            >
            <div>{{ msg.text[0] }}</div>
            <div class="content" v-html="msg.func"></div>
            </q-chat-message>
          </template>
          <template v-else>
            <q-chat-message
              avatar="https://cdn.quasar.dev/img/avatar4.jpg"
              :text="msg.text"
              :stamp="formatTime(msg.stamp)"
              sent
              bg-color="cyan-2"
            />
          </template>
        </div>
      </div>
    </div>
    <div id="msg-send">
      <q-input outlined bottom-slots v-model="currText" label="請輸入您的問題" counter maxlength="200">
        <template v-slot:before>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </template>

        <template v-slot:append>
          <q-icon v-if="currText !== ''" name="close" @click="currText =''" class="cursor-pointer" />
          <q-icon name="schedule" />
        </template>

        <template v-slot:hint>
          請輸入您要詢問的問題...
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" @click ="onClickMessage()" />
        </template>
      </q-input>
    </div>
  </div>
  
</template>

<script>
import { ref, computed, onMounted, nextTick } from 'vue';
import { useMessageStore } from '../stores/messageStore';
import dayjs from 'dayjs';

export default {
  name: 'chat-bot',
  setup() {
    const currText = ref();

    const splitter = 0.5;
    const store = useMessageStore();
    const messages = computed(() => store.messages);
    const formatTime = (date) => {
      return dayjs(date).format('MM-DD HH:mm');
    }
    const onClickMessage = () => {
      store.sendMessage('daniel', currText.value);
      store.aiResponsCore(currText.value);
      currText.value = '';
      nextTick(() => {
        const bottomElement = document.getElementById('msg-body');
        bottomElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
      });
    };
    onMounted(() => {
      console.log('dayjs',formatTime(new Date()))
      currText.value= '';
      messages.value.push(store.initMessage);
    });
    return {
      splitter,
      currText,
      messages,
      formatTime,
      onClickMessage,
    };
  },
}
</script>

<style scoped>
.q-splitter__content {
  display: flex;
  flex-direction: column;
}

.q-splitter__resize-proxy {
  display: none;
}

/* 設定對話框底部固定 */
.q-page {
  position: relative;
}

#msg-container {
  width: 100%;
  height: calc(100vh - 160px);
  overflow-y: scroll;
  padding: 5px;
}

#msg-send {
  width: 98%; border-top: solid 2px #aaa; padding: 10px; position:absolute; bottom: 10px; right:10px;
}

.content :deep()
  .func-container {
    display: block;
    background-color: #eee;
    width:100%;
    margin: 5px;
    padding: 10px;
    float: left;
  }
.content :deep()
  .func {
    float: left;
    border:solid 1px #888;
    width: 145px;
    background-color: #fff;
    text-align: center;
    font-size:16px;
    color:#555;
    margin:10px; 
    padding:0;
    border-radius: 5px;
  }
.content :deep()
  .func .f-title {
    background-color: green;
    text-align: center;
    font-size:15px;
    color:#fff;
    margin: 0 0 10px;
    padding: 10px 0;
    width :100%;

  }
.content :deep()
  .func ul {
    float: left;
    background-color: #fff;
    color:#555;
    list-style: none;
    width:100%;
    border: 0px solid #000;
    padding: 0;
  }
.content :deep()
  .func ul li {
    float: left;
    cursor: pointer;
    background-color: #fff;
    text-align: left;
    font-size:13px;
    color:#555;
    border-top: solid 1px #ccc;
    width:100%;
    padding:8px;
    
  }


/* 頁面底部的占位符 */
div[ref="bottom"] {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
