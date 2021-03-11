const Employee = require("../config/database").employee;

exports.create = async (req, res) => {
  let data = req.body;
  console.log(req)
  try {
    if (!data.name) {
      return res.status(400).send({
        msg: "ten nhan vien không được để trống!",
      });
    }
    if (data) {
      const newEmployee = new Employee({
        name: data.name,
      });

      await newEmployee.save();
      res.status(200).send({
        data: newEmployee,
        msg: "Tạo mới thành công",
      });
    } else {
      return res.send({
        status: false,
        msg: "Dữ liệu không hợp lệ !",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  const { name} = req.body;
  const employee = Employee.findByPk(req.params.id).then((employee) => {
    employee
      .update({
        name: name || employee.name,
      })
      .then((updateEmployee) => {
        res.status(200).send({
          msg: "update successfully",
          data: updateEmployee,
        });
      });
  });
};

exports.delete = async (req, res) => {
  let id = req.params.id;
  const employee = await Employee.destroy({ where: { id: id } });
  if (employee) {
    res.status(200).send({
      msg: "Employee was deleted successfully!",
    });
  } else {
    return res.status(404).send({
      msg: "Delete Employee fail",
    });
  }
};

exports.getAll = async (req, res) => {
  const employee =  await Employee.findAll();
  console.log(employee)
  if (employee) {
    return res.status(200).send({
      msg: "Get Employee successfully",
      data: employee,
    });
  } else {
    return res.status(404).send({
      msg: "Get Employee fail",
    });
  }
};

exports.getByid = async (req, res) => {
  let data = req.params.id;
  try {
    let employee = await Employee.findOne({
      where: {
        id: data,
      },
    });
    if (employee) {
      return res.status(200).send({
        msg: "Get bid price successfully",
        data: employee,
      });
    } else {
      return res.status(404).send({
        msg: "Get bid price fail",
      });
    }
  } catch (err) {
    throw err;
  }
};