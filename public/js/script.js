/* Author: Achmad Mahardi
   Includes jQuery fitVids
*/

(function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null};if(!document.getElementById("fit-vids-style")){var r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],s="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";r.className="fit-vids-style";r.id="fit-vids-style";r.style.display="none";r.innerHTML=s;i.parentNode.insertBefore(r,i)}if(t){e.extend(n,t)}return this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];if(n.customSelector){t.push(n.customSelector)}var r=e(this).find(t.join(","));r=r.not("object object");r.each(function(){var t=e(this);if(this.tagName.toLowerCase()==="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length){return}var n=this.tagName.toLowerCase()==="object"||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=!isNaN(parseInt(t.attr("width"),10))?parseInt(t.attr("width"),10):t.width(),i=n/r;if(!t.attr("id")){var s="fitvid"+Math.floor(Math.random()*999999);t.attr("id",s)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",i*100+"%");t.removeAttr("height").removeAttr("width")})})}})(window.jQuery||window.Zepto)

$(document).pjax('a:not([data-remote]):not([data-behavior]):not([data-skip-pjax])','.pjax');
$(document).on('pjax:send', function() {
  $.zprogress.start();
  // $('.blogname').addClass('loadPage');
  // $('#main').addClass('pageAnim');
});
$(document).on('pjax:complete', function() {
  $.zprogress.done();
  // $('.blogname').removeClass('loadPage');
  // $('#main').removeClass('pageAnim');
  $(".post-content").fitVids();
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
$(".post-content").fitVids();
