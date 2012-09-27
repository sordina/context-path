

Template.output.helpers( merge( [
	{ startx   : startx
	, starty   : starty
	, title    : title
	, segments : segments
	},
	Options ]))

function startx()   { try { return Points.findOne().x } catch(e) {return 0} }
function starty()   { try { return Points.findOne().y } catch(e) {return 0} }
function title()    { return Session.get('title') }
function segments() { return _.rest( Points.find().fetch() ) }

function startx_scale() { return StatsHelpers.scaled(Points.findOne() || {x: 0}).x || 0 }
function starty_scale() { return StatsHelpers.scaled(Points.findOne() || {y: 0}).y || 0 }

function segments_scale() {
	return _.rest( _.map( Points.find().fetch(), StatsHelpers.scaled  ))
}

var SH1 = { minx : bound(_.min, 'x')
          , miny : bound(_.min, 'y')
          , maxx : bound(_.max, 'x')
          , maxy : bound(_.max, 'y')
          }

var SH2 = { dx : function() { return SH1.maxx() - SH1.minx() }
          , dy : function() { return SH1.maxy() - SH1.miny() }
          }

var SH3 = { scale  : function() { return _.max([SH2.dx(), SH2.dy()]) } }

var SH4 = { scaled : function(p) {
                       var dx2   = SH2.dx() / 2
                       var dy2   = SH2.dy() / 2
                       var x     = p.x
                       var y     = p.y
                       var scale = SH3.scale()

                       var result = { x : (x + dx2 - SH1.minx()) / SH3.scale()
                                    , y : (SH1.miny() - y - dy2) / SH3.scale()
                                    }

                       console.log(result)
                       return result
           } }

StatsHelpers = merge([ SH1, SH2, SH3, SH4 ])

Template.stats.helpers( StatsHelpers )

function bound(f,i){
	return function() {
		return f(_.pluck(Points.find().fetch(),i))
	}
}
