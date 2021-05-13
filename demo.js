let a = +prompt('nhập a: ')
let b = +prompt('nhập b: ')
if (a == 0) {
    if (b == 0) {
        alert("pt có vỗ số nghiệm")
    } else {
        alert("pt vô nghiệm")
    }
} else {
    c = -b / a
    alert("pt có nghiệm là:" + c)
}