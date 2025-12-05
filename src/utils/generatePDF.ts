/**
 * PDF Generation Utility (simplified & robust)
 *
 * This version avoids manual slicing bugs.
 * It:
 * 1. Adds the "printing" class to <body> so print CSS is applied.
 * 2. Captures the ENTIRE resume area as one tall canvas.
 * 3. Uses that single image across multiple A4 pages, shifting it up
 *    for each page so no content (like Strengths or Extra-Curricular)
 *    gets cut off.
 * 4. Saves the PDF as "Tejaswini_Penki_Resume.pdf".
 */

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const generatePDF = async (): Promise<void> => {
    // Use #print-root if present, otherwise fall back to #resume-root
    const element =
        document.getElementById("print-root") ||
        document.getElementById("resume-root");

    if (!element) {
        console.error("Could not find #print-root or #resume-root element");
        return;
    }

    // Apply print styles
    document.body.classList.add("printing");

    try {
        // Give the browser a moment to apply print layout
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Capture the FULL height of the resume
        const canvas = await html2canvas(element, {
            scale: 2,                 // higher = sharper image
            useCORS: true,
            logging: false,
            backgroundColor: "#ffffff",
            windowWidth: element.scrollWidth,
            windowHeight: element.scrollHeight,
        });

        const imgData = canvas.toDataURL("image/png");

        // Create an A4 PDF (in points)
        const pdf = new jsPDF("p", "pt", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        // Scale the captured image to the full page width
        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        // First page
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Additional pages: shift the same image up by one page each time
        while (heightLeft > 0) {
            position -= pageHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        // Download the PDF
        pdf.save("Tejaswini_Penki_Resume.pdf");
    } catch (err) {
        console.error("Error generating PDF:", err);
        alert("Error generating PDF. Please try again.");
    } finally {
        // Remove print styles
        document.body.classList.remove("printing");
    }
};
