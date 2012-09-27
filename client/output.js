

Template.output.helpers({ startx   : startx
                        , starty   : starty
                        , title    : title
                        , segments : segments
                       })

function startx()   { try { return Points.findOne().x } catch(e) {return 0} }
function starty()   { try { return Points.findOne().y } catch(e) {return 0} }
function title()    { return Session.get('title') }
function segments() { return _.rest( Points.find().fetch() ) }
