<!DOCTYPE html>
<html>
<head>              
  <meta charset="utf-8" />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="author" content="" />

  <style>
    body { height: 5000px; margin: 0; padding: 0; font-family:Arial; }
    #visuals { position: relative; width: 100%; height: 100%; margin-top: 70px; }
    nav { width: 100%; background: #fff; position: fixed; width: 100%; top: 0; left: 0; z-index: 50; border-bottom: solid 2px #e3e3e3; }
    nav ul { list-style: none; float: left; max-height: 250px; overflow-y: scroll; }
    nav ul li:first-child { display: block;}
    nav ul li { display: none; cursor: pointer; padding: 8px 0; }
    nav ul:hover li { display: block; }
    nav ul li + li:hover { background: #e3e3e3; }
    iframe { border: none; }
  </style>
</head>

<body>
  <nav>
    <ul>
      <li>load session...</li>
      <?php 
        $aFiles = scandir("raster/cache/");

        foreach ($aFiles as $aFile) {
          if ($aFile != ".." && $aFile != ".") {
            $cFile = str_replace(".json", "", $aFile);
            echo "<li onclick='loadSession(".$cFile."); visualize();'>load session (".$cFile.")</li>";
          }
        }
      ?>  
    </ul>  
  </nav>
  <div id="visuals">
    
  </div>

  <script type="text/javascript" src="raster/modules/visual.js"></script>
  <script type="text/javascript" src="raster/modules/caching.js"></script>
  <script type="text/javascript" src="raster/modules/events.js"></script>
  <script type="text/javascript" src="raster/raster.js"></script> 
</body>
