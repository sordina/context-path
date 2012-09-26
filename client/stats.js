

Template.stats.minx = bound(_.min, 'x')
Template.stats.miny = bound(_.min, 'y')
Template.stats.maxx = bound(_.max, 'x')
Template.stats.maxy = bound(_.max, 'y')

function bound(f,i){
	return function() {
		return f(_.pluck(Session.get('points'),i))
	}
}
