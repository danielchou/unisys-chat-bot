<template>
  <q-btn @click="expandAll">全部開啟</q-btn>
  <q-btn>刪除重複資料</q-btn>
  <q-btn>建立新節點</q-btn>
  <q-btn>重新整理知識樹</q-btn>
  <q-page>
    <q-tree ref="treeRef" :nodes="treeData" node-key="url" default-expand-all />
  </q-page>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useKbaseStore } from "../stores/kbaseStore";

export default {
  name: "k-base",
  setup() {
    const store = useKbaseStore();
    const treeData = computed(() => store.kTreeData);
    const treeRef = ref(null);
    const expandAll = () => {
      const tree = treeRef.value;
      tree.expandAll();
    };
    onMounted(async () => {
      await store.getTreeData(); // 初始化数据，等待数据加载完成
    });
    return {
      treeData,
      treeRef,
      expandAll, // 将方法暴露给模板
    };
  },
};
</script>
