import * as types from './mutationTypes'

export default {
  [types.SET_SEARCH_WORDS] (state, searchWords) {
    state.searchWords = searchWords
  },

  [types.SET_HOT_RECOM] (state, hotRecom) {
    state.hotRecom = hotRecom;
    state.allBooks.push(...hotRecom)
  },

  [types.SET_COMMENT_LIST] (state, commentList) {
    state.commentList = commentList
  },

  [types.SET_SPECIAL] (state, special) {
    state.allBooks.push(...special)
    state.special.push(...special)
  },

  [types.ADD_SEARCH_HISTORY] (state, content) {
    console.log(content)
    if (state.searchHistory.indexOf(content) === -1) {
      if (content) {
        state.searchHistory.push(content);
      }
      console.log(content)
      console.log('历史记录'+state.searchHistory)
    }
    console.log(state.searchHistory)
  },

  [types.ADD_TEMP_HISTORY] (state, data) {
    var keys = data.keys;
    var tempItem = data.tempItem
    var tag = data.tag
    state.tempHistory = tempItem.map((item, index) => {
      var key = keys[index]
      console.log(key)
      if (tag) {
        return item
      } else {
        return {
          [key]: item[key],
          isbn: item.isbn,
          text: '手动输入搜索内容'
        }
      }
    })
    console.log(state.tempHistory)
  },

  [types.CLEAR_SEARCH_HISTORY] (state) {
    state.searchHistory = []
  }
}