

Template.options.events( merge([ setter('tool', 'toolpoint', point)
                               , setter('tool', 'toolerase', erase)
                               , checkbox('newstyle')
                               , checkbox('wrapper')
                               , checkbox('scale')
                               , textfield('title')
                               ]))

// Defaults
//
Session.set('tool',     point)
Session.set('title',    "MyRule")
Session.set('newstyle', true)
Session.set('scale',    true)

// Sets a session key to a value when x is clicked
//
function setter(name, id, value ) {
	var object = {}
	object[ "click #" + id ] = function() { Session.set( name, value ) }
	return object
}

// checkbox and uncheck an option
//
function checkbox(id) {
	var object = {}
	object[ "click #" + id ] = function() { Session.set( id, $("#" + id).is(':checked')) }
	return object
}

// Record a textfield field
//
function textfield(id) {
	var object = {}
	object[ "keyup #" + id ] = function() { Session.set( id, $("#" + id).val() ) }
	return object
}

