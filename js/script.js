let ladder = {
    step: 0,

    up: function () {
        this.step++;
        return this; // повертає об'єкт ladder
    },

    down: function () {
        this.step--;
        return this; // теж повертає ladder
    },

    showStep: function () {
        console.log(this.step);
        return this; // повертає ladder для подальшого ланцюжка, якщо потрібно
    }
};


ladder.up().up().down().showStep(); 