const express = require('express')
const Model = require('../database/schema/modelSchema')

const router = express.Router()

router.post('/post', async (req, res) => {
  const { name, description, author, type, base, license, file, img } = req.body

  try {
    const existModel = await Model.findOne({ name: name })

    if (existModel) {
      return res
        .status(400)
        .json({ success: false, message: 'Model already exists' })
    }

    const newModel = new Model({
      name: name,
      description: description,
      author: author,
      type: type,
      base: base,
      license: license.join(', '),
      file: file,
      img: img,
    })

    await newModel.save()

    return res
      .status(200)
      .json({ success: true, model: newModel, message: 'Model added' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error' })
  }
})

router.get('/get', async (req, res) => {
  try {
    const models = await Model.find()

    return res.status(200).json({ success: true, models })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error' })
  }
})

module.exports = router
