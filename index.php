<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<script type="text/javascript" src="js/bootstrap.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <title>CS 313</title>
  </head>
  <body>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="#">Casey Pye</a>
		<button class="navbar-toggler" type="button" 		data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="#">Home
					<span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Cart</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">DB</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">Project 1</a>
				</li>
			</ul>
		</div>
	</nav>
	<div class="container">
	<div class="jumbotron">
		<div class="page-header">
			<h1>Casey Pye, M.S.</h1>
		</div>
		
		<div class="row">
			<div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
				<h3>This is the web app for Casey Pye's CS 313 projects.</h3>
				<p>As the fall semester of 2018 continues, expect to find more projects posted here.</p>
				<span id="span1">Your IP address is: <?php echo $_POST[$_SERVER['REMOTE_ADDR']]</span>
			</div>
			<div class="col-lg-4 col-md-8 col-sm-6 col-xs-12">
				<div id="myCarousel" class="carousel slide" data-ride="carousel">
		
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
					<li data-target="#myCarousel" data-slide-to="3"></li>
					<li data-target="#myCarousel" data-slide-to="4"></li>
					<li data-target="#myCarousel" data-slide-to="5"></li>
				</ol>
				  
				  <div class="carousel-inner">
					<div class="item active">
					  <img class="thumbnail"src="images/pye.jpg" alt="Casey Pye">
					</div>

					<div class="item">
					  <img src="images/sanfran.jpg" alt="San Francisco">
					</div>

					<div class="item">
					  <img src="images/troy.jpg" alt="A proud uncle">
					</div>
					
					<div class="item">
					  <img src="images/rock.jpg" alt="Oregon coast">
					</div>
					
					<div class="item">
					  <img src="images/siblings.jpg" alt="Siblings">
					</div>
					<div class="item">
					  <img src="images/fire.jpg" alt="Firefighting">
					</div>
				  </div>
				  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
					<span class="glyphicon glyphicon-chevron-left"></span>
					<span class="sr-only">Previous</span>
				  </a>
				  <a class="right carousel-control" href="#myCarousel" data-slide="next">
					<span class="glyphicon glyphicon-chevron-right"></span>
					<span class="sr-only">Next</span>
				  </a>
			</div>
			</div>
		</div>
	</div>	
	</div>
	
	<div class="container">
	<div class="row">
	<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">	
		<h4>Education</h4>
		Casey graduated with a BA in Spanish from Boise State University in 2008.  He also has a Masters of Science Degree in Science Education, which was completed in 2012. Casey is expecting to graduate with a BS in Software Engineering in the spring of 2019.
	</div>
	<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">	
		<h4>Work Experience</h4>
		Casey has work experience in various fields. He is currently the lead middle school science and math teacher for the Village Charter School. He has also worked as an initial attack wildland firefighter. Casey prides himself on his excellent work ethic and ability to solve problems no one else can.
	</div>
	<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">	
		<h4>Hobbies</h4>
		When Casey isn't teaching or studying, he can be found practicing his Irish tin whistle, or traveling with his wife, Jenna.  
	</div>
	</div>
	</div>
	

	
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>