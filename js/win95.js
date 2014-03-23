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

WIN95.icon = function() {
	this.ID    = null
	this.image = 'ftmcl_4500'
	this.text  = 'New'
}

WIN95.icon.prototype = {
	constructor: WIN95.icon,
	set: function(data) {
		this.ID     = data.ID
		this.text   = data.text
		this.image  = data.image
		return this
	},
	draggableOptions: {
		containment: 'window',
		start: function() {
			$(this).attr('data-status', 'dragging')
		},
		stop: function() {
			$(this).attr('data-status', 'normal')
		}
	},
	render: function(renderTarget) {
		var _this = this
		$(Mustache.render(
			WIN95.templates.icon, {
				ID:    this.ID,
				image: this.image,
				text:  this.text
			}
		))
		.mousedown(function() {
			$('.icon').attr('data-status', 'normal')
			$(this).attr('data-status', 'selected')
		})
		.dblclick(function() {
			var explorer = new WIN95.explorer
			explorer.set({
				ID: 'explorer',
				image: _this.image,
				title: _this.text
			}).render('#desktop')
		})
		.draggable(this.draggableOptions)
		.appendTo(renderTarget)
	}
}

/*
 * Explorer
 */

WIN95.explorer = function() {
	this.ID    = null
	this.image = 'regedit_201'
	this.title = 'Explorer'
}

WIN95.explorer.prototype = {
	constructor: WIN95.explorer,
	set: function(data) {
		this.ID    = data.ID
		this.image = data.image
		this.title = data.title
		return this
	},
	draggableOptions: {
		containment: 'window'
	},
	render: function(renderTarget) {
		var position = [70, 70]
		if ($('.explorer').last().length) {
			position = [
				$('.explorer').last().offset().left,
				$('.explorer').last().offset().top
					- $('.explorer').last().height()
			]
		}
		$(Mustache.render(
			WIN95.templates.explorer, {
				ID:    this.ID,
				image: this.image,
				title: this.title
			}
		))
		.draggable(this.draggableOptions)
		.resizable()
		.resize(function() {
			var height = $(this).height()
			var width  = $(this).width()
			$(this).find('.explorerContents').height(height - 60)
			$(this).find('.explorerStatusBarRight').width(width - 149)
		})
		.css({
			'left': position[0],
			'top':  position[1]
		})
		.appendTo(renderTarget).resize()
		.find('.explorerTitleBarClose').on('click', function() {
			$(this).parent().parent().parent().remove()
		})
	}
}

})