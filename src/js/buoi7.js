// kiến thức cũ  
// thế nào là hàm arrow function trong js
// định nghĩa về arrow function
// - hàm arrow funtion : dịch nghĩa arrow( mũi tên) , fnc (hàm) => là 1 hàm mũi tên

// 1, cú pháp
// b1 : từ khoá khai báo của js(const, let, var) + fncName = (param : tham số) => { // logic}

const handleLog = (params) => {
    return console.log(params);
}

// 2, ưu điểm 
// - viết 1 hàm ngắn gọn hơn
// -  có hoặc không cần return trong từng trường hợp viết tắt ( về nhà tìm các trường hợp viết ngắn gọn hơn của arrow fnc)
// - không cần quan tâm đến từ khoá this ( arrow fnc có khả năng auto binding)
// - không cần quan tâm đến từ khoá arguments ( arrow fnc có khả năng auto binding)

// 3, nhược điểm
// - hàm arrow function không thể có 1 constructor





// const name =  'JSA 05'

// th 1 : dùng cách khai báo hàm bình thường 
// tính chất hoisting của js ( sẽ luôn đưaa hàm lên cùng của js, )
// nghĩa là : chúng ta có thể định nghĩa biến trước khi định nghĩa hàm mà hàm đang gọi trực tiếp đến biến đấy mà không gặp
// phải lỗi : biến chưa được định nghĩa 

// hoisting : sẽ áp dụng cho 1 -hàm, 2 từ khoá khai báo var





function handleLogName(){
    console.log(name, 'name of regular function');
    // console.log(this, 'dùng hàm khai báo bình thường ') // this : đối tượng là window
} 

const logName = () => {
    console.log(name, 'using arrow function');
    // console.log(this, 'dùng hàm khai báo arrow function')
}


// const name = 'hello world'



// giữa arrow function và 1 hàm khai báo theo cách thông thường , để tăng tính chặt chẽ hơn
// đối với các biến có phạm vi nằm ngoài hàm , khi mình dùng  1 hàm bình thường thì CẦN phải dùng từ khoá this
// để trỏ trực tiếp đến đối tượng đang được gọi

// khi dùng arrow fnc, thì đối tượng this luôn luôn là window, arrow sẽ gọi trực tiếp đến biến được khai báo ở ngoài hàm


// trong tương lai sẽ có đối tượng là class, hoặc func bình thường,
// trong các đối tượng này : mình sẽ cần phải khai báo các thuộc tính con 
// nếu sử dụng arrow fnc thì sẽ không thể khai báo thuộc tính con được


// console.log('name of class', name)


class Infomation {
    // khai báo các biến con
    constructor(name, age, school){
        this.name = name;
        this.age = age;
        this.school = school;
    }

    // ứng dụng chính : quản lí thông các thông tin mà không muốn các hàm khác, class khác lấy được 
    // => chặt chẽ hơn trong việc khai báo và quản lí biến
    // => có thể ngăn chặn các hàm khác, class khác lấy được các thông


    // trong tương lai : các bạn sẽ làm việc với API (cổng giao tiếp giữa front-end và back-end) 
    // khi call API => trả về response : là 1 object, trong obj trả về có các trường thông tin
    // trong 1 vài trường hợp => BE (back-end) trả về các thông tin mật, mà với nghiệp vụ của front-end chỉ muốn lưu
    // và dùng trong 1 vài trường hợp nhất định trong ứng dụng lơn thì có thể ngăn chặn các module khác có thể truy cập
    // đến các thông tin mật này = từ khoá private đặt trước class


    // khi khai báo bằng contructor và trong 1 hàm hoặc 1 class thì chỉ có những hàm, những class con kế thừa từ class vừa tạo
    // mới có thể sử dụng các biến con được khai trong constuctor

    // sé có phương thức setter và getter 
    //setter : tạo và gán giá trị cho biến vừa được tạo : sẽ khá tương đồng với localStorage.setItem

    // getter : lấy giá trị vừa được khởi tạo ra

    // áp dụng : viết hàm setter để khởi tạo giá trị cho 2 biến name,age vừa được tạo ra = contructor()

//    setName(name){
//         this.name = name
//    }

//     setAge(age){
//         this.age = age
//     }
    // viết hàm getter để lấy giá trị của 2 biến name, age vừa được khởi tạo ra = contructor()

    // getName(name){
    //     return this.name
    // }

    // getAge(age){
    //     return this.age
    // }

    // viết 1 hàm vừa có chức năng setter và getter 

    takeName = (name) => {
        return this.name = name
    }

