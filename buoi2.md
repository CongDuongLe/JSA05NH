git commit -m 'nội dung commit'  dùng để làm gì khi thao tác với git 

[]: # Path: buoi2.md
[]: # Compare this snippet from README.md:
[]: # # JSA05NH
[]: # 
[]: # echo "# JSA05NH" >> README.md : tạo file README.md trong thư mục con src của thư mục cha JSA05NH
[]: # git init : khởi tạo luồng git cho project vừa tạo
[]: # git add README.md : thêm file README.md vào vùng chứa các file thay đổi để đẩy lên trên github
[]: # 
[]: # // git add + tên file : chỉ add file được chọn có sự thay đổi nội dung code
[]: # // git add . : chọn tất cả các file có thay đổi nội dung code trong quá trình làm việc
[]: # 
[]: # git commit -m "nội dung commit" : bình luận cho sự thay đổi của các file trong sourse code
[]: # 
[]: # git branch -M develop : tạo ra 1 nhanh làm việc có tên develop, source code sẽ được đẩy lên nhánh này
[]: # 
[]: # git remote add origin + đường dẫn project github tạo trên website github.com
[]: # 
[]: # git push -u origin + tên nhánh tạo ở dòng 12
[]: # 
[]: # 
[]: # 
[]: # // đẩy các file còn lại 
[]: # 
[]: #  git add . : chọn tất cả các file thay đổi
[]: #  git commit -m "nội dung commit"
[]: #  git push -u origin tên branch



câu lệnh git branch  -M + tên branch  : dùng để làm gì 
// => tạo 1 nhánh làm việc hoàn toàn mới trên github
 // câu lệnh git push -u origin + tên branch : thì tên branch phải trùng với branch đang được chọn


 // 3 thuộc tính cơ bản của Display : inline, inline-block, block



 // display : inline : các thẻ được hiển thị trên cùng 1 dòng, không thể thay đổi chiều rộng, chiều cao của thẻ

 // display : block : các thẻ được hiển thị trên 1 dòng, có thể thay đổi chiều rộng, chiều cao của thẻ ( mặc định thì chiều rộng của thẻ sẽ chiếm toàn màn hình)

 // block : có khả năng thay đổi chiều rộng và chiều cao của thẻ 
 // inline-block : có khả năng thay đổi chiều rộng và chiều cao của thẻ, nhưng các thẻ sẽ được hiển thị trên cùng 1 dòng