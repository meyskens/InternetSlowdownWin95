'use strict';

if(typeof window.num==="undefined"){
	window.num=0
}

WIN95.dialogBox = function () {
	this.ID = null
	this.image = 'regedit_201'
	this.title = 'Explorer'
	this.text = ''
	this.buttons = {}
}

var createButtons = function (arr,id,element) {
	$(element).find('.dialogBoxButtons').append(
		$('<div/>').append(
			$('<span/>').text(id).click(function () {
				arr[id]($(this))
			})
		)
	)
}

WIN95.dialogBox.prototype = {
	constructor: WIN95.dialogBox,
	set: function (data) {
		this.ID = data.ID
		this.image = data.image
		this.title = data.title
		this.text = data.text
		this.buttons = data.buttons
		return this
	},
	draggableOptions: {
		containment: 'window',
		handle: '.windowTitleBar'
	},
	
	render: function () {
		var _this = this
		var position = [
			document.width / 3.5 +window.num*20,
			document.height / 4 +window.num*20
		]
		window.num++
		var element = $(Mustache.render(
				WIN95.templates.dialogBox, {
					ID: this.ID,
					image: this.image,
					title: this.title,
					text: this.text
				}
			))
			.appendTo('#desktop')
			.draggable(this.draggableOptions)
			.mousedown(function () {
				$('[data-window]').attr('data-status', 'normal')
				$('.taskBarItem').attr('data-status', 'normal')
				$(this).attr('data-status', 'selected')
			})
			.on('remove', function () {})
			.css({
				'position': 'absolute',
				'left': position[0],
				'top': position[1],
				'width': '295px',
				'height': '115px'
			})
			.mousedown()
		for (var b in _this.buttons) {
			if (_this.buttons.hasOwnProperty(b)) {
				createButtons(_this.buttons,b,element)
			}
		}
		this.postRender(element)
	},
	postRender: function (element) {}
}