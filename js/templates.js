WIN95.templates = {

	icon:
	'<div class="icon" data-icon="{{ID}}" data-status="normal">'
		+ '<img src="img/icons/{{image}}.ico" alt="" draggable="false" />'
		+ '<span>{{text}}</span>'
	+ '</div>',

	explorer:
	'<div class="explorer" data-explorer="{{ID}}">'
		+ '<div class="explorerTitleBar">'
			+ '<img src="img/icons/{{image}}.ico" alt="" />'
			+ '<span>{{title}}</span>'
			+ '<div class="explorerTitleBarButtons">'
				+ '<div class="explorerTitleBarMinimize"></div>'
				+ '<div class="explorerTitleBarMaximize"></div>'
				+ '<div class="explorerTitleBarClose"></div>'
			+ '</div>'
		+ '</div>'
		+ '<ul class="explorerMenuBar">'
			+ '<li><a href="#"><u>F</u>ile</a></li>'
			+ '<li><a href="#"><u>E</u>dit</a></li>'
			+ '<li><a href="#"><u>V</u>iew</a></li>'
			+ '<li><a href="#"><u>H</u>elp</a></li>'
		+ '</ul>'
		+ '<div class="explorerContents"></div>'
		+ '<div class="explorerStatusBar">'
			+ '<div class="explorerStatusBarLeft"><span></span></div>'
			+ '<div class="explorerStatusBarRight"><span></span></div>'
		+ '</div>'
	+ '</div>'

}