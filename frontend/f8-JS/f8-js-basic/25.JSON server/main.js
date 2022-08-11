var courseApi = "http://localhost:3000/courses";
fetch(courseApi)
    .then(response => {
        return response.json();
    })
    .then(courses => {
        console.log(courses);
    })

    //fake api hay là mock api
    // Postman
    //CRUD
/**
 - create : tạo mưới -- POST
 - read : Lấy dữ liệu ---GET
 - update : CHỉnh sửa --> PUT/PATCH
 -- Delete : XÓa - delete
 */