import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  console.log('Navigating to http://localhost:5173...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000)); // wait for transitions & fonts

  // 1. 메인 웹사이트 전체 페이지 풀 스크롤 캡처
  const fullPagePath = path.join(rootDir, 'portfolio_full_page.png');
  console.log(`Taking full page screenshot -> ${fullPagePath}...`);
  await page.screenshot({
    path: fullPagePath,
    fullPage: true
  });

  // 2. 메인 웹사이트 뷰포트(Hero 영역) 캡처
  const mainViewPath = path.join(rootDir, 'portfolio_main.png');
  console.log(`Taking main viewport screenshot -> ${mainViewPath}...`);
  await page.screenshot({
    path: mainViewPath
  });

  // 3. 이력서(Printable Resume) PDF 생성
  const pdfPath = path.join(rootDir, 'resume.pdf');
  console.log(`Generating resume PDF -> ${pdfPath}...`);
  await page.emulateMediaType('print');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '10mm',
      right: '12mm',
      bottom: '10mm',
      left: '12mm'
    }
  });

  console.log('All captures completed successfully!');
  await browser.close();
}

run().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
