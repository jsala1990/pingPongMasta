function Background() {

}

Background.prototype.draw = function(context) {
	context.fillStyle = '#000' //black background
	context.fillRect(0, 0, game.width, game.height)

	context.fillStyle = '#fff'
	context.font = '40px monoscape'
 	context.fillText(game.player.score, game.width * 3/8, 50)
	context.fillText(game.bot.score, game.width * 5/8, 50)
}

var canvas = $('canvas')[0],
	game = new Game(canvas)

// need to add things to draw
game.entities = [
	new Background(),
	game.ball = new Ball(), //this is so that we can reference the other stuff in terms of the game
	game.player = new Player(),
	game.bot = new Bot()
]

game.start()
canvas.focus()