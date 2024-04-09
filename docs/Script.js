$(function() {
  $.getJSON("data.json", function(data) {
    $("#output").pivotUI(data, {
      rows: ["attribute1"], // Make sure these attributes exist in your JSON data
      cols: ["attribute2"],
      vals: ["attributeToSum"],
      aggregatorName: "sum", // Use a valid aggregator name
      rendererName: "Table"
      // ... other options
    });
  }).catch(error => console.error('Error loading the JSON data:', error));
});
