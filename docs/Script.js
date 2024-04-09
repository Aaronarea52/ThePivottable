// Fetch your JSON data and initialize PivotTable.js
fetch('data.json')  // Make sure 'data.json' is the correct path to your JSON file
  .then(response => response.json())
  .then(function(data) {
    // Initialize the pivot table with your data
    $("#output").pivotUI(data, {
      rows: ["attribute1"], // attributes from your JSON data
      cols: ["attribute2"],
      aggregatorName: "sum", // can be "count", "average", "sum", "min", "max", etc.
      vals: ["attributeToSum"],
      rendererName: "Table", // can be "Table", "Bar Chart", "Heatmap", etc.
      rendererOptions: {
        table: {
          clickCallback: function(e, value, filters, pivotData) {
            // code to run on cell click
          }
        }
      }
    });
  })
  .catch(error => console.error('Error loading the JSON data:', error));
