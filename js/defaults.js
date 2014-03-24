$(function() {

/*
 * Desktop icons
 */

WIN95.desktopIcons = {}

WIN95.desktopIcons.myComputer = new WIN95.icon()
WIN95.desktopIcons.myComputer.set({
	ID: WIN95.getUniqueID(),
	image: 'explorer_100',
	text: 'My Computer',
	rename: true
}).render('#desktopIcons')

WIN95.desktopIcons.networkNeighborhood = new WIN95.icon()
WIN95.desktopIcons.networkNeighborhood.set({
	ID: WIN95.getUniqueID(),
	image: 'shell32_18',
	text: 'Network Neighborhood',
	rename: true
}).render('#desktopIcons')

WIN95.desktopIcons.recycleBin = new WIN95.icon()
WIN95.desktopIcons.recycleBin.set({
	ID: WIN95.getUniqueID(),
	image: 'shell32_32',
	text: 'Recycle Bin',
	rename: false
}).render('#desktopIcons')

/*
 * Explorer icons
 */

window.setTimeout(function() {
	WIN95.explorerIcons = {}

	WIN95.explorerIcons.A = new WIN95.icon()
	WIN95.explorerIcons.A.set({
		ID: WIN95.getUniqueID(),
		image: 'shell32_8',
		text: 'Removable Disk (A:)'
	}).render('.explorerContents')

	WIN95.explorerIcons.C = new WIN95.icon()
	WIN95.explorerIcons.C.set({
		ID: WIN95.getUniqueID(),
		image: 'shell32_9',
		text: '(C:)'
	}).render('.explorerContents')
}, 5000)

})