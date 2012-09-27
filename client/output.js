

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

function startx_scale() { try { return StatsHelpers.scaled(Points.findOne()).x } catch(e) {return 0} }
function starty_scale() { try { return StatsHelpers.scaled(Points.findOne()).y } catch(e) {return 0} }

function segments_scale() {
	return _.rest( _.map( Points.find().fetch(), StatsHelpers.scaled  ))
}
