//  kiến thức đã học trong khoá JSA : animation,
// các cách khai báo biến : var,let, const

//  phân biệt var, let, const
// var : có thể thay đổi được
// const : không thể thay đổi được
// let :có thể thay đổi được nhưng 

//// var có khả năng tự định nghĩa lại chính nó : 

var a =1 
var a =2 
console.log(a)



// với let : thì nó chỉ có khả năng thay đổi giá trị, chứ không thế định nghĩa lại chính nó :

let b =1 
// thay đổi giá trị 
b++

console.log('b', b)

// let b = 3 // báo lỗi


// const : khai báo 1 lần, dùng trong 1 phạm vi có thể là 1 hàm, 1 file, hoặc 1 đoạn logic ngắn

function getName(params) {
    const name = 'JSI14'

    console.log('name', name)  // trả về giá trị của name : JSI14
    
}
getName()

console.log('name', name)  // name is not defined

// dự đoán kết quả tại dòng 33 và 38




// cac hàm của LocalStorage

// 1. setItem(key, value) : dùng để lưu dữ liệu vào localStorage

//2. getItem(key) : dùng để lấy dữ liệu từ localStorage theo key, dữ liệu trả về là value

//3. removeItem(key) : dùng để xóa dữ liệu trong localStorage

//4. clear() : dùng để xóa tất cả dữ liệu trong localStorage



// nhiệm vụ : lưu dữ liệu vào 1 biến tên là testlocalStorage có key là KEY và value là VAL
// sau đó in ra màn hình
const KEY = 'JSI14'
const VAL = 'Hom nay la buoi 1'

const KEY2 = 'Messi'
const VAL2 = 'Messi là cầu thủ bóng đá mang quốc tịch Argentina'

const KEY3 = 'Benzema'
const VAL3 = 'Benzema là cầu thủ bóng đá mang quốc tịch Pháp'

// lưu
// setItem sẽ gồm 2 đối số : đối số đầu tiên : key ; đối số thứ 2 : value
localStorage.setItem(KEY, VAL)
localStorage.setItem(KEY2, VAL2)  // lưu messi
localStorage.setItem(KEY3, VAL3) // lưu benzema
// lấy giá trị và lưu vào biến testLocalStorage

const testLocalStorage = localStorage.getItem(KEY) // trả về value tương ứng với key

// tạo 2 biến la getMessi và getBenzema lấy giá trị của Messi và Benzema

const getMessi = localStorage.getItem(KEY2)
const getBenzema = localStorage.getItem(KEY3)



console.log(testLocalStorage) // 
console.log(getMessi) //'Messi là cầu thủ bóng đá mang quốc tịch Argentina'
console.log(getBenzema) // Benzema là cầu thủ bóng đá mang quốc tịch Pháp'

// const testlocalStorage = localStorage.getItem('JSI14')

// localStorage : chỉ lưu được dữ liệu dưới dạng string
// bài toán đặt ra : muốn lưu obj, array thì làm như thế nào ?
// b1 : vẫn tạo key cho dễ nhớ 
// b2 : chuyển obj hoặc array thành String = phương pháp JSON.stronify(obj hoặc array)
// b3 : tiến hành lưu data vào trong storage
// b4 : nếu cần thiết phải lấy dữ liệu từ localStorage , ta phải chuển đổi dữ liệu từ dạng string về dạng array hay obj ban đầ : JSON.parse(data)


// const footballPlayer = [
//     {
//         id : 1,
//         name : 'Messi',
//         age : '35',
//         club : 'PSG'
//     }, 
//     {
//         id : 2,
//         name : 'Salah',
//         age : '30',
//         club : 'Liverpool'
//     }, 
//     {
//         id : 3,
//         name : 'Neymar',
//         age : '30',
//         club : 'PSG'
//     }, 
//     {
//         id : 4,
//         name : 'Benzema',
//         age : '35',
//         club : 'Real Madrid'
//     }, 
    
// ]

const footballPlayerKey = 'footballPlayer' // xong bước 1 : tạo key

// const footballPlayerString = JSON.stringify(footballPlayer) // xong bước 2 : chuyển footballPlayer thành string

// localStorage.setItem(footballPlayerKey,footballPlayerString)

const getFootballPlayer = localStorage.getItem(footballPlayerKey) // lấy dữ liệu từ storage
console.log('getFootballPlayer', typeof getFootballPlayer) // string
// b4 : chuyển dữ liệu từ string về array gốc
const finalGetFootballPlayer = JSON.parse(getFootballPlayer)
console.log(typeof finalGetFootballPlayer)

// bài toán : viết function để in ra console.log của tên các cầu thủ trong mảng footballPlayer với điều kiện data phải lấy từ trong localStorage

// const footballPlayerName = localStorage.getItem(footballPlayerKey.name) // lấy dữ liệu từ storage
// console.log(footballPlayerName)


const nameQuery = document.querySelector('#name')
const ageQuery = document.querySelector('#age')
const clubQuery = document.querySelector('#club')
const btnQuery = document.querySelector('#btn')



function InRaLog(params) {
    for (let index = 0; index < finalGetFootballPlayer.length; index++) {
    //   console.log('name of football player', finalGetFootballPlayer[index].name)
    //   console.log('tuổi của cầu thủ', finalGetFootballPlayer[index].age)
    //   console.log('câu lạc bộ của cầu thủ', finalGetFootballPlayer[index].club)

        // create a list and append to the body




    }
}
// InRaLog()









// LocalStorage : lưu lại dữ liệu trên trình duyệt 
// 1. lưu dữ liệu :
// lưu theo kiểu key - value


// 2. lấy dữ liệu :
// 3. xóa dữ liệu :
