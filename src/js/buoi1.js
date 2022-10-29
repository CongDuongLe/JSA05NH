//1, tạo 1 button
// khi click hiển thị 1 hộp thoại prompt : tên, tuổi, trường, đã tiếp xúc với lập trình được bao nhiêu lâu
// sau khi lấy được thông tin, sẽ lưu tất cả thông tin vừa lấy được vào 1 obj có tên là collectInfo
// hiển thị các nội dung vừa lấy được trong prompt và in ra màn hình


// 2, có 1 khối div chứa content bất kì, khi hover vào thì đổi nội dung content, khi di con trỏ chuột ra bên ngoài
// => trả về nội dung content ban đầu

// có 15 phút để làm 2 bài trên, 7h30 sẽ chữa
// Bài 2: 

// b1 : lấy khối div ở trong DOM

const divQuery = document.querySelector('#divContent');

const DEFAULT_CONTENT = 'Default content';

// DOM event : khi di con trỏ chuột vào khối div, khi di ra khỏi khối div
// onmouseover, onmouseout


//b3 : viết function để xử lí cho DOM event ommouseover, onmouseout

function onMouseOver(params) {
    // di con trỏ chuột vào thì thay đổi nội dung content

    // lấy element trong DOM + innerText = 'new content'

    divQuery.innerText = 'Khi di con trỏ chuột qua'    

    
}

function onMouseOut(params) {
    // di con trỏ chuột ra khỏi khối div thì trả về nội dung content ban đầu

    divQuery.innerText = DEFAULT_CONTENT;

}





































//  giải
// b1 : lấy ra button trong DOM

// id : trong css : #idName , class : .className

const btnQuery = document.querySelector('#btn-info');
// lấy các phần tử h2 có id từ name => experience trong DOM

const nameQuery = document.querySelector('#name');
const ageQuery = document.querySelector('#age');
const schoolQuery = document.querySelector('#school');
const expQuery = document.querySelector('#experience');






// b2 : DOM event khi user click chuột(onclick) :  on + event name

// b3 : viết fuction xử lý sự kiện cho DOM event đã điền ở B2


let collectInfo = {
    name: '',
    age: '',
    school: '',
    exp : ''
}


// kiểu dữ liệu của biến collectInfo là gì : object
// name, age, school, exp cos kiểu dữ liệu là string 

function handleGetInfo(){
    console.log('worked')

    const promptName = prompt('Tên của bạn là gì?');
    const promptAge = prompt('Tuổi của bạn là bao nhiêu?');
    const promptSchool = prompt('Trường của bạn là gì?');
    const promptExp = prompt('Bạn đã tiếp xúc với lập trình bao lâu?');

    // save prompt data to obj

    collectInfo.name = promptName;
    collectInfo.age = promptAge;
    collectInfo.school = promptSchool;
    collectInfo.exp = promptExp;


    // send data get from prompt to DOM, then show it on screen

    nameQuery.innerText = 'Name : ' + collectInfo.name
    ageQuery.innerText = 'Age :' + collectInfo.age
    schoolQuery.innerText = 'University / School :' + collectInfo.school
    expQuery.innerText = 'Experience' + collectInfo.exp

}




// khi nâng cao 1 chút : createElement 
// cần quản lí style : kích thước , màu sắc, font chữ, độ đậm font, icon
// => hạn chế dùng innerHTML vì phương thức này rất khó để quản lí



// DOM element.addEventListener('event name', function, useCapture) //


// trong JS có bao nhiêu kiểu dũ liệu

// kiểu dữ liệu nguyên thuỷ : bool, number, undefine, null, string

// kiểu dữ liệu tham chiếu : obj, array