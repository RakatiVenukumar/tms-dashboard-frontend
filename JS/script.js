// Sidebar active state
$(document).on('click', '.nav-link', function(e) {
	$('.nav-link').removeClass('active');
	$(this).addClass('active');
});

// Toggle read/unread badge in Feed
$(document).on('click', '.card .badge.bg-primary', function() {
	var $badge = $(this);
	if ($badge.text().trim() === 'Unread') {
		$badge.removeClass('bg-primary').addClass('bg-secondary').text('Read');
	} else {
		$badge.removeClass('bg-secondary').addClass('bg-primary').text('Unread');
	}
});
