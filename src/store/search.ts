import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useSearchStore = defineStore({
  id: "search",
  state: () => {
    return {
      // 进行搜索的类型
      searchType: useLocalStorage("searchType", "works", localStorage),
      // 搜索框的文本
      searchInputText: useLocalStorage("searchInputText", "", localStorage),
      // 搜索历史
      historyList: useLocalStorage("historyList", [], localStorage),
      // 搜索结果排序类型
      sortType: useLocalStorage("sortType", "Relevance", localStorage),
    }
  },
  actions: {
    /** 改变当前搜索框的搜索类型 */
    setSearchType(newSearchType) {
      this.searchType = newSearchType;
    },

    /** 改变当前搜索框的文本 */
    setSearchInputText(newSearchInputText) {
      this.searchInputText = newSearchInputText;
    },

    /** 设置历史记录 */
    setSearchHistory(newSearchHistoryArray) {
      this.historyList = newSearchHistoryArray;
    },

    /** 新增单条历史记录 */
    addHistory(newHistory) {
      const index = this.historyList.findIndex(
        (item) => item === newHistory
      );
      // 剔除旧数据
      if (index !== -1) {
        this.historyList.splice(index, 1);
      }
      // 新增记录
      this.historyList.unshift(newHistory);
      // 将新的历史记录更新至后端
      Search.postSearchHistory({
        "history_list": this.historyList
      });
    },

    /** 删除单个历史 */
    deleteHistory(index) {
			this.historyList.splice(index, 1);
      // 将新的历史记录更新至后端
      Search.postSearchHistory({
        "history_list": this.historyList
      });
		},

    /** 删除全部历史 */
    deleteAllHistory() {
			this.historyList = [];
      // 将新的历史记录更新至后端
      Search.postSearchHistory({
        "history_list": this.historyList
      });
		},

    /** 改变排序类型 */
    setSortType(newSortType) {
      this.sortType = newSortType;
    }
  }
})