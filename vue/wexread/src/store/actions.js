import * as types from './mutationTypes'
import { searchWords, hotRecom, special, commentList } from '../api/getData'

export default {
  
  addSearchWords ({ commit }) {
    searchWords()
      .then(res => {
        const searchWords = res.data.searchWords
        commit(types.SET_SEARCH_WORDS, searchWords)        
      })
  },

  addHotRecom ({ commit }) {
    hotRecom()
      .then(res => {
        const hotRecom = res.data.hotRecom
        commit(types.SET_HOT_RECOM, hotRecom)
      })
  },

  addSpecial ({ commit }) {
    special()
      .then(res => {
        const special = res.data.special
        commit(types.SET_SPECIAL, special)        
      })
  },

  addCommentList ({ commit }) {
    commentList()
      .then(res => {
        const commentList = res.data.commentList
        commit(types.SET_COMMENT_LIST, commentList)        
      })
  },

  addSearchHistory ({ commit }, content) {
    commit(types.ADD_SEARCH_HISTORY, content)
  },

  searchSomething({ state,commit }, inputContent) {
    if (inputContent[ Object.keys(inputContent)[0] ] && inputContent) {
      const keys = []
      var tag = ''
      const tempItem = state.allBooks.filter((book) => {
        if (typeof inputContent === 'object') {
          var content = inputContent.tag
          tag = content
        } else {
          var content = inputContent
        }
        const regex = new RegExp(content, 'gi')
        if (book.name.match(regex)) {
          keys.push('name')
          return true
        } else if (book.author.match(regex)) {
          keys.push('author')
          return true
        }
        return false
      })
    const data = {keys, tempItem, tag}
      if (keys.length) {
        commit(types.ADD_TEMP_HISTORY, data)      
      } else {
        state.tempHistoryState = '暂无搜索结果'
      }
    } else {
      state.tempHistory = [];
      state.tempHistoryState = ''
    }
  }
}