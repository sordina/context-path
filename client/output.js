

Template.output.helpers({ startx   : startx
                        , starty   : starty
                        , title    : title
                        , segments : segments
                       })

function startx()  { try { return Session.get('points')[0].x } catch(e) {return 0} }
function starty()  { try { return Session.get('points')[0].y } catch(e) {return 0} }
function title()   { return Session.get('title') }

function segments () {
	return $.grep(Session.get('points'), function(e,i){ return (i > 0) })
}
