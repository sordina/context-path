
Template.svg.points = function() {
	return Session.get('points')
}

Template.svg.events({ 'click svg' : function(e) {
	var pair = {x: e.offsetX, y: e.offsetY}
	Session.get('tool')(pair, e) }
})
