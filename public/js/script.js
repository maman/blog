/* Author: Achmad Mahardi
*/

$(document).pjax('a:not([data-remote]):not([data-behavior]):not([data-skip-pjax])','[data-pjax-container]');
$(document).on('pjax:send', function() {
  $.zprogress.start();
  // $('.blogname').addClass('loadPage');
  $('#main').addClass('pageAnim');
});
$(document).on('pjax:complete', function() {
  $.zprogress.done();
  // $('.blogname').removeClass('loadPage');
  $('#main').removeClass('pageAnim');
  if( window._gaq ) {
    _gaq.push(['_trackPageview', window.location.href]);
  }
  $.scrollTo({
    endY: 0,
    duration: 100
  });
  $('pre code').each(function(i, e) {hljs.highlightBlock(e);});
});
$(document).on('pjax:timeout', function(event) {
  event.preventDefault();
});
$('pre code').each(function(i, e) {hljs.highlightBlock(e);});