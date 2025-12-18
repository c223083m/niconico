// Function to load an HTML file and inject it into a specified element
const loadHTML = (filePath, elementId) => {
  return fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Could not load ${filePath}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(data => {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = data;
      } else {
        console.error(`Element with ID "${elementId}" not found.`);
      }
    })
    .catch(error => console.error('Error loading HTML:', error));
};
