module.exports = {
  name: 'Deployment',
  url: '/deployment/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/deployment/:from', function (req, res) {
      const message = 'This deployment can go and fuck off.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
