// Image paths and Base64-encoded image data mapping
const imagePaths = {
    image1: 'roses.png',
    image2: 'pinkflower.png',
    image3: 'lotus.png'
};

// Initialize selections
let selectedImage = "";
let selectedTitle = "";
let selectedText = "";
let selectedTemplate = "";

// Function to update the display with selected content
function updateDisplay() {
    // Update placeholders in the third section
    const contentSection = document.getElementById('rendered-content');
    contentSection.innerHTML = `
        <img src="${selectedImage || '[Image Placeholder]'}" alt="Selected Image" style="width: 100px; height: 100px;">
        <h3>${selectedTitle || '[Title Placeholder]'}</h3>
        <p>${selectedText || '[Text Placeholder]'}</p>
    `;

    // Reflect template in the 3rd section
    document.getElementById('template-output').textContent = selectedTemplate ? `Current Template: ${selectedTemplate}` : "";
}

// Event listener for image selection
document.querySelectorAll('input[name="image"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        selectedImage = imagePaths[this.value]; // Get the corresponding image path
        updateDisplay();
    });
});

// Event listener for title selection
document.querySelectorAll('input[name="title"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        selectedTitle = this.value;
        updateDisplay();
    });
});

// Event listener for text selection
document.querySelectorAll('input[name="text"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        selectedText = this.value;
        updateDisplay();
    });
});

// Event listener for template selection
document.querySelectorAll('input[name="template"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        selectedTemplate = this.value;
        updateDisplay();
    });
});

// Function to download content as HTML

// Function to download content as HTML
function downloadHtml() {
    const selectedContent = `
        <html>
        <head><title>Selected Retail Ad</title></head>
        <body>
            <h2>${selectedTemplate ? `Template: ${selectedTemplate}` : ""}</h2>
            <img src="${selectedImage || '[Image Placeholder]'}" alt="Selected Image" style="width: 100px; height: 100px;">
            <h3>${selectedTitle || '[Title Placeholder]'}</h3>
            <p>${selectedText || '[Text Placeholder]'}</p>
        </body>
        </html>
    `;
    
    // Create a Blob with the content
    const blob = new Blob([selectedContent], { type: 'text/html' });

    // Create a link element and set the download attribute
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    
    // Name the file dynamically
    const fileName = `selected_ad_${selectedTemplate || 'template'}.html`;

    // Set the suggested filename
    link.download = fileName;

    // Trigger the download
    link.click();
}

