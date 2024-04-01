import ChatBot from "../pages/ChatBot.vue";
import KBase from "../pages/KBase.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/chatbot",
    name: "chat-bot",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: ChatBot }],
  },
  {
    path: "/kbase",
    name: "k-base",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: KBase }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
