// Fetch your JSON data and initialize PivotTable.js
fetch('data.json')
  .then(response => response.json())
  .then(function(data) {
    // Initialize the pivot table with your data
    $("#output").pivotUI(data, {
      // PivotTable.js options
      // ...
    });
  })
  .catch(error => console.error('Error loading the JSON data:', error));
