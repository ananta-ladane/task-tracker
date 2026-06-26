

const Employee = require("../models/empquerys").Employee;


exports.insertEmp = (req, res) => {
    console.log(req.body)

    let name = req.body.Name;
    let email = req.body.Email;
    let age = req.body.Age;
    let role = req.body.Role;
    let salary = req.body.Salary;

    let data = new Employee();

    let result = data.insertemp(name, email, age, role, salary);

    result.then((success) => {
        console.log(success)


    }).catch((error) => {
        console.log(error)
    })

}

exports.empgetdata = (req, res) => {


    let data = new Employee();

    let result = data.empdata();

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })

}

exports.empdatadel = (req, res) => {
    // console.log(req.body)

    let id = req.params.id;

    console.log(id)

    let data = new Employee();

    let result = data.empdatadel(id);

    result.then((success) => {
        console.log(success)
    }).catch((error) => {
        console.log(error)
    })
}

exports.empidata = (req, res) => {

    let id = req.params.id;

    console.log(id)

    let data = new Employee();

    let result = data.idempdata(id);

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}


exports.empupdate = (req, res) => {

    console.log(req.body)

    let id = req.params.id;
    let data = {
        name: req.body.Name,
        email: req.body.Email,
        age: req.body.Age,
        role: req.body.Role,
        salary: req.body.Salary
    }

    console.log(id);
    console.log(data);
    console.log("this is come data for update")

    let updata = new Employee();

    let result = updata.updateemp(id, data)
}


exports.loginemp = (req, res) => {
    console.log(req.body)

    let email = req.body.Email;
    let pass = req.body.password;

    console.log("this is the emp data find id")

    let data = new Employee();

    let result = data.empLogin(email);

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}


exports.idwithdata = (req, res) => {

    let id = req.params.id;
    console.log("this is the emp id ")
    console.log(id);
    let data = new Employee();

    let result = data.empwithid(id);

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })

}

exports.getalldata = (req, res) => {
    console.log(req.params)

    let fid = req.params.id;

    let data = new Employee();

    let result = data.dataallemp(fid);

    result.then((success) => {
        console.log(success)
        res.json(success)
    }).catch((error) => {
        console.log(error)
    })
}