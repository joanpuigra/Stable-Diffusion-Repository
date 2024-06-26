const express = require('express')
const Model = require('../database/schema/modelSchema')

const router = express.Router()

// @route POST /api/post
// @desc Add model
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

// @route GET /api/get
// @desc Get all models
router.get('/get', async (req, res) => {
  try {
    const models = await Model.find()

    return res.status(200).json({ success: true, models })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error' })
  }
})

// @route GET /api/get/:name
// @desc Get model by name
router.get('/get/:name', async (req, res) => {
  const name = req.params.name

  try {
    const existModel = await Model.findOne({name: name})

    if (!existModel) {
      return res.status(404).json({ success: false, message: 'Model not found' })
    }

    return res.status(200).json({ success: true, existModel })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error' })
  }
})

// @route PUT /api/put/:id
// @desc Update model by id
router.put('/put/:id', async (req, res) => {
  const _id = req.params.id
  const { name, description, author, type, base, license, file, img } = req.body

  try {
    const existModel = await Model.findOne({_id: _id})

    if (!existModel) {
      return res.status(404).json({ success: false, message: 'Model not found' })
    }

    existModel.name = name
    existModel.description = description
    existModel.author = author
    existModel.type = type
    existModel.base = base
    existModel.license = license.join(', ')
    existModel.file = file
    existModel.img = img

    await existModel.save()

    return res.status(200).json({ success: true, existModel, message: 'Model updated' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error' })
  }
})

// @route DELETE /api/delete/:id
// @desc Delete model by id
router.delete('/delete/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const existModel = await Model.findOne({_id: _id})

    if (!existModel) {
      return res.status(404).json({ success: false, message: 'Model not found' })
    }

    await existModel.deleteOne({_id: _id})

    return res.status(200).json({ success: true, message: 'Model deleted' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error' })
  }
})

module.exports = router
