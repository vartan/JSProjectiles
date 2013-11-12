//Hello there, curious stranger looking at my source. I apologise for the uncommented code. 
//Everything is written from scratch.
var PhysicsObjects = []
var ccounter = 0
var cont=false;
var max=10
function init() {
	  var canvas = document.getElementById("canv");
  var ctx = canvas.getContext("2d");
	  setInterval(function(){loop(ctx)},15)
  shoot();
}
target = Math.random()*700+20;
function shoot() {
  angle=Math.PI*$("#angle").val()/180
  magnitude=$("#magnitude").val()
  bounce = $("#bounce").attr('checked')
  if(cont)
	max=1000
  else
	max=10
  shoot_up = new PhysicalObject(5,696,new Circle(3))
  shoot_up.vy=-magnitude*Math.sin(angle)
  shoot_up.vx=magnitude*Math.cos(angle)
  shoot_up.transfer=.8
  $("#x").text(Math.round(shoot_up.vx*10)/10);
  $("#y").text(Math.round(shoot_up.vy*-10)/10);

}
function resettarget() {
	PhysicsObjects = new Array()
target = Math.random()*700+20;

}
function clearprojectiles() {
	PhysicsObjects = new Array()

}
function loop(ctx) {

	while(PhysicsObjects.length>max)
		PhysicsObjects[0].remove()
	  $("#count").text(PhysicsObjects.length);

  cont = $("#cont").attr('checked')
	if(cont) {
		shoot();
	}

    ctx.clearRect (0,0,721,721);
	ctx.strokeStyle = '#ddf'
	ctx.beginPath()
	for(var i=.5;i<=721;i+=10) {
		ctx.moveTo(0,i)
		ctx.lineTo(720,i)
		ctx.moveTo(i,0)
		ctx.lineTo(i,720)
	}
	ctx.stroke()
	ctx.closePath()	
	ctx.strokeStyle = '#AAF'
	ctx.beginPath()
	for(var i=.5;i<=721;i+=100) {
		ctx.moveTo(0,i)
		ctx.lineTo(720,i)
		ctx.moveTo(i,0)
		ctx.lineTo(i,720)
	}
	ctx.stroke()
	ctx.closePath()		
	ctx.beginPath();
	ctx.fillStyle = "#555";
    ctx.moveTo(0,700)
	ctx.lineTo(10,680)
	ctx.lineTo(15,690)
	ctx.lineTo(0,700)
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.fillStyle = "#0f0";
	ctx.arc(target,701,10,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.fillStyle = "#fff";
	ctx.arc(target,701,7,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.fillStyle = "#0f0";
	ctx.arc(target,701,3,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = "#f00";

	for(var i=0;i<PhysicsObjects.length;i++) {
	
	    a = PhysicsObjects[i];
		
		if(a.x>720 || a.x<0) {
			a.remove()
			continue;
		}
			  if(i>0 && PhysicsObjects[i-1].vx==a.vx && PhysicsObjects[i-1].vy==a.vy && PhysicsObjects[i-1].x==a.x && PhysicsObjects[i-1].y==a.y) {
				a.remove();
				i--;
				continue;
			  }
		if(a.y+a.type.radius>=700) {
			if(bounce) {
			a.vy*=-a.transfer;
			} else {
			  a.vx=0;
			  a.vy=0;
			}

		}
		a.vy+=1.53;
		a.x+=a.vx/3;
		a.y+=a.vy/3;

		if(a.y+a.type.radius>700)
			a.y=700-a.type.radius;
		a.draw(ctx)
	}

}
function PhysicalObject(x,y,type) {
	this.x = x;
	this.y = y;
	this.vy=0;
	this.vx=0
	this.type=type
	this.transfer=.9
	this.removed=false;
	PhysicsObjects.push(this)
}
PhysicalObject.prototype.remove = function() {
	this.removed=true
	PhysicsObjects.splice(PhysicsObjects.indexOf(this),1)
}
PhysicalObject.prototype.draw = function(ctx) {
	this.type.draw(ctx,this.x,this.y)
}
function Circle(radius) {
	this.radius=radius;
}
Circle.prototype.draw = function(ctx,x,y) {
	if(this.removed)
		return
	ctx.beginPath();
	ctx.arc(x,y,this.radius,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
}
$(document).ready(init)
