const baconTextElement = document.getElementById("baconText");
const refreshButton = document.getElementById("refreshButton");
const loadingIndicator = document.getElementById("loadingIndicator");

async function fetchBaconIpsum() {
  try {
    loadingIndicator.classList.remove("hidden");
    const response = await fetch("https://baconipsum.com/api/?type=all");
    const data = await response.json();
    baconTextElement.innerText = data[0]; // Display the fetched bacon ipsum text
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loadingIndicator.classList.add("hidden");
  }
}

refreshButton.addEventListener("click", fetchBaconIpsum);

// Fetch bacon ipsum text when the page loads
window.addEventListener("load", fetchBaconIpsum);
