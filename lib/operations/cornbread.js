module.exports = {
  name: 'Cornbread',
  url: '/cornbread/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/cornbread/:name/:from', function (req, res) {
      const message = `What in the cornbread fuck, ${req.params.name}?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
