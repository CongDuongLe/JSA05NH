// array.splice() : sẽ là method đê xử lí array : cắt mảng, sửa mảng, thêm phần tử trong mảng

// cú pháp : arrayName.splice(vị trí bắt đầu thay đổi, số lượng item muốn xoá, những item muốn thêm vào)

// const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// bài toán 1 : bài toán cắt mảng : giống với array.slice()

// const cutArr = arr1.splice(2,0) // với tham số thứ 2 truyền vào là O : sẽ không xoá đi phần tử nào trong mảng

// console.log(cutArr)

// const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

// myFish[0] = 'angel'
// myFish[1] = 'clown'
// myFish[2] = 'mandarin'
// myFish[3] = 'sturgeon'

// const newFish = myFish.splice(2, 2, 'drum')
// với vị trí thay đổi là 2 : value tại myFish[2] : 'mandarin'
// 0 là số lượng item muốn xoá : vì truyền là số O nên sẽ không xoá đi item nào

// trường hợp xoá đi 2 giá trị ở vị trí bắt đầu xoá là 2

// cách chạy : b1 : tìm value tại vị trí có index = index chúng ta truyền vào hàm splice
// b2 : hàm splice() dò tham số thứ 2 truyền vào, nếu tham số truyền vào là 0 thì k xoá đi item nào, !=0 thì sẽ xoá đi item === lượng tham số ta truyền vào
// lưu ý : hướng xoá đi : từ trái qua phải (=== chiều dương của trục Ox trong toán học)
// b3 : hàm splice() tiếp tục tìm tham số thứ 3 chúng ta truyền vào, tiến hành thêm nó vào index === index tại bước 1
// console.log(myFish)

// const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// const newArr1 = arr1.splice(2, 3, 'hello', 'jsa', 05)

// console.log(arr1)

// JS là 1 ngôn ngữ bất đồng bộ

// trong jsb : chưa làm việc với promise : file JS chạy từ trên xuống dưới và từ trái qua phải

// setTimeout(() => {
//   console.log('dòng 1') // rơi vào xử lí bất đồng bộ
// }, 3000)

// timout =3s , JS đầu tiên sẽ lần lượt từ trên xuống, gặp timeout =3s => nó sẽ ngủ đông logic trong setTimeout() === timeout mà người dùng truyền vào
// tiếp tục thực hiện các logic tiếp theo ( tạm thời bỏ qua logic của hàm setTimeout() )

// console.log('dòng 1')

// setTimeout(() => {
//   console.log('dòng 2')
// }, 5000)

// console.log('dòng 3 ')
// thứ tự in ra trong log với 3 dòng console là gì ?
// dòng3 => dòng 1 => dòng 2

// bài toán thực : buổi 9 sẽ được làm quen

// net-working : thay vì hard-code data => lấy data từ phía back-end trả về và render ra màn hình

// trường hợp 1 : internet có tốc độ nhanh => độ trễ thấp => người dùng k phải chờ đợi trong khi load data => sẽ không bị ảnh hưởng đến trải nghiệm
// trường hợp 2 : internet chậm => hiển thị màn hình trắng( màn hình có hiệu ứng loading lag -skeleton) => sẽ ảnh hướng đến trải nghiệm người dùng

// vấn đề : trong 1 trường hợp nào đó , người dùng muốn hiển thị dòng 2 trước dòng 1 thì phải làm như nào ?
// -> lúc này , bài toán về xử lí bất đồng bộ của js sẽ được áp dụng

// 2 hàm bất đồng bộ cơ bản của js , là  hàm built-in : setTimeout() và setInterval()

// setTImeout() là hàm bất đồng bộ của JS, hàm này có nhiệm vụ sẽ thực thi 1 logic sau 1 khoảng thời gian mà người dùng quy định , nỏ chỉ chạy 1 lần
// setInterval() : là hàm bất đồng bộ, mang nhiệm vụ là thực thi 1 logic sau 1 khoảng thời gian nhưng hàm này sẽ có tính chất loop( chạy liên tục sau mỗi khoảng thời gian mà người dùng quy định)

// b3 : arrow Function () => {}

// cú pháp của setInterval, setTimout : callback của 2 hàm này giống như hàm map, filter, reduce  : là 1 hàm callback
// const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const mapArr = numberArr.map(
//     (item, index) => {
//         return item*2
//     }
// )

// const fakeData = [
//   {
//     id: 1,
//     name: 'Messi',
//   },
//   {
//     id: 2,
//     name: 'Ronaldo',
//   },
//   {
//     id: 3,
//     name: 'Benzema',
//   },
//   {
//     id: 4,
//     name: 'Salah',
//   },
//   {
//     id: 5,
//     name: 'Neymar',
//   },
// ]

// const listRenderQuery = document.querySelector('#list-render')
// bài toán : sau 3s sẽ render ra list fakeData, in nó lên trên cửa sổ trình duyệt

// b1 : cần phải lặp qua mảng fakeData để lấy được value của các item trong mảng

// setTimeout(() => {
//     fakeData.map(
//         (item, index ) => {
//             // console.log(item)
//             let divChild = document.createElement('div')
//             divChild.innerText = item.name
//             listRenderQuery.appendChild(divChild)
//         }
//     )
// }, 3000);





// b2 : hiển thị nội dung sau khi map lên trình duyệt
// b3 : chờ đợi sau 3s rồi mới hiển thị lên trên trình duyệt




const divTextQuery = document.querySelector('.div-text')


// bài toán : chũ đổi từ màu đỏ sang màu xanh dương sau mỗi 1s

// trong JSB các bạn đã được học propotype của class trong DOM chưa ?

// add() : thêm 1 class vào 1 element
// remove() : xoá 1 class của 1 element
// contanin() : kiểm tra xem có tồn tại tên class hay không
// toggle() : sẽ có nhiệm vụ gần giống như add(), bản thân khi dịch nghĩa chữ toggle : thay đổi như
// 1 cái công tác, hay 1 cái cần gạt switch 


// ví dụ thực tế : đèn học => nút bấm : bấm vào lần đầu => đèn sáng
// bấm lần tiếp theo : đèn tắt
//=> ứng dụng thực tế của toggle sẽ giống như nút bấm của đèn học

// tìm hiểu về propotype của class trong DOM :
// add() : thêm 1 class vào trong element

// divTextQuery.classList.add('blue-text')


// bất đồng bộ setInterval() : lặp đi lặp lại hành động sau 1 khoảng thời gian cho trước

setInterval(() => {
    divTextQuery.classList.toggle('blue-text')
}, 1000);


const inputQuery = document.querySelector('#input')
const inputVal = inputQuery.value
const inputWrapper = document.querySelector('.input-wrapper')



const faker = [
    {
        id: 1,
        name: 'Messi',
    },
    {
        id: 2,
        name: 'Ronaldo',
    },
    {
        id: 3,
        name: 'Benzema',
    },
    {
        id: 4,
        name: 'Salah',
        club : 'Liverpool'
    },
    {
        id: 5,
        name: 'Neymar',
    },
]




const handleInput = (event) => {
    console.log('value in input', event.target.value)
    event.preventDefault()
    inputWrapper.innerText = event.target.value
    faker.map(
        (item, index) => {
            //name include target.value
            if(item.name.includes(event.target.value)) {
                let divChild = document.createElement('div')
                divChild.innerText = item?.club || 'null'
                inputWrapper.appendChild(divChild)
            }
        })
}
