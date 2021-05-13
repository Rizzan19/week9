export default (express, puppeteer) => {
  const app = express();

  app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain')
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
    next()
  });

  app.get('/login/', (req, res) => {
    res.send('rizzan18')
  })

  app.get('/test/', async (req, res) => {
    const { URL } = req.query
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process',
        '--disable-gpu'
      ]
    });
    const page = await browser.newPage()
    await page.goto(URL)
    await page.click('#bt')
    const value = await page.evaluate(async () => {
      const input = document.getElementById('inp')
      return input.value
    })
    res.send(value)
  })

  app.all('*', (req, res) => {
    res.send('rizzan18')
  })

  return app;
}
