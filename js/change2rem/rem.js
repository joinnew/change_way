( function(doc, win) {
  let resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'onresize',
    docEl = doc.documentElement,
    recalc = function() {
      let width = docEl.clientWidth;
      console.log(width);
      if (!width) return;
      docEl.style.fontSize = 20 * ( width / 320 ) + 'px';
      // 是小驼峰形式，不是大驼峰
    }

    if (!doc.addEventListener) return;
    win.addEventListener( resizeEvt, recalc, false);
    doc.addEventListener( 'DOMContentLoaded', recalc, false);
})(document, window)