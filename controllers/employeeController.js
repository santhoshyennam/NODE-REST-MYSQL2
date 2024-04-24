const connection = require("../connection");

exports.findAll = (req,res)=> {
    const query = `
    SELECT Employees.*, Departments.id as dept_id, Departments.location as dept_location
    FROM Employees
    JOIN Departments ON Employees.department_id = Departments.id;
`;
    connection.query(query,(err, results) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).send({ data : results});
        }
    })
};

exports.findById = (req,res) => {
    const { id } = req.params;
    const query = "select * from Employees where employee_id="+id;
    connection.query(query,(err, results) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(results);
        }
    })
};

exports.filterByName = (req,res) => {
    const { filter_text } = req.query
    const query = "select * from Employees where name like '%"+filter_text+"%'";
    connection.query(query,(err, results) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(results);
        }
    })
};

exports.deleteEmployee = (req,res) => {
    const { id } = req.params
    if(id == null) {
        res.status(400).send("id is not found");
    }
    const query = "delete from employees where employee_id="+id;
    connection.query(query,(err, results) => {
        if (err) {
            res.status(404).send(err);
        } else {
            console.log(results.affectedRows);
            if(results.affectedRows ==0) {
                res.status(404).send({errorMessage: "employee with "+id+" not found!"});
            }
            else {
                res.status(201).send({ data: "employee with "+id+" deleted successfully!"});
            }
        }
    })
};

exports.addEmployee = (req,res)=> {
    try {
    const { employee_id, name, address, phone, email,department_id} = req.body
    if(!employee_id || employee_id == "") {
        throw new Error("employee id is not found");
    } 
    if(!name || name=="") {
        throw new Error("name is not found");
    }
    if(!address || address=="") {
        throw new Error("address is not found");
    } 
    if(!phone || phone=="") {
        throw new Error("phone is not found");
    }
    if(!email || email=="") {
        throw new Error("email is not found");
    }
    const query = "insert into Employees (employee_id,name, address, phone, email,department_id) values ("+employee_id+",'"+name+"','"+address+"','"+phone+"','"+email+"',"+department_id+");";
    connection.query(query,(err, results) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(201).send({data : results});
        }
    })
    }
    catch(e) {
        /*
        ...lines of code
        */
        res.status(400).send({errorMessage:e.message}); 
    }
};