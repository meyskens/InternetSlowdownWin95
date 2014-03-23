$(function() {

/*
 * Desktop icons
 */

WIN95.desktopIcons = {}

WIN95.desktopIcons.myComputer = new WIN95.icon()
WIN95.desktopIcons.myComputer.set({
	ID: 'myComputer',
	image: 'explorer_100',
	text: 'My Computer'
}).render('#desktopIcons')

WIN95.desktopIcons.networkNeighborhood = new WIN95.icon()
WIN95.desktopIcons.networkNeighborhood.set({
	ID: 'networkNeighborhood',
	image: 'shell32_18',
	text: 'Network Neighborhood'
}).render('#desktopIcons')

WIN95.desktopIcons.recycleBin = new WIN95.icon()
WIN95.desktopIcons.recycleBin.set({
	ID: 'recyleBin',
	image: 'shell32_32',
	text: 'Recycle Bin'
}).render('#desktopIcons')

/*
 * Explorer icons
 */

WIN95.explorerIcons = {}

WIN95.explorerIcons.A = new WIN95.icon()
WIN95.explorerIcons.A.set({
	ID: 'A',
	image: 'shell32_8',
	text: 'Removable Disk (A:)'
}).render('.explorerContents')

WIN95.explorerIcons.C = new WIN95.icon()
WIN95.explorerIcons.C.set({
	ID: 'C',
	image: 'shell32_9',
	text: '(C:)'
}).render('.explorerContents')

})