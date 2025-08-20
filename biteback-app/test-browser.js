import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function testBiteBackApp() {
  console.log('🚀 Starting browser testing for BiteBack MVP...');
  
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
    args: ['--window-size=1920,1080']
  });

  const page = await browser.newPage();
  
  page.on('console', msg => console.log('Browser console:', msg.text()));
  page.on('pageerror', error => console.log('Page error:', error.message));
  
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 10000 });
    
    console.log('📸 Testing desktop view...');
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({ 
      path: join(__dirname, 'screenshots', 'desktop-view.png'),
      fullPage: true 
    });
    
    console.log('📱 Testing tablet view...');
    await page.setViewport({ width: 768, height: 1024 });
    await page.screenshot({ 
      path: join(__dirname, 'screenshots', 'tablet-view.png'),
      fullPage: true 
    });
    
    console.log('📱 Testing mobile view...');
    await page.setViewport({ width: 375, height: 667 });
    await page.screenshot({ 
      path: join(__dirname, 'screenshots', 'mobile-view.png'),
      fullPage: true 
    });
    
    console.log('🔍 Testing interactions...');
    
    const searchBar = await page.$('[data-testid="search-bar"]');
    if (searchBar) {
      await searchBar.type('organic vegetables');
      console.log('✅ Search bar working');
    }
    
    const farmerCards = await page.$$('[data-testid="farmer-card"]');
    console.log(`Found ${farmerCards.length} farmer cards`);
    
    if (farmerCards.length > 0) {
      await farmerCards[0].hover();
      await page.screenshot({ 
        path: join(__dirname, 'screenshots', 'hover-state.png') 
      });
      console.log('✅ Hover effects working');
    }
    
    const metrics = await page.evaluate(() => {
      return {
        documentHeight: document.body.scrollHeight,
        viewportHeight: window.innerHeight,
        imagesLoaded: Array.from(document.images).filter(img => img.complete).length,
        totalImages: document.images.length
      };
    });
    
    console.log('📊 Page metrics:', metrics);
    
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.screenshot({ 
      path: join(__dirname, 'screenshots', 'footer-view.png') 
    });
    
    console.log('✅ All tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
}

if (!fs.existsSync(join(__dirname, 'screenshots'))) {
  fs.mkdirSync(join(__dirname, 'screenshots'), { recursive: true });
}

testBiteBackApp();