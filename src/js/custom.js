document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');
  const downloadButton = document.getElementById('download-pdf-button');
  if (downloadButton) {
    console.log('Download button found');
    downloadButton.addEventListener('click', function () {
      console.log('Download button clicked');
      import('../utils/pdfUtils').then(({ downloadPDF }) => {
        console.log('Imported downloadPDF function');
        downloadPDF();
      }).catch(error => {
        console.error('Error importing downloadPDF function:', error);
      });
    });
  } else {
    console.log('Download button not found');
  }
});