var tableTennis = {}
tableTennis.counter = 0;

tableTennis.play = function() {
    var that = this;
    var swing = function() {
        that.counter++;
    }
    var ping = function() {
        console.log("Ping " + that.counter);
    }
    var pong = function() {
        console.log("Pong " + that.counter);
    }
    swing();
    ping();
    pong();
}

tableTennis.play();
tableTennis.play();
tableTennis.play();


tableTennis.playApply = function() {
    var swing = function() {
        this.counter++;
    }
    var ping = function() {
        console.log("Ping " + this.counter);
    }
    var pong = function() {
        console.log("Pong " + this.counter);
    }

    swing.apply(this);
    ping.apply(this);
    pong.apply(this);

}

tableTennis.counter = 0;
tableTennis.playApply();
tableTennis.playApply();
tableTennis.playApply();