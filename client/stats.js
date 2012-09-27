

Template.stats.helpers({ minx : bound(_.min, 'x')
                       , miny : bound(_.min, 'y')
                       , maxx : bound(_.max, 'x')
                       , maxy : bound(_.max, 'y')
                       , dx   : (maxx - minx)
                       , dy   : (maxy - miny)
                      })

function bound(f,i){
	return function() {
		return f(_.pluck(Points.find().fetch(),i))
	}
}
