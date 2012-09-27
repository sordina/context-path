
Template.svg.helpers({ points : function() { return Session.get('points') }
                     , title  : function() { return Session.get('title') }
})

Template.svg.events({
	'click svg' : function(e) {

		var pair = {x: e.offsetX, y: e.offsetY}
		Session.set('title', 'x' + pair.x + " - " + pair.y) // WUT
		Session.get('tool')(pair, e)
	}
})
