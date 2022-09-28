Object.defineProperty()
The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
Phương thức tĩnh Object.defineProperty () định nghĩa một thuộc tính mới trực tiếp trên một đối tượng hoặc sửa đổi một thuộc tính hiện có trên một đối tượng và trả về đối tượng.
const object1 = {};

Object.defineProperty(object1, 'property1', {
value: 42,
writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42
Cú pháp syntax
Object.defineProperty(obj, prop,descriptor);
OBject xác định thuộc tính
Prop : Tên hoặc biểu tượng của thuộc tính xác định hoặc sửa đổi.

Descriptor: Mô tả cho thuộc tính đang được xác định hoặc sửa đổi
// Protoype tính kế thừa
Là cơ chế mà các obj trong JS kế thừa các tính năng từ 1 obj khác , kế thừa các thuộc tính cũng như phương thức từ prototype của mình
Bản thân prototype là 1 obj trong JS //
// Cách tạo ra 1 prototype