    takeAge = (age) => {
        return this.age = age
    }

    takeSchool = (school) => {
        return this.school = school
    }
    
}
// thử : viết 1 hàm truyền vào param là tên, tuổi sau đó in ra log

const QuocTrung = new Infomation('Quốc Trung', 16, 'THPT Đoàn Thị Điểm')

// console.log(QuocTrung, 'Thông tin của Quốc Trung')


const inputQuery = document.querySelector('#input')
let inputValues = 'default value'    // lấy giá trị đang nằm trong ô input


// const handleUserInput = (params) => {
//     // đối với onchange , thì giá trị cuối cùng của ô input
//     // sẽ được lấy ra bằng cú pháp : params.target.value
//     return (
//         inputValues = params.target.value, // dòng 146 k cập nhật lại giá trị 
//         // cho dòng  149 cho nên tại đối tượng test đang dùng giá trị tại dòng 139
//         console.log(inputValues)
//     )
// }


const submitInput =(event) => {
    // prevent reload page
    event.preventDefault()

    console.log(event.target.value, 'event hiện tại đang là')
}

const onchangeInput = (thamso) => {
    // prevent reload page
//    return (
//     console.log(event?.target?.value, 'event hiện tại đang là') ,
//     console.log(inputValues, 'giá trị mặc định trong ô input'),

//     inputValues = event?.target?.value,
//     console.log('giá trị mới của input value', inputValues),
//     console.log(inputValues, 'giá trị sau khi cập nhật')
    
//     )

    const newValueOfClass  = new BuildInputValue(thamso.target.value ? thamso.target.value : inputValues)
    console.log(newValueOfClass, 'test')
}


// ứng dụng lại kiến thức về hàm bất đồng bộ











class BuildInputValue{
    constructor(inputValue){
        this.inputValue = inputValue // mặc định sẽ là string rỗng
    }

    takeValueAway =(inputValue) => {
        return this.inputValue = inputValue
    }
}

// logic hiện tại : lấy value, gán value mới, tạo 1 class chứa contructor để lưu value,
// cập nhật value trong constructor sau khi đã được gán


// đổi logic để fixbug : đồng bộ thao tác khi người dùng ấn enter từ bàn phím hay gọi hành động submit
// thì ngay lập tức : lây value. cập nhật value trong constructor ngay lập tức thay vì phải gán qua biến trung gian

console.log(new BuildInputValue(inputValues), 'test')





// console.log(test, 'test')

// nhiệm vụ : đồng bộ giá trị của ô input với giá trị của biến inputValues

// giải pháp : dùng hàm onchange để lấy giá trị mới của ô input sau đó gán cho biến inputValues

// sau đó gọi biến inputValues ra để sử dụng

// 3 , thao tác bẩt đồng bộ : Promise 

// trong thực tế : khi người dùng đki tài khoản game => nhập sdt => chờ 1 khoảng thời gian ngắn để tổng dài gửi OTP về máy 
// => nhập OTP trên web => kích hoạt tài khoản

// bất đồng bộ trong trường hợp trên : sẽ nằm ở bước : chờ 1 khoảng thời gian 
// vì : cần thời gian để back-end xử lí data vừa đc người dùng gửi lên => trả về cho người dùng 1 mã OTP
 // => sinh ra thao tác bất đồng bộ : Promise

// bất đồng bộ hiểu nhanh : hàm nào có logic nhẹ hơn, chạy nhanh hơn thì có kết quả trước, và các hàm phía sau k cần chờ đợi đợi kết quả 
// của hàm trước mà vẫn có thể chạy song song cùng hàm trước

// hiểu đơn giản hơn : trang fb : khi vào web : tuỳ vào điều kiện mạng mà sẽ hiển thi: ảnh trước hay video trước ( ảnh nhẹ hơn nên sẽ hiển thị sớm hơn)
// khi xem vid trên youtube, fb : đầu tiên khi mở video  sẽ rất mờ nhưng chờ khoảng 5-10s sau vid sẽ nét hơn 

// nếu mà là hàm đồng bộ : tải hết video mới hiển thị video lên mà k cho ng dùng xem video khi đang tải


// bất đồng bộ có 3 trạng thái chinh : pending (chờ đợi)
// trạng thái thành công : fullfilled (đã hoàn thành)
// trạng thái thất baik : rejected (đã bị từ chối)




// thường thường promise sẽ được dùng dung với net working ( call API)


//LƯU Ý : hạn chế sử dụng promise vì JS đã có async và await để tránh việc rơi vào callback hell

// b8 : sẽ học net working : tìm hiểu trc về async và await và JSON




