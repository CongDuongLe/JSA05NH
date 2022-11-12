// các vòng lặp được học trong khoá JSB :

// for, for in, for of
// while, do while 

// for in dùng làm gì : lặp qua các key của obj, hay mảng
// for of : lặp qua value tương ứng với các key 


const arr = [1,2,3,4,5,7,8,9]


// index trong array : sẽ được đánh từ vị trí số 

// arr[0] = 1
// arr[2] = 3
// arr[6] = 8


// for (const index in arr) {
//     console.log('index', index)
// }

// for (const value of arr) {
//     console.log('value', value)
// }


// khai niệm về hàm arrow function ? 

// định nghĩa : dịch word by word : arrow ( mũi tên), function (hàm)
// arrow function : 1 hàm có chứa mũi tên 
// hàm arrow fnc : sẽ có đủ các tính chất của 1 hàm được khai báo theo dạng thông thường


function turnOnAlert(params) {
    alert('hello')
}


// cú pháp : từ khoá khai báo + tên hàm = (tham số) => { logic của hàm}

const byArrowFunction = (params) => {
    return (
        alert(' dùng arrow function')
    )
}


// vòng lặp nâng cao của JavaScript : 
//1, vòng lặp map() : array.map() : arrow funcion () => {}

// cú pháp : arrayName.map(
//  () => {
    // logic của hàm cần trả về
//}
//)

// bài toán : nhân đôi các giá trị trong mảng arr 
// ứng dụng hàm map để nhân đôi giá trị trong mảng arr

// bình thường : khi lấy giá trị trong mảng : dùng từ khoá là value

// khi dùng hàm map cần chú ý : chúng ta sẽ có 2 tham số cần truyền vào trong khối 
// ngoặc () của hàm arrow function bên trong : item, index

// khi hàm map() chạy : item sẽ là từng giá trị của mảng mà mình map qua ( = for of)
// index sẽ là các vị trí của từng giá trị trong mảng ( = for in)

// const arrX2 = arr.map(
//     (item, index) => {
//         return item = item*2
//     }
// )

// console.log('arrX2', arrX2)

// const arr = [1,2,3,4,5,7,8,9]

// dòng 72 sẽ có ý nghĩa như sau : 
// mảng arr = [1,2,3,4,5,7,8,9]
// dòng 72 thực hiện logic : lấy từng giá trị của mảng arr ứng với các index từ [0] -> arr.length -1
// sau đó thưc hiện phép gán item = item*2 : nhân đôi các giá trị của mảng arr 
// hàm return sẽ trả về các giá trị mới sau được nhân 2, mảng arrX2 sẽ hứng các giá trị này


const bigArr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// nhiệm vụ : sử dụng vòng map để lấy ra các số chia hết cho 2 trong mảng bigArr ( 5 phút )
const chiaHetCho2 = []

bigArr.map(
    (item, index) => {
        if(item % 2 == 0) {
            return chiaHetCho2.push(item)
        } else {
            return null
        }
    }
)

console.log('chiaHetCho2', chiaHetCho2)


const singers = [
    {
        id : 1,
        name : 'Mono',
        age : 22,
        gender : 'male'
    }, 
    {
        id : 2,
        name : 'M-TP',
        age : 28,
        gender : 'male'
    }, 
    {
        id : 3,
        name : 'Chi pu',
        age : 28,
        gender : 'female'
    },
    {
        id : 4,
        name : 'J97- Jack5M',
        age : 25,
        gender : 'male'
    }
]

// nhiệm vụ : lặp qua mảng singers, thực hiên logic tìm ra người có độ tuổi là nhỏ nhất, in tên người đấy lên trên console.log()
// có 5 phút để làm bài

// b1 : sẽ tìm ra số tuổi lớn nhất trong mảng singers

let maxAge = 0 // tạo 1 biến để hứng giá trị age lớn nhất trong mảng singers, giá trị mặc định = 0
// b2 : dùng hàm map() kết hợp với if để tìm ra giá trị age lớn nhất
// get item have min age by map()
//    age : 22, 28, 28, 25

// chạy lần 2 : item.age = 28 đã lớn maxAge sau khi chạy lần 1 = 22 =>  logic tại dòng 148 cập nhật lại maxAge = 28


singers.map(
    (item, index) => {
        if(item.age >= maxAge) {
            return maxAge = item.age  // chạy lần đầu  : maxAge = 22, 
        } else {
            return null
        }
    } 
)

// chạy lần 3 : item.age = 28 === maxAge => maxAge vẫn là 28
// chạy lần 4 item.age = 25 < maxAge =28 => maxAge vẫn là 28

console.log('maxAge', maxAge)   // maxAge = 28
// tìm ra tên người có độ tuổi nhỏ nhất

let singerName = ''
let swapAge = maxAge

singers.map(
    (item, index) => {
        // logic để tìm ra tên người có độ tuổi nhỏ nhất
        if (item.age <= maxAge) {
            return (
                swapAge = item.age
            )
        } else {
            return null
        }
    }
)
console.log('swapAge', swapAge) // 25 : đã bỏ qua được 2 thằng có giá trị age = 28,

singers.map(
    (item, index) => {
        if (item.age < swapAge) {
            return (
                singerName = item.name
            )
        } else {
            return null
        }
    }
)

console.log('singerName', singerName) 




