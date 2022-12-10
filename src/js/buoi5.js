// setTimoout() và setInterval()

// setTimeout(
//     // function(){
//     //     console.log('Hello');
//     // }, 3000
//     () => {
//         console.log('Hello');
//     }, 3000
// )

// setInterval(() => {

// }, interval);

// interval : thời gian muốn delay

//B5 : tìm hiểu về localStorage và sessionStorage

// LocalStorage : dịch tiếng anh : local : nội bộ , storage : bộ nhớ
// localStorage : bộ nhớ nội bộ của trình duyệt

//1, khái niệm
// localStorage là bộ nhớ cục bộ của trình duyệt, sẽ được lưu trữ dưới dạng key-value
// dữ liệu sau khi lưu vào trong localStorage sẽ không bị mất đi khi người dùng thực hiện các thao
// + tắt tab đang mở của trình duyệt
// + tắt trình duyệt
// + tắt nguồn máy tính (laptop)
// dữ liệu được lưu trong localStorage chỉ bị mất đi khi người dùng thực hiện thao : gỡ bỏ trình duyệt, xoá cache của trình duyệt
//(cache là bộ nhớ đệm tạm thời của ứng dụng)

// cú pháp của localStorage

// localStorage.method()

// 2, các method chính của localStorage
// 1, method lưu dũ liệu vào lS( localStorage)  : setItem(key, value)

// thực hành :

// const nameMember ='Quyết'

// const testKey ='QuyetKey'

// localStorage.setItem('QuyetKey',nameMember )

// const valueZZZ ='JSA05'
// const duplicateValue ='Hello World'

// const keyZZZ ='NH'

// lưu data có key là NH và value là JSA05 vào localStorage

// localStorage.setItem(keyZZZ, valueZZZ)

// setTimeout(() => {
//     localStorage.setItem(keyZZZ,duplicateValue)
// }, 3000 );

// localStorage.setItem('abc', 123)

//2, method lấy dữ liệu ra từ trong ls : getItem(key)

// const getFromLocalStorage = localStorage.getItem('QuyetKey')
// const getFromLocalStorage = localStorage.getItem(testKey)

// console.log(getFromLocalStorage);

//3, method xóa dữ liệu trong ls : removeItem(key)

// xoá dữ liệu có key là NH

// localStorage.removeItem(keyZZZ)

//4, method xóa toàn bộ dữ liệu trong ls : clear()

// localStorage.clear()

const themeKey = 'themeKey'

const defaultTheme = 'light'

const darkTheme = 'dark'

localStorage.setItem(themeKey, defaultTheme)

// console.log(currentTheme);
// alert(currentTheme, 'currentTheme')

const btnQuery = document.querySelector('#btn')
const h1Query = document.querySelector('.h1')

// console.log(btnQuery);

const handleChangeTheme = () => {
  const currentTheme = localStorage.getItem(themeKey)
  // alert(currentTheme, 'currentTheme')

  if (currentTheme === defaultTheme) {
    localStorage.setItem(themeKey, darkTheme)
    h1Query.classList.add('dark')
  } else {
    localStorage.setItem(themeKey, defaultTheme)
    h1Query.classList.remove('dark')
  }

  // localStorage.setItem(themeKey, currentTheme === defaultTheme ? darkTheme : defaultTheme)
}

// lưu ý : localStorage : chỉ lưu được dữ liệu dưới dạng String

// nhưng trong 1 số trường hợp : dữ liệu mà mình nhận được là array hoặc object

// các bước để lưu dữ liệu khác array và obj vào localStorage

// b1 : convert dữ liệu array hoặc obj thành dạng String : JSON.stringify(dữ liệu cần convert)

const fakeData = [
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
  },
  {
    id: 5,
    name: 'Neymar',
  },
]

const playerKey = 'playerKey'

const convertToString = JSON.stringify(fakeData) // chuyển fakeData từ dạng array => string

localStorage.setItem(playerKey, convertToString)

sessionStorage.setItem(playerKey, convertToString)
sessionStorage.setItem('abc', 123)

// sessionStorage.removeItem('abc')

// sessionStorage.clear()

//b2 : khi lấy lại được data từ localStorage : convert ngược trở lại từ string về dạng dữ liệu cũ
// JSON.parse(dữ liệu cần convert)

const def = JSON.parse(sessionStorage.getItem(playerKey)) // chuyển từ string về dạng array

console.log(typeof def) // nhược điểm : sẽ không áp dụng được các phương thức làm việc với array
def.map((item, index) => {
  console.log(item.name)
})

// sessionStorage.removeItem(playerKey)

// sessionStorage : lưu dữ liệu vào storage của trình duyệt
// lưu dưới dạng key-value
// có các method giống localStorage

// điểm khác : sessionStorage : dữ liệu được lưu vào sẽ bị xoá khi tắt tab, tắt trình duyệt, tắt nguồn, xoá cache, xoá trình duyệt

// lưu ý khi sử dụng localStorage và sessionStorage
// - khả năng lưu trũ : tuỳ vào từng trình duyệt : localStorage : 5-10MB, sessionStorage : 2-5Mb
// - chỉ lưu dữ dưới dạng string, nếu trường hợp cần lưu dữ liệu có kiểu dữ liệu khác thì cần
// + chuyển dạng dữ liệu đó => string : JSON.stringify(dữ liệu cần convert)
// + khi lấy dữ liệu ra : convert ngược lại từ string => dạng dữ liệu cũ : JSON.parse(dữ liệu cần convert)
// - không lưu trữ dữ liệu nhạy cảm bằng localStorage và sessionStorage : ( password, token, email, sdt, username, thông tin thẻ ngân hàng, thông tin giỏ hàng, ...)
// vì : khi người khác vào cùng 1 domain web : người đó sẽ biết được hết tất cả các dữ liệu mà mình lưu vào

// ứng dụng thực tế của localStorage và sessionStorage :
// khi chưa tiếp cận được với backend hoặc các kĩ thuật nâng cao của front-end :
// lưu trạng thái đăng nhập (1 mã token được mã hoá) : ứng dụg token để thực hiện hành vi chuyển tài khoản, đăng xuất, đăng nhập

const userProfileKey = 'userProfileKey'

const userProfile = {
  userName: 'admin',
  password: 'admin',
}

localStorage.setItem(userProfileKey, JSON.stringify(userProfile))

const showLogin = () => {
  const userName = document.querySelector('#userName').value
  const password = document.querySelector('#password').value

    console.log('userName', userName)
    console.log('password', password)

  const getDetail = JSON.parse(localStorage.getItem(userProfileKey))
  console.log(getDetail)
  if (userName === getDetail.userName && password === getDetail.password) {
    window.location.href = 'buoi5.html'
  } else {
    alert('Đăng nhập thất bại, vui lòng kiểm tra lại thông tin')
  }
}

const logout = () => {
    localStorage.removeItem(userProfileKey)
    window.location.href = 'loginB5.html'

}




// arrow function


function name(params) {
    
}
// chuyển sang arrf
const tinhtong = (a,b,c) => {
    return console.log(a+b+c)
}

tinhtong(1, 2, 3)

const arr = [1,2,3,4,5,6]


// map() sử với kiểu dữ liệu array

 const arrX2  =  arr.filter(
    (item, index) => {
        return item  %2 === 0
    }
)

console.log(arrX2)