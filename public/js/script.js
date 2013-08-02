/* Author: Achmad Mahardi

*/

// $(document).ready(function() {
// 	var linkTemplate = "<div class='entry-content'><ol class='link-list'></ol></div>";
// 	$(linkTemplate).insertAfter('.entry-content');
// 	appendLinks();
// });

// function appendLinks() {
// 	$('.entry-content a').each(function(linkId) {
// 		var oldLink = $(this).attr('href');
// 		// var linkHref = $(this).attr('href');
// 		var count = linkId + 1;
// 		$(this).attr('href', '#d' + count);
// 		$(this).addClass('is-link');
// 		$(this).append("<span class='top'>["+count+"]</span>");
// 		$('.link-list').append("<li id='d"+count+"'><a href='"+oldLink+"'>"+oldLink+"</a>");
// 	});
// }