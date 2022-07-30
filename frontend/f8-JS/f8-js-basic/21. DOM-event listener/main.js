// EVent listener
var btn = document.getElementById('btn');
console.log(btn)
/// 1. Xử lý nhiều việc khi 1 event xảy ra
///2. Lắng nghe/ hủy bỏ lắng nghe
// sau 3 giây thì click mới có tác dụng


// setTimeout(function () {
//     //viec 1
//     console.log('Viec 1');
//     //viec 2
//     console.log('Viec 2');
//     //viec 3
//     alert('Viec 3')

// }, 3000);
// 2 đối số chính event name 
btn.addEventListener('click', viec1)
btn.addEventListener('click', function (e) {
    console.log('viec 2')
})
btn.addEventListener('click', function (e) {
    console.log(Math.random())
})

//
function viec1() {
    console.log('viec 1');
}
btn.addEventListener('click', viec1);
setTimeout(function () {
    btn.removeEventListener('click', viec1)
}, 3000)
//dom event sử dụng đơn giản , k cần gỡ . addeventlistner nhiều sự kiện , cần gỡ bỏ lắng nghe trong TH cụ thể nào đó
