<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=0.5, user-scalable=no"/>

<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<title>2D Particle Launcher</title>

    <script type="text/javascript" charset="utf-8" src="projectile_files/jquery-1.js"></script>
    <script type="text/javascript" charset="utf-8" src="projectile_files/script.js"></script>
	<link rel="StyleSheet" href="projectile_files/style.css" type="text/css">
<!--[if IE]><script src="excanvas.js"></script><![endif]-->

	<!--[if IE]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>
<body>
<div style="float:left;margin:20px;">
<b>2D Particle Launcher</b><br/>
By Michael Vartan<br/><br/>
<input type="checkbox" id="bounce"/> Bouncy<br/>
<input type="checkbox" id="cont"/> Shoot Continuously<br/>
Angle: <input type=text value="60.0" id="angle"> degrees<br/>
Magnitude: <input type=text value="30.0" id="magnitude">m/s<br/>
Launching Velocity: <<span id="x"></span>m,<span id="y"></span>m><br/>

<input type="button" value="shoot" onClick="shoot()"> <input type="button" value="new target" onClick="resettarget()"><input type="button" value="clear projectiles" onClick="clearprojectiles()"><br/>
Current particle count: <span id="count"></span><br/>

</div>
<canvas id="canv" width="721" height="721">
Your browser does not support HTML5 Canvas.
</canvas>	


</body></html>