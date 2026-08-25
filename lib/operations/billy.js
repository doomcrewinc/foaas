module.exports = {
  name: 'billy',
  url: '/billy/:name',
  fields: [
    { name: 'Name', field: 'name' }
  ],

  register (app, output) {
    return app.get('/billy/:name', function (req, res) {
      const message = `${req.params.name} what you've just said is one of the most insanely idiotic things I have ever heard. At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points, and may God have mercy on your soul.`
      const subtitle = `- ${req.params.name}`
      return output(req, res, message, subtitle)
    })
  }
}