// nhiệm vụ cuối : tìm ra người có độ tuổi nhỏ hơn swapAge = 25

// tại sao lại hiện là J97 thay vì Mono

// lỗi thứ 1 : hàm map() sẽ chạy từ phần tử đầu tiên đến cuối cùng
// lỗi thứ 2 : phép gán tại dòng số 167 sẽ gán lại giá trị cho singerName = 'J97- Jack5M' => lỗi

// cách khắc phục : dùng hàm find() để tìm ra giá trị đầu tiên thỏa mãn điều kiện
// cách 2 : tạo 1 biến trung gian để hứng các giá trị thoả mãn, sau đó sẽ gán lại


// bài này sẽ tương với thuật toán tháp hà nội :


// array.filter() : cú pháp của filter sẽ gần giống như map(), kết quả trả về là 1 mảng

// ứng dụng array.filter() để tim ra người có người có giới tính = 'female'

const femaleSinger = singers.filter(
    (item, index) => {
        return item.gender === 'female'
    }
)

// bài toán 2 : dùng hàm filter để tìm ra người có độ tuổi không chia hết cho 2

const singerNotDivideBy2 = singers.filter(
    (item, index) => {
        return item.age %2 !==0
    }
)


console.log(singerNotDivideBy2)

// console.log(femaleSinger)

// cú pháp filter : arrName.filter((item, index) => { return your logic })



// phương pháp cắt mảng : array.slice()

// cú pháp : arrayName.slice(startIndex, endIndex)
// startIndex : vị trí mà ta bắt đầu muốn cắt mảng
// endIndex : vị trí cuối cùng mà ta muốn cắt, nhưng giá trị trả về sẽ không bao gồm giá trị tại vị trí endIndex


const hoa_qua = ['chuoi', 'tao', 'nho','cam', 'dua', 'le', 'mit', 'dua hau']

// dùng array.slice để cắt mảng từ vị trí 1 đến vị số 4 

const one_to_four = hoa_qua.slice(1, 4)

const two_to_seven = hoa_qua.slice(2, 7) 

// hoa_qua[0] = 'chuoi
// hoa_qua[1] = 'tao
// hoa_qua[2] = 'nho
// hoa_qua[3] = 'cam
// hoa_qua[4] = 'dua   
// hoa_qua[5] = 'le
// hoa_qua[6] = 'mit
// hoa_qua[7] = 'dua hau
console.log(two_to_seven)  // ['tao', 'nho', 'cam']

// dự đoán : nho, cam, dua, le , mit

// trườg hợp chỉ truyền vào 1 tham số duy nhất thi array.slice() sẽ cắt từ vị trí đó đến cuối mảng

const one_to_end = hoa_qua.slice(1) 
console.log(one_to_end) // ['tao', 'nho', 'cam', 'dua', 'le', 'mit', 'dua hau']

// kết quả trả về sẽ lấy từ vị trí startIndex đến hết nghĩa

// dự đoán : one_to_end 


// th đặc biệt : không truyền vào tham số nào : thì array.slice sẽ copy tất cả các phần tử trong mảng cũ sang mảng mới

const zero_to_end = hoa_qua.slice() 

console.log(zero_to_end) // ['chuoi', 'tao', 'nho', 'cam', 'dua', 'le', 'mit', 'dua hau']

// tại sao cần copy mảng mà không phải sửa đổi trực tiếp trên mảng gốc ?

// khi dùng mảng gốc : lưu thông tin đăng nhập của 1 người dùng trên trang web , giả sử có 1 vài nghiệp vụ nào đó
// bị sai : cập nhật thông tin, thay đổi trạng thái thì ta sẽ cần 
// copy thông tin từ mảng gốc sang 1 mảng clone
// thực hiện thao tác truy xuất, cập nhật, thay đổi trên mảng clone

// khi thao tác trên mảng clone : sẽ giúp chúng ta tránh khỏi các trường hợp : xoá nhầm, sửa nhầm, cập nhật nhầm dữ liệu được trả về


// thao tác nối các mảng với nhau : array.concat()
// array.concat() : sẽ là thao tác nối các mảng với nhau, lần lượt theo thứ tự

const arr1 = [1,2,3]
const arr2 = [4,5,6]

// bình thường khi gộp 2 mảng vào thành 1 thì sẽ làm ntn : dùng 1 vòng for, push từng item của mảng này vào mảng kia

// cách 2 : dùng array.concat()

const noiArr = arr1.concat(arr2)  // [1,2,3,4,5,6]
const newArr = noiArr.concat(['a', 'b', 'c', 'x', 'y', 'z'])  // [1,2,3,4,5,6,'a', 'b', 'c', 'x', 'y', 'z']

console.log(newArr) // [1,2,3,4,5,6,'a', 'b', 'c', 'x', 'y', 'z']

const reverseNewArr = newArr.reverse()

console.log(reverseNewArr)

// đổi ngược giá trị trong mảng  : array.reverse()

// tổng kết : hôm nay học mới array.map(), array.filter(), array.filter(), array.slice(), array.concat(), array.reverse()

// nhiệm vụ về nhà : tìm hiểu trước hàm cắt, sửa mảng : array.splice() 
// buổi sau là buổi 4 : có 1 checkpoint, nội dung checkpoint sẽ xoay quanh các thao thác với mảng được học ở buổi 3 





