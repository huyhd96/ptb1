let a = +prompt('nhập a: ')
let b = +prompt('nhập b: ')
let c = -b / a
if (a == 0) {
    alert(" pt vô nghiệm")
} else if (a === 0 && b === 0) {
    alert("pt có vỗ số nghiệm")
} else {
    alert("pt có nghiệm là:" + c)
}