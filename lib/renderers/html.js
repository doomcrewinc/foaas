const sanitizer = require('sanitizer')

module.exports = {
  name: 'HTML',
  mime: 'text/html',

  render (req, res) {
    const message = sanitizer.escape(req.message)
    const subtitle = sanitizer.escape(req.subtitle)
    res.set('Content-Type', 'text/html')
    return res.send('<!DOCTYPE html> <html> <head> <title>FOAAS - ' + message + ' ' + subtitle + '</title> <meta charset="utf-8"> <meta property="og:title" content="' + message + ' ' + subtitle + '"> <meta property="og:description" content="' + message + ' ' + subtitle + '"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="//cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"> </head> <body style="margin-top:40px;"> <div class="container"> <div id="view-10"> <div class="hero-unit"> <h1>' + message + '</h1> <p><em>' + subtitle + '</em></p> </div> </div> <p style="text-align: center"><a href="https://foaas.io">foaas.io</a></p> </div> </body> </html>'
    )
  }
}
