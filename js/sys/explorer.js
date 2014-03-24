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
		containment: 'window',
		handle: '.explorerTitleBar'
	},
	render: function(renderTarget) {
		var _this = this
		var position = [70, 70]
		if ($('.explorer').last().length) {
			position = [
				$('.explorer').last().offset().left,
				$('.explorer').last().offset().top + 12
			]
		}
		var element = $(Mustache.render(
			WIN95.templates.explorer, {
				ID:    this.ID,
				image: this.image,
				title: this.title
			}
		))
		.appendTo(renderTarget)
		.draggable(this.draggableOptions)
		.resizable()
		.resize(function() {
			var height = $(this).height()
			var width  = $(this).width()
			$(this).find('.explorerContents').height(height - 60)
			$(this).find('.explorerStatusBarRight').width(width - 149)
		})
		.mousedown(function() {
			$('.explorer').attr('data-status', 'normal')
			$('.taskBarItem').attr('data-status', 'normal')
			$(this).attr('data-status', 'selected')
			$('[data-taskBarItem=' + _this.ID + ']')
				.attr('data-status', 'selected')
		})
		.on('remove', function() {
			console.log(_this.ID)
			$('[data-taskBarItem=' + _this.ID + ']').remove()
		})
		.css({
			'position': 'absolute',
			'left': position[0],
			'top':  position[1]
		})
		.resize()
		.mousedown()
		var taskBarItem = new WIN95.taskBarItem()
		taskBarItem.set({
			ID:    this.ID,
			title: this.title,
			image: this.image
		}).render()
		this.postRender(element)
	},
	postRender: function(element) {
		$(element).find('.explorerTitleBarClose').click(function() {
			$(this).parent().parent().parent().remove()
		})
		$(element).find('.explorerMenuBar li').mouseenter(function() {
			if ($('.explorerMenuBar li[data-open=true]').length) {
				$(this).mousedown()
			}
		})
		$(element).find('.explorerMenuBar li').mousedown(function() {
			$('.explorerMenuBar li').attr('data-open', 'false')
			if ($(this).attr('data-open') === 'true') {
				$(this).attr('data-open', 'false')
			}
			else {
				$(this).attr('data-open', 'true')
			}
		})
	}
}