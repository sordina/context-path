

function point(pair, e) {
	var points = Session.get('points')
	points.push(pair)
	Session.set('points', points)
}

function erase(pair, e) {
	var points  = Session.get('points')
	var reduced = $.grep(points, function(i) { return (delta(pair,i) > w) })
	Session.set('points', reduced)
}

function delta(a,b) {
	var dx = a.x - b.x
	var dy = a.y - b.y
	return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
}
