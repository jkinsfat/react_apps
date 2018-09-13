// //Can't write es5 classes in this context. 
// //Babel, assuming an es6 context, will transpile this to undefined
// function File(id, name, type, updatedAt, message) {
//     this.id = id;
//     this.name = name;
//     this.type = type;
//     this.message = message;
//     this.updatedAt = updatedAt;
//     return this;
// }

class File {
    constructor(id, name, type, updatedAt,  message) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.message = message;
        this.updatedAt = updatedAt;
    }
}

export default File;