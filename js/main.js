function calculate() {
    var choice = parseInt(document.getElementById('choice').value);
    var sum = 0;
    for(var i = 1; i < choice; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum = sum + i;
        }
    }
    document.getElementById('answer').value = sum;
}