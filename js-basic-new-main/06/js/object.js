var toyRobot = {
    productId: "123-12",
    name: "Robot",
    price: "25,000",
    madeIn: "korea",
    quantiry: 10,
    showStock: function() {
        document.querySelector('#display').innerHTML = this.name + "제품은 " + this.quantiry + "개 남아있습니다"
    }
};

toyRobot.showStock();