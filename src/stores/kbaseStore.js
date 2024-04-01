import { defineStore } from "pinia";
import rawData from "./kbase/2023stocksandETF.json";

export const useKbaseStore = defineStore("kbaseData", {
  state: () => ({
    kTreeData: [], //知識樹的初始資料
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    getTreeData() {
      // 將原始資料轉換為以url作為鍵的物件
      const urlMap = {};
      rawData.forEach((item) => {
        urlMap[item.url] = item;
      });

      // 建立以url作為鍵的父節點映射
      const parentMap = {};
      rawData.forEach((item) => {
        parentMap[item.url] = item.parent_url;
      });

      // 建立樹狀結構資料
      const treeData = [];
      rawData.forEach((item) => {
        const parentUrl = item.parent_url;
        if (parentUrl === "No Parent URL" || !parentMap[parentUrl]) {
          treeData.push(item);
          // treeData.push({ ...item, label: item.title }); // 修改此行
        } else {
          const parentItem = urlMap[parentUrl];
          if (!parentItem.children) {
            parentItem.children = [];
          }
          parentItem.children.push(item);
          // parentItem.children.push({ ...item, label: item.title }); // 修改此行
        }
      });
      this.kTreeData = treeData;
    },
  },
});

export function setupDataStore() {
  const store = useKbaseStore();
  // 初始加载数据
  return store;
}
