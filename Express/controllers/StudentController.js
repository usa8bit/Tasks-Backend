const students = require("../data/students.js")
class StudentController {
    index(req, res) {
        const data = {
            message: "Menampilkan Semua Students",
            data: students,
        };
        res.json(data);
    }

    store(req, res) {
        const {name} = req.body;
        students.push(name);
        const data ={
            message: `Menambahkan Data Student: ${name}`,
            data: students,
        };
        res.json(data);
    }

    update(req, res) {
        const {id} = req.params;
        const {name} = req.body;
        students[id] = name;
        const data = {
            message: `Mengedit Data Student Id ${id}, Name: ${name}`,
            data: students,
        };
        res.json(data);
    }

    destroy(req, res) {
        const {id} = req.params;
        students.shift(id)
        const data = {
            message: `Menghapus Data Student Id ${id}`,
            data: students,
        };
        res.json(data);
    }
}

const object = new StudentController();

module.exports = object;