

Points = new Meteor.Collection(null)

function point(pair, e) { Points.insert(pair) }

function erase(pair, e) {
	_.each(Points.find().fetch(), function(p) {
		if( delta(pair, p) <= 5) {
			Points.remove(p)
		}
	})
}

function delta(a,b) {
	var dx = a.x - b.x
	var dy = a.y - b.y
	return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
}
