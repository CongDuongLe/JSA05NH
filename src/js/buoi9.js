// thao tác cơ bản với API, dùng hàm fetch của JS


// Với API : chạy trên mô hình Restful API :
// có các thao tác chính (method)

// 1. GET : thao tác lấy dữ liệu
// 2. POST hoặc PUT : thao tác thêm dữ liệu
// 3. DELETE : thao tác xóa dữ liệu

// nâng cao : PATCH : thao tác sửa dữ liệu


// mô hình chạy thứ 2 : GraphQL (học trên 18+) : khác với restful API : làm việc trực tiếp với các đối tượng, chỉ làm việc
// với endpoint : /graphql



// fetch : làm hàm của JS có sắn ( mang chức năng chính là method GET) : gửi request lên server => đợi server trả về data


// fetch(API_URL ) : trả về 1 promise ( fullfilled - thành công, rejected - thất bại, pending - chờ đợi)

// mô hình promise => pending ( chờ đợi requested được gửi lên server)

// th1: (link api đúng, timeout trong thời gian server cho phép, nhận lại response có status code = 200) : fullfilled ( trả về data)
// th2 (nhầm link api, vượt timeout, response có status code 
// 500 : lỗi server
// 404 : không tìm thấy
// 400 : lỗi client
// 3xx : lỗi redirect
// )  => rơi vào trạng thái rẹjected ( trả về lỗi)

// trong buổi 9 : nâng cao của bất đồng bộ (async- await) : làm việc với promise ở trạng thái gần như là tránh được callback hell


// async - await : làm việc với promise : trả về 1 promise ( fullfilled - thành công, rejected - thất bại, pending - chờ đợi)

// syntax : thường thường khi làm việc với API : viết 1 hàm có chức năng riêng gọi API
// const fncName =  async () => {
//  code logic
// const response = await phương thức gọi APi (API_URL)
 //}

 // làm việc với fetch: cần phải convert dữ liệu về dạng json : .json()



const API_URL  = 'https://jsonplaceholder.typicode.com/users'
const RANDOM_10Q = 'https://animechan.vercel.app/api/quotes'

const getRandomQuote = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()  // data đích từ back-end trả về  - bước convert sang dạng json
    // lấy data in ra console hoặc in ra màn hình trình duyệt
    console.log(data)
}

// getRandomQuote()


const getRandom10Quote = async () => {
    const res = await fetch(RANDOM_10Q)
    const data = await res.json()  // 1 array gồm 10 obj là childrent 

    // thao tác làm việc với array để in các obj ra trình duyệt : 
    // b1. lặp data để lấy ra từng item (map)
    // b2 : truy cập vào DOM , thao tác với DOM để in ra trình duyệt được data

    const quoteQuery = document.querySelector('.quote')

    data.map(
        (item, index ) => {
            const quote = document.createElement('p')
            // quote.innerHTML = item.quote  // in ra quote
            // cần in ra cả anime và character
            quote.innerHTML += `<span id='anime'> anime name : ${item.anime} </span> <br> <span id='anime'> anime character: ${item.character} </span> <h3> quote : ${item.quote} </h3>`



            quoteQuery.appendChild(quote)
        }
    )



    console.log(data)
}

// getRandom10Quote()


// 1 phương thức (xịn hơn của fetch) : axios 

// b1 : cài đặt axios  : đã xong 
// cú pháp : tương đối dài hơn fetch nhưng sẽ rõ ràng mình đang hướng đến method nào khi làm việc với API
// dùng method get : axios.get(API_URL)
// dùng method post : axios.post(API_URL)
// dùng method put : axios.put(API_URL)
// dùng method delete : axios.delete(API_URL)

// lưu ý khi dùng axios : response trả về MẶC ĐỊNH đã được convert sang dạng JSON : so với fetch()
// thì axios không cần phải trải qua bước trung gian là .json() để convert sang dạng JSON

// timeout của axios luôn luôn tốt hơn fetch(); axios có khả năng mặc định sẽ retry lại khi gặp lỗi; thông báo lỗi cho người dùng thông qua netword inspect


const axiosGetRandomQuote = async () => { 
    const response = await axios.get(API_URL)
    const data = response.data
    const quoteQuery = document.querySelector('.quote')

    data.map(
        (item, index ) => {
            const quote = document.createElement('p')
            // quote.innerHTML = item.quote  // in ra quote
            // cần in ra cả anime và character
            quote.innerHTML += `<span id='anime'> anime name : ${item.anime} </span> <br> <span id='anime'> anime character: ${item.character} </span> <h3> quote : ${item.quote} </h3>`



            quoteQuery.appendChild(quote)
        }
    )

}

// axiosGetRandomQuote()


const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

const getUserData = async () => {
    const res = await axios.get(BASE_URL)
    const data = res.data
    const userQuery = document.querySelector('.user')
    data.map(
        (item, index) => {
            const userData = document.createElement('div')
            userData.innerHTML = `
            <div id='userWrapper'>
            <h3> User name : ${item.name} </h3>
            <h3> User email : ${item.email} </h3>
            <h3> User username : ${item.username} </h3>
            <h3> User phone : ${item.phone} </h3>
            <h3> User website : ${item.email} </h3>
            <h3> User company name : ${item.company.name} </h3>
            <h3> User company catchPhrase : ${item.company.catchPhrase} </h3>
            <h3> User company bs : ${item.company.bs} </h3>
            <h3> User address street : ${item.address.street} </h3>
            <h3> User address city : ${item.address.city} </h3>
            <h3> User address zipcode : ${item.address.zipcode} </h3>
            <div>
            `

            userQuery.appendChild(userData)
        }
    )

}

// getUserData()




const getHanoiWeather = async () => {

    let place = 'Hanoi'

    let WEATHER_API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=484DCQEQR8WZWTPM9GJLH7BH6&contentType=json`

    const inputQuery = document.querySelector('#input')
    const inputValue = inputQuery.value
    if(inputValue !== '') {
        searchPlace = inputValue // nếu inputValue = tokyo => place = tokyo
        WEATHER_API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchPlace}?unitGroup=metric&key=484DCQEQR8WZWTPM9GJLH7BH6&contentType=json`
    }


    const res = await axios.get(WEATHER_API)
    let data = res.data

    console.log(data, 'data');
    
    








    


    // ứng dụng về closure để thay thế giá trị mặc định của biến place = input value do người dùng nhập vào
    


    // thao tác gọi lại API với giá trị mới của place





}


getHanoiWeather()




// về nhà : tiếp tục sử dụng weather API để lấy dữ liệu thời tiết của 1 thành phố khác, đồng thời in dữ liệu này lên trên trình duyệt
// hiển thị ra dự báo trong 15 ngày tiếp theo


