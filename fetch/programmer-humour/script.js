// This function gets the comic from the API
function getComic() {
  // The API URL
  const url = "https://xkcd.now.sh/?comic=latest";

  // Call the API
  fetch(url)
    // Convert response to JSON
    .then(function (response) {
      return response.json();
    })
    // Use the data
    .then(function (data) {
      // Log data to console
      console.log(data);

      // Get the image element
      const img = document.getElementById("comic");

      // Set image source from API data
      img.src = data.img;
    })
    // Handle errors
    .catch(function (error) {
      console.log("Error:", error);
      alert("Failed to load comic. Check console for details.");
    });
}

// Get comic when page loads
getComic();
