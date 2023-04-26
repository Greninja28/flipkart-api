import User from '../model/userSchema.js'

export const userSignup = async (req, res) => {
  try {

    const existUsername = await User.findOne({ username: req.body.username })
    if (existUsername) {
      res.status(401).json({ message: 'Username already exists!!!' })
    }
    const user = req.body;
    const newUser = new User(user)
    await newUser.save()
    res.status(200).json({ message: user })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body
    let user = await User.findOne({ username: username, password: password })
    if (user) {
      return res.status(200).json({ data: user })
    } else {
      return res.status(401).json(`Invalid Login`)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}