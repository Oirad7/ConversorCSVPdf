/*
HMTL-PDF foi deprecated (descontinuado), substituido pelo PUPPETER

https://www.npmjs.com/package/puppeteer

artigo explicativo: https://www.bannerbear.com/blog/how-to-convert-html-into-pdf-with-node-js-and-puppeteer/#step-1-import-the-file-system-module

*/

const puppeteer = require('puppeteer');

class PDFWriter{
    static async WritePDF(filename, html){

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(html, { waitUntil: 'domcontentloaded' });

        // To reflect CSS used for screens instead of print
        await page.emulateMediaType('screen');


        try{
        // Downlaod the PDF
        const pdf = await page.pdf({
            path: `${filename}.pdf`,
            margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
            printBackground: true,
            format: 'A4',
        });
        } catch (err) {
        console.log('Erro ao gerar pdf: \n\ Failed to generate PDF' + err);
        }

        // Close the browser instance
        await browser.close();

    }
}

module.exports = PDFWriter;