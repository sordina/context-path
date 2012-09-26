

Template.content.rendered = function() {
	if(Session.get('initial_render')) { return }

	// GLOBALS!!!
	//
	c      = $("canvas")
	ctx    = c[0].getContext('2d');
	h      = $("#output")
	w      = 5
	points = []

	blank()
	c.click(callback)
	$(window).resize(callback)

	Session.set('initial_render', true)
}

Template.output.startx   = function() { try { return Session.get('path')[0].x } catch(e) {} }
Template.output.starty   = function() { try { return Session.get('path')[0].y } catch(e) {} }

Template.output.segments = function() {
	try {
		return $.grep(points, function(e,i){ return (i > 0) })
	} catch(e) {}
}

function callback(e) {

	var pair     = {x: e.offsetX, y: e.offsetY}
	var tooltype = $("input:checked").val()

	if( tooltype == "point" )
	{
		points.push(pair)
		erase({x:1000, y:1000})
	}
	else if( tooltype == "eraser" )
	{
		erase(pair)
	}
	else
	{
		throw("Invalid tool type [" + tooltype + "]")
	}

	blank()
	drawPoints()

	Session.set('path', points)
}

function delta(a,b) { return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)) }

function erase(p) { points = $.grep(points, function(i) { return (delta(p,i) > w) }) }

function blank() {
	c.attr('width',  c.width())
	c.attr('height', c.height())
}

function drawPoint(p) {
	ctx.beginPath()
	ctx.arc(p.x, p.y, w, 0, 300);
	ctx.closePath()
	ctx.fill()
}

function drawPoints() {
	ctx.beginPath()

	$.each(points, function(i,e) {
		if(i == 0) {
			ctx.moveTo(e.x,e.y)
		} else {
			ctx.lineTo(e.x,e.y)
		}
	})

	ctx.fillStyle = "#F00"
	ctx.closePath()
	ctx.fill()

	ctx.fillStyle = "#000"

	$.each(points, function(i,e) {
		drawPoint(e)
	})
}
