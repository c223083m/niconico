// Function to load an HTML file and inject it into a specified element
const loadHTML = (filePath, elementId, basePath = '') => {
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

        // Initialize hamburger menu if this is the header
        if (elementId === 'header-placeholder') {
          const hamburgerBtn = element.querySelector('.hamburger-menu');
          if (hamburgerBtn) {
            hamburgerBtn.onclick = (e) => {
              e.stopPropagation();
              document.body.classList.toggle('nav-open');
              const nav = element.querySelector('.global-nav');
              if (nav) nav.classList.toggle('active');
            };
          }
        }

        // Adjust paths if a basePath is provided
        if (basePath) {
          // Adjust links (a tags)
          const links = element.querySelectorAll('a');
          links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('javascript:')) {
              link.setAttribute('href', basePath + href);
            }
          });

          // Adjust images (img tags)
          const images = element.querySelectorAll('img');
          images.forEach(img => {
            const src = img.getAttribute('src');
            if (src && !src.startsWith('http') && !src.startsWith('data:')) {
              img.setAttribute('src', basePath + src);
            }
          });

          // Adjust iframes (iframe tags)
          const iframes = element.querySelectorAll('iframe');
          iframes.forEach(iframe => {
            const src = iframe.getAttribute('src');
            if (src && !src.startsWith('http') && !src.startsWith('data:')) {
              iframe.setAttribute('src', basePath + src);
            }
          });
        }
      } else {
        console.error(`Element with ID "${elementId}" not found.`);
      }
    })
    .catch(error => console.error('Error loading HTML:', error));
};
