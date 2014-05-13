// The game engine

function Game(canvas) {
	var self = this

  this.context = canvas.getContext("2d")
  this.width = canvas.width
  this.height = canvas.height

  // Keep track of key states
  // Eg. :
  //    game.keyPressed.up === true // while UP key is pressed
  //    game.keyPressed.up === false // while UP key is released

  this.keyPressed = {}

  $(canvas).on('keydown keyup', function(e) {
    var keyName = Game.keys[e.which]

    if(keyName) {
      // self.keyPressed.up = true on keydown
      // will be set to false on keyup
      self.keyPressed[keyName] = e.type === 'keydown'
      e.preventDefault()
    }
  });

}

Game.keys = {
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}

Game.prototype.start = function() {
  var self = this // this is a gotcha of javascript, must review
  var fps = 60, interval = 1000 / fps //ms per frame

  setInterval(function() {
    self.update()
    self.draw()
  }, interval)
}

Game.prototype.update = function() {
  this.entities.forEach(function(entity) {
    if(entity.update) entity.update() // bc not all entities have an update function,is there an update function, so why not has property?
  })
}

Game.prototype.draw = function() {
  var self = this

  this.entities.forEach(function(entity) {
    if(entity.draw) entity.draw(self.context) // we have to pass in its context
  })
}
