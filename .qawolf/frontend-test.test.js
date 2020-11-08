const qawolf = require("qawolf");

let browser;
let context;

beforeAll(async () => {
  browser = await qawolf.launch();
  context = await browser.newContext();
  await qawolf.register(context);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("frontend-test", async () => {
  const page = await context.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
  await page.click('[placeholder="Search.."]');
  await page.fill('[placeholder="Search.."]', "san francisco");
  await page.click('[aria-label="person"]');
  await page.click('text="66,174"');
  await page.click("text=2");
  await page.fill('[placeholder="Search.."]', "");
  await page.click("text=1000");
  await page.click('[aria-label="person"]');
});
