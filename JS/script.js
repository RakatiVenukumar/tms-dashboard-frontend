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

// Star toggle for To Do List
$(document).on('click', '.star-toggle', function() {
	var $icon = $(this).find('i');
	if ($icon.hasClass('bi-star')) {
		$icon.removeClass('bi-star text-secondary').addClass('bi-star-fill text-warning');
		$(this).removeClass('text-secondary').addClass('text-warning');
	} else {
		$icon.removeClass('bi-star-fill text-warning').addClass('bi-star text-secondary');
		$(this).removeClass('text-warning').addClass('text-secondary');
	}
});

// Show Add Task Modal
$(document).on('click', '#add-task-btn', function() {
	var modal = new bootstrap.Modal(document.getElementById('addTaskModal'));
	modal.show();
});

// Add new task to To Do List
$('#add-task-form').on('submit', function(e) {
	e.preventDefault();
	var title = $('#task-title').val();
	var freq = $('#task-frequency').val();
	var person = $('#task-person').val();
	var badgeClass = {
		'Daily': 'bg-danger',
		'Weekly': 'bg-warning text-dark',
		'Monthly': 'bg-info text-dark',
		'Yearly': 'bg-primary'
	}[freq] || 'bg-secondary';
	var starHtml = '<span class="star-toggle text-secondary" style="font-size:1.2rem; cursor:pointer;"><i class="bi bi-star"></i></span>';
	var taskHtml = '<div class="todo-item d-flex align-items-center justify-content-between p-2 mb-1 rounded" style="background:#fff; border:1px solid #f0f0f0;">' +
		starHtml +
		'<div class="flex-grow-1 ms-2">' +
		'<div class="fw-bold">' + title + ' <span class="badge ' + badgeClass + ' ms-2">' + freq + '</span></div>' +
		'<div class="text-muted small">Task Management &bull; By ' + person + '</div>' +
		'</div></div>';
	$('#todo-list').prepend(taskHtml);
	$('#addTaskModal').modal('hide');
	this.reset();
});

// Show Add Meeting Modal
$(document).on('click', '#add-meeting-btn', function() {
	var modal = new bootstrap.Modal(document.getElementById('addMeetingModal'));
	modal.show();
});

// Add new meeting to Meeting List
$('#add-meeting-form').on('submit', function(e) {
	e.preventDefault();
	var title = $('#meeting-title').val();
	var time = $('#meeting-time').val();
	var duration = $('#meeting-duration').val();
	var meetingHtml = '<div class="meeting-item d-flex align-items-center justify-content-between p-2 mb-1 rounded" style="background:#fff; border:1px solid #f0f0f0;">' +
		'<div class="flex-grow-1">' +
		'<div class="fw-bold">' + title + '</div>' +
		'<div class="small text-muted"><i class="bi bi-clock"></i> ' + time + '</div>' +
		'</div>' +
		'<span class="badge bg-secondary"><i class="bi bi-clock"></i> ' + duration + ' min</span>' +
		'</div>';
	$('#meeting-list').prepend(meetingHtml);
	$('#addMeetingModal').modal('hide');
	this.reset();
});
