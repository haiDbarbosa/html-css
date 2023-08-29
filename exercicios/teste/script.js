// Sample array of silly beaver images (URLs)
const sillyBeaverImages = [
    'images/beaver1.jpg',
    'images/beaver2.jpg',
    'images/beaver3.jpg',
    'images/beaver4.jpg',
    'images/beaver5.jpg',
  ];
  
  let currentIndex = 0; // Track the index of the currently displayed image
  
  // Function to create and display the image gallery
  function displayImageGallery() {
    const imageGallery = document.getElementById('imageGallery');
  
    // Loop through the sillyBeaverImages array and create image elements
    for (let i = 0; i < sillyBeaverImages.length; i++) {
      const image = document.createElement('img');
      image.src = sillyBeaverImages[i];
      image.alt = `Silly Beaver ${i + 1}`;
      image.classList.add('galleryImage');
  
      // Add a click event listener to each image to open it in a larger view (lightbox)
      image.addEventListener('click', function () {
        openImageInLightbox(sillyBeaverImages[i]);
      });
  
      imageGallery.appendChild(image);
    }
  
    // Set up the click event for the "Next Image" button
    const nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', showNextImage);
  }
  
  // Function to show the next image in the gallery
  function showNextImage() {
    const galleryImages = document.querySelectorAll('.galleryImage');
    currentIndex = (currentIndex + 1) % galleryImages.length;
  
    // Hide all images and show the one at the current index
    galleryImages.forEach((image, index) => {
      image.style.display = index === currentIndex ? 'block' : 'none';
    });
  }
  
  // Function to open the clicked image in a lightbox view
  function openImageInLightbox(imageUrl) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
  
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Silly Beaver';
  
    lightbox.appendChild(image);
  
    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', function () {
      document.body.removeChild(lightbox);
    });
  
    document.body.appendChild(lightbox);
  }
  
  // Call the displayImageGallery function to show the images
  displayImageGallery();
  