$(function () {
	'use strict';

	/*
	 * Desktop icons
	 */

	WIN95.desktopIcons = {}

	WIN95.desktopIcons.myComputer = new WIN95.icon()
	WIN95.desktopIcons.myComputer.set({
		ID: 'myComputer',
		image: 'explorer_100',
		text: 'My Computer',
		rename: true
	}).render('#desktopIcons')

	WIN95.desktopIcons.networkNeighborhood = new WIN95.icon()
	WIN95.desktopIcons.networkNeighborhood.set({
		ID: 'networkNeighborhood',
		image: 'shell32_18',
		text: 'Network Neighborhood',
		rename: true
	}).render('#desktopIcons')

	WIN95.desktopIcons.recycleBin = new WIN95.icon()
	WIN95.desktopIcons.recycleBin.set({
		ID: 'recycleBin',
		image: 'shell32_32',
		text: 'Recycle Bin',
		rename: false
	}).render('#desktopIcons')

	/*
	 * Explorer icons
	 */

	var warning2 = function () {
		var dialog = new WIN95.dialogBox()
		dialog.set({
			ID: WIN95.getUniqueID(),
			image: 'conf_149',
			title: 'Internet Slowdown',
			text: "There would be no freedom of speech anymore",
			buttons: {
				'Take action': function (button) {
					console.log("YEY")
					window.location="https://www.battleforthenet.com"
				},
				'Cancel': function (button) {
					warning3()
				}
			}
		}).render()
	}

	var warning3 = function () {
		var dialog = new WIN95.dialogBox()
		dialog.set({
			ID: WIN95.getUniqueID(),
			image: 'conf_136',
			title: 'Internet Slowdown',
			text: 'The web would be slow again!',
			buttons: {
				'Take action': function (button) {
					window.location="https://www.battleforthenet.com"
				},
				'Cancel': function (button) {
					warning4()
				}
			}
		}).render()
	}

	var warning4 = function () {
		var dialog = new WIN95.dialogBox()
		dialog.set({
			ID: WIN95.getUniqueID(),
			image: 'conf_107',
			title: 'Internet Slowdown',
			text: "We can only stop this with YOUR help!",
			buttons: {
				'Take action': function (button) {
					window.location="https://www.battleforthenet.com"
				},
				'Cancel': function (button) {
					warningLoop()
				}
			}
		}).render()
	}
	var warningLoop = function () {
		var dialog = new WIN95.dialogBox()
		dialog.set({
			ID: WIN95.getUniqueID(),
			image: 'icwconn1_123',
			title: 'Internet Slowdown',
			text: "Cannot find net neutrality, please take action",
			buttons: {
				'Take action': function (button) {
					window.location="https://www.battleforthenet.com"
				},
				'Cancel': function (button) {
					warningLoop()
				}
			}
		}).render()
	}
	
	
	window.setTimeout(function () {
		var dialog = new WIN95.dialogBox()
	dialog.set({
		ID: WIN95.getUniqueID(),
		image: 'confcp_118',
		title: 'Internet Slowdown',
		text: 'Slow lanes would change the internet forever.',
		buttons: {
			'Take action': function (button) {
				window.location="https://www.battleforthenet.com"
			},
			'Cancel': function (button) {
				warning2()
			}
		}
	}).render()
	}, 2000)

	window.setTimeout(function () {
		$('[data-icon=myComputer]').dblclick()
		WIN95.explorerIcons = {}

		WIN95.explorerIcons.A = new WIN95.icon()
		WIN95.explorerIcons.A.set({
			ID: 'driveA',
			image: 'shell32_8',
			text: 'Removable Disk (A:)'
		}).render('.explorerContents')

		WIN95.explorerIcons.C = new WIN95.icon()
		WIN95.explorerIcons.C.set({
			ID: 'driveC',
			image: 'shell32_9',
			text: '(C:)'
		}).render('.explorerContents')
	}, 1000)

})