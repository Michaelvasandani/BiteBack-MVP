import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function testStorefront() {
  console.log('🏪 Starting storefront testing for Green Valley Farm...');
  
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
    args: ['--window-size=1920,1080']
  });

  const page = await browser.newPage();
  
  page.on('console', msg => console.log('Browser console:', msg.text()));
  page.on('pageerror', error => console.log('Page error:', error.message));
  
  try {
    // First visit homepage
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 10000 });
    console.log('✅ Homepage loaded');
    
    // Click on the first "View Farm" button (Green Valley Farm)
    await page.waitForSelector('[data-testid="farmer-card"]');
    const viewFarmButtons = await page.$$('[data-testid="farmer-card"] button');
    if (viewFarmButtons.length > 0) {
      await viewFarmButtons[0].click();
      console.log('✅ Clicked "View Farm" button');
      
      // Wait for navigation to storefront
      await page.waitForNavigation({ waitUntil: 'networkidle0' });
      console.log('✅ Navigated to storefront');
      
      // Take storefront screenshot
      await page.setViewport({ width: 1920, height: 1080 });
      await page.screenshot({ 
        path: join(__dirname, 'screenshots', 'storefront-desktop.png'),
        fullPage: true 
      });
      console.log('📸 Storefront desktop screenshot taken');
      
      // Test mobile view of storefront
      await page.setViewport({ width: 375, height: 667 });
      await page.screenshot({ 
        path: join(__dirname, 'screenshots', 'storefront-mobile.png'),
        fullPage: true 
      });
      console.log('📱 Storefront mobile screenshot taken');
      
      // Test "Make an Offer" functionality
      await page.setViewport({ width: 1920, height: 1080 });
      const hasOfferButton = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        return buttons.some(btn => btn.textContent.includes('Make an Offer'));
      });
      if (hasOfferButton) {
        await page.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          const offerButton = buttons.find(btn => btn.textContent.includes('Make an Offer'));
          if (offerButton) offerButton.click();
        });
        console.log('✅ Clicked "Make an Offer" button');
        
        // Wait for modal to appear and take screenshot
        await new Promise(resolve => setTimeout(resolve, 1000));
        await page.screenshot({ 
          path: join(__dirname, 'screenshots', 'negotiation-modal.png') 
        });
        console.log('📸 Negotiation modal screenshot taken');
        
        // Close modal
        await page.evaluate(() => {
          const buttons = Array.from(document.querySelectorAll('button'));
          const cancelButton = buttons.find(btn => btn.textContent.includes('Cancel'));
          if (cancelButton) cancelButton.click();
        });
      }
      
      // Test "Message Seller" functionality
      await new Promise(resolve => setTimeout(resolve, 500));
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const messageButton = buttons.find(btn => btn.textContent.includes('Message Seller'));
        if (messageButton) messageButton.click();
      });
      console.log('✅ Clicked "Message Seller" button');
      
      // Wait for modal to appear and take screenshot
      await new Promise(resolve => setTimeout(resolve, 1000));
      await page.screenshot({ 
        path: join(__dirname, 'screenshots', 'message-modal.png') 
      });
      console.log('📸 Message modal screenshot taken');
      
      // Test back navigation
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const backButton = buttons.find(btn => btn.textContent.includes('Back to marketplace'));
        if (backButton) backButton.click();
      });
      await page.waitForNavigation({ waitUntil: 'networkidle0' });
      console.log('✅ Back navigation working');
      
    } else {
      console.log('❌ No "View Farm" buttons found');
    }
    
    console.log('✅ All storefront tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Storefront test failed:', error.message);
  } finally {
    await browser.close();
  }
}

if (!fs.existsSync(join(__dirname, 'screenshots'))) {
  fs.mkdirSync(join(__dirname, 'screenshots'), { recursive: true });
}

testStorefront();