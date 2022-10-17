let a = {
    value: 0,
    valueOf: function () {
        return this.value = 2;
    }
};
let b = false
if (a == 1 && a == 2 && a == 3) {
    b = true
}

console.log(a == 1);