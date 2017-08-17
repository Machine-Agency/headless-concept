// Require Puppeteer
const puppeteer = require('puppeteer');

(async() => {

	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	const load_page = 'https://www.investottawa.ca/blog/';
	const selector_loadmore = '.btn--load-more-posts';
	const next_results_at = 10; // What index of our loop indicates we've loaded more results?

	// Visit the blog
	await page.goto(load_page, {waitUntil: 'networkidle'});

	// Click Load More
	await page.click(selector_loadmore);

	// Wait for the results to show up
	//await page.waitForSelector('.blog-listing:nth-child(' + next_results_at + ')');

	// Extract the results from the page
	const links = await page.evaluate(() => {
	   const anchors = Array.from(document.querySelectorAll( '.blog-listing' ));
	   return anchors.map(anchor => anchor.textContent);
	 });

	console.log(links.join('\n'));
	browser.close();

})();
