# JSA05NH

echo "# JSA05NH" >> README.md : tạo file README.md trong thư mục con src của thư mục cha JSA05NH
git init : khởi tạo luồng git cho project vừa tạo
git add README.md : thêm file README.md vào vùng chứa các file thay đổi để đẩy lên trên github

// git add + tên file : chỉ add file được chọn có sự thay đổi nội dung code
// git add . : chọn tất cả các file có thay đổi nội dung code trong quá trình làm việc

git commit -m "nội dung commit" : bình luận cho sự thay đổi của các file trong sourse code

git branch -M develop : tạo ra 1 nhanh làm việc có tên develop, source code sẽ được đẩy lên nhánh này

git remote add origin + đường dẫn project github tạo trên website github.com

git push -u origin + tên nhánh tạo ở dòng 12



// đẩy các file còn lại 

 git add . : chọn tất cả các file thay đổi
 git commit -m "nội dung commit"
 git push -u origin tên branch