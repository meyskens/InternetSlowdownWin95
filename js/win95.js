var WIN95 = {}

$(function() {

/*
 * Utility functions
 */

// Get time (AM/PM format)
var currentTime = function() {
	var hours = (new Date()).getHours()
	var minutes = (new Date()).getMinutes()
	var ampm = hours >= 12 ? 'PM' : 'AM'
	hours = hours % 12
	hours = hours ? hours : 12
	minutes = minutes < 10 ? '0' + minutes : minutes
	return hours + ':' + minutes + ' ' + ampm
}

/*
 * Taskbar
 */

// Start button
var startButton = $('#startButton')

startButton.mousedown(function() {
	$('.icon').attr('data-status', 'normal')
	var isOpen = $(this).attr('data-open')
	if (isOpen === 'true') {
		$(this).attr('data-open', false)
		startMenu.hide()
	}
	else if (isOpen === 'false') {
		$(this).attr('data-open', true)
		startMenu.show()
	}
})

// Taskbar clock
setInterval(function() {
	$('#clock span').text(currentTime())
}, 1000)

/*
 * Start menu
 */

var startMenu = $('#startMenu')
$('#startMenuRight').menu()

$('#startMenuRight li').hover(function() {
	$(this).find('a').css('color', '#FFF')
}, function() {
	$(this).find('a').css('color', '#000')
})

/*
 * Desktop
 */

$(document).mousedown(function(e) {
	var defocus = [
		$(e.target).parents('.icon').length,
		$(e.target).parents('#startMenu').length,
		$(e.target).parents('#taskBar').length,
		$(e.target).is('#taskBar')
	]
	console.log(defocus)
	var d = false
	for (var i in defocus) {
		if (defocus[i]) {
			d = true
		}
	}
	if (!d) {
		$('.icon').attr('data-status', 'normal')
		if (startButton.attr('data-open') === 'true') {
			startButton.mousedown()
		}
	}
})

$(document).bind('contextmenu', function(e) {
	return false
})

})