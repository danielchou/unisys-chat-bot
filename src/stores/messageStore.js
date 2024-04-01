import { defineStore } from "pinia";

export const useMessageStore = defineStore("chatData", {
  state: () => ({
    counter: 0,
    initMessage: {
      name: "AI",
      text: [
        "您好！我是智能好邦手，很高興為您服務，請簡單描述您的問題，我會協助為您解答。",
      ],
      func: `<div class='func-container'>
      <div class="func">
        <div class="f-title">信用卡熱門查詢</div>
        <ul>
          <li><a href='#' target='_blank'>申請進度</a></li>
          <li><a href='#' target='_blank'>臨時額度調整</a></li>
          <li><a href='#' target='_blank'>永久額度調整</a></li>
        </ul>
      </div>
      <div class="func">
        <div class="f-title">信用卡熱門服務</div>
        <ul>
          <li><a href='#' target='_blank'>機場接送</a></li>
          <li><a href='#' target='_blank'>機場停車</a></li>
          <li><a href='#' target='_blank'>市區停車</a></li>
        </ul>
      </div>
      <div class="func">
        <div class="f-title">數位存款</div>
        <ul>
          <li><a href='#' target='_blank'>數位專案優惠</a></li>
          <li><a href='#' target='_blank'>數位帳戶開戶查詢</a></li>
          <li><a href='#' target='_blank'>數位金融卡忘記密碼</a></li>
        </ul>
      </div>
    </div>`,
      stamp: new Date(),
    },
    messages: [],
    newMessage: {
      name: "",
      text: "",
      func: "",
      stamp: "",
    },
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    sendMessageByAI(text) {
      let msg = { name: "AI", text: [text], func: "", stamp: new Date() };
      this.messages.push(msg);
    },
    sendMessage(name, text) {
      let msg = { name: name, text: [text], func: "", stamp: new Date() };
      this.messages.push(msg);
    },
    aiResponsCore(msg) {
      const AiMsgs = [
        { c: "hi", ai: "hi" },
        { c: "早", ai: "早安阿!" },
        { c: "你是誰", ai: "我是優利智能機器人!" },
        { c: "你好", ai: "你好阿!" },
        { c: "現在天氣", ai: "今天天氣非常好唷!" },
        { c: "你好", ai: "你好!" },
        { c: "現在時間?", ai: `現在時間是${new Date()}` },
        { c: "問題?", ai: `不好意思由於我尚未接上LLM，還無法回答問題` },
        { c: "func1", ai: `??` },
      ];
      const txt =
        AiMsgs.find((x) => x.c.indexOf(msg) >= 0)?.ai ||
        "不好意思，我無法理解你的問題。";
      this.sendMessageByAI(txt);
    },
  },
});

export function setupDataStore() {
  const store = useMessageStore();
  // 初始加载数据
  return store;
}
