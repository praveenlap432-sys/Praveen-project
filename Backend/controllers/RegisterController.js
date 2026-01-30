const Register = require('../models/Register')

exports.registerPost = async (req, res) => {
  try {
    const { name, mobilenumber, email } = req.body

    const user = new Register({
      name,
      mobilenumber,
      email
    })

    await user.save()

    res.status(201).json({
      message: "User registered successfully"
    })

  } catch (error) {
    res.status(500).json({
      message: "Error saving data"
    })
  }
}
