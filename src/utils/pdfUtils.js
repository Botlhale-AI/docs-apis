import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function fetchMarkdownContent(url) {
  console.log(`Fetching content from: ${url}`);
  const response = await fetch(url);
  const text = await response.text();
  console.log(`Fetched content from: ${url}`);
  return text;
}

async function generatePDF(content, filePath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(content);
  await page.pdf({ path: filePath, format: 'A4' });
  await browser.close();
}

export async function downloadPDF() {
  if (typeof window === 'undefined') {
    console.log("Not in a browser environment, exiting downloadPDF function.");
    return;
  }
  console.log("Within the function for downloading PDF");

  const docFiles = [
    '/docs/API.md',
    '/docs/Chatbot APIs.md',
    '/docs/Translation API.md',
    '/docs/Text-to-Speech API.md',
    '/docs/Speech-to-Text API.md',
    '/docs/Vela APIs.md'
  ];

  const tempDir = path.join(__dirname, 'temp');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  const pdfPaths = [];

  for (const file of docFiles) {
    const content = await fetchMarkdownContent(file);
    const tempFilePath = path.join(tempDir, `${path.basename(file, '.md')}.pdf`);
    await generatePDF(content, tempFilePath);
    pdfPaths.push(tempFilePath);
  }

  const mergedPdf = await PDFDocument.create();
  for (const pdfPath of pdfPaths) {
    const pdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const mergedPdfBytes = await mergedPdf.save();
  const mergedPdfPath = path.join(__dirname, 'documentation.pdf');
  fs.writeFileSync(mergedPdfPath, mergedPdfBytes);

  console.log('PDF generated successfully');
  pdfPaths.forEach((pdfPath) => fs.unlinkSync(pdfPath)); // Clean up the temporary files
  fs.rmdirSync(tempDir);

  const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'documentation.pdf';
  link.click();
}