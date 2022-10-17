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
dmm
// git remote set - url origin https://github.com/minhalo/Angular_test.git
