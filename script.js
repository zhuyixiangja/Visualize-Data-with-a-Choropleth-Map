<!DOCTYPE html>
<html>
  <head>
    <title>FCC: D3 Choropleth Map</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/d3-scale-chromatic@3.0.0/dist/d3-scale-chromatic.min.js"></script>
  </head>
  <body>
    <div id="main">
      <h1 id="title">United States Educational Attainment</h1>
      <div id="description">
        Percentage of adults age 25 and older with a bachelor's degree or higher
        (2010-2014)
      </div>
      <svg width="960" height="600"></svg>
      <div id="source">
        Source:
        <a
          href="https://www.ers.usda.gov/data-products/county-level-data-sets/download-data.aspx"
          >USDA Economic Research Service</a
        >
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
