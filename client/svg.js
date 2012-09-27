
Template.svg.rendered = function() {
	var svg    = $('svg')
	var points = Points.find().fetch()

	$('circle' ).remove()
	$('polygon').remove()

	var pairs = _.map( points,  function(e) {   return "" + e.x + "," + e.y } )
	var ptext = _.reduce(pairs, function(u, e){ return u + " " + e }, "")

	console.log(ptext)

	var p     = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
	    p.setAttribute("fill",   'red')
	    p.setAttribute("points", ptext)

	svg.append(p)

	_.each( points, function(e) {
		var r = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		    r.setAttribute("cx",   e.x    )
		    r.setAttribute("cy",   e.y    )
		    r.setAttribute("r",    '5'    )
		    r.setAttribute("fill", 'black')

		svg.append(r)
	})
}

Template.svg.helpers({ points    : function() { return Points.find() }
                     , points2   : function() { return Points.find() }
                     , haspoints : function() { return Points.find().count() > 1 }
})

Template.svg.events({
	'click svg' : function(e) {
		var pair = {x: e.offsetX, y: e.offsetY}
		Session.get('tool')(pair, e)
	}
})
