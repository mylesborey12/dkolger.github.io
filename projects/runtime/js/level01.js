var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function (game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1,
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y) {
            var hitZoneSize = 25;

            var damageFromObstacle = 10;

            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

            sawBladeHitZone.x = x;

            sawBladeHitZone.y = y;

            game.addGameItem(sawBladeHitZone);

            var obstacleImage = draw.bitmap("img/beam.png");
            sawBladeHitZone.addChild(obstacleImage);

            obstacleImage.x = -24
            obstacleImage.y = -25

        }

        createSawBlade(400, 495);
        createSawBlade(800, 490);
        createSawBlade(1600, 577)


        var enemy = game.createGameItem("enemy", 25);
        var redSquare = draw.bitmap("img/enemy.png");
        redSquare.scaleX = .5
        redSquare.scaleY = .5
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);

        enemy.x = 400;
        enemy.y = groundY - 140;

        game.addGameItem(enemy);

        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
