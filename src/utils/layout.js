import $ from 'webpack-zepto'
// 内容适应布局
export function callPageContentPreviewImageApi (parentDom) {
  // 相对于父级元素
  if (parentDom) {
    $.each($('.previewimage img'), function (i, item) {
      if (item.src && item.src.indexOf('135editor.com') === -1) {
        item.width = parentDom.width() - 20
        item.height = ''
        item.style.width = (parentDom.width() - 20) + 'px'
        item.style.height = 'auto'
        if (item.parentNode && item.parentNode.nodeName === 'P') {
          item.parentNode.style.textIndent = ''
        }
      }
    })
    $.each($('.previewimage embed'), function (i, item) {
      if (item.src && item.src.indexOf('135editor.com') === -1) {
        item.width = parentDom.width() - 20
        item.height = ''
        item.style.width = (parentDom.width() - 20) + 'px'
        item.style.height = 'auto'
        if (item.parentNode && item.parentNode.nodeName === 'P') {
          item.parentNode.style.textIndent = ''
        }
      }
    })
    $.each($('.previewimage video'), function (i, item) {
      if (item.src && item.src.indexOf('135editor.com') === -1) {
        item.width = parentDom.width() - 20
        item.height = ''
        item.style.width = (parentDom.width() - 20) + 'px'
        item.style.height = 'auto'
        if (item.parentNode && item.parentNode.nodeName === 'P') {
          item.parentNode.style.textIndent = ''
        }
      }
    })
    $.each($('.previewimage table'), function (i, item) {
      item.width = parentDom.width() - 20
      item.height = ''
      item.style.width = (parentDom.width() - 20) + 'px'
      item.style.height = 'auto'
      if (item.parentNode && item.parentNode.nodeName === 'P') {
        item.parentNode.style.textIndent = ''
      }
    })
    $.each($('.previewimage p'), function (i, item) {
      item.style.whiteSpace = 'break-word'
      item.style.wordBreak = 'break-all'
    })
  } else {
    // 相对浏览器
    $.each($('.previewimage img'), function (i, item) {
      if (item.src && item.src.indexOf('135editor.com') === -1) {
        item.width = document.documentElement.clientWidth - 20
        item.height = ''
        item.style.width = (document.documentElement.clientWidth - 20) + 'px'
        item.style.height = 'auto'
        if (item.parentNode && item.parentNode.nodeName === 'P') {
          item.parentNode.style.textIndent = ''
        }
      }
    })
    $.each($('.previewimage embed'), function (i, item) {
      if (item.src && item.src.indexOf('135editor.com') === -1) {
        item.width = document.documentElement.clientWidth - 20
        item.height = ''
        item.style.width = (document.documentElement.clientWidth - 20) + 'px'
        item.style.height = 'auto'
        if (item.parentNode && item.parentNode.nodeName === 'P') {
          item.parentNode.style.textIndent = ''
        }
      }
    })
    $.each($('.previewimage video'), function (i, item) {
      if (item.src && item.src.indexOf('135editor.com') === -1) {
        item.width = document.documentElement.clientWidth - 20
        item.height = ''
        item.style.width = (document.documentElement.clientWidth - 20) + 'px'
        item.style.height = 'auto'
        if (item.parentNode && item.parentNode.nodeName === 'P') {
          item.parentNode.style.textIndent = ''
        }
      }
    })
    $.each($('.previewimage table'), function (i, item) {
      item.width = document.documentElement.clientWidth - 20
      item.height = ''
      item.style.width = (document.documentElement.clientWidth - 20) + 'px'
      item.style.height = 'auto'
      if (item.parentNode && item.parentNode.nodeName === 'P') {
        item.parentNode.style.textIndent = ''
      }
    })
  }
}
