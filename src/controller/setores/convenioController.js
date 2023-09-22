const Convenio = require('../../model/setores/convenioModel')
const Yup = require('yup')

class ConvenioController{
  async store(req, res){
    const schema = Yup.object().shape({
      transporte: Yup.number().required(),
      merenda: Yup.number().required(),
    })

    const { transporte, merenda } = req.body

    if(!transporte || !merenda){
      return res.status(400).json({error: 'Os campos devem estarem preechidos.'})
    }

    const cad = await Convenio.create({
      transporte,
      merenda
    })

    try{
      await cad.save().then(r => res.status(200).json({r, msg: 'Cadastrado com sucesso.'}))
    }
    catch(error){
      res.status(400).json(error)
    }
  }

  async show(req, res){
    await Convenio.find()
    .then(r => res.status(200).json(r))
      .catch(e => res.status(400).json(e))
  }

  async updateTransp(req, res){
    const { transporte } = req.body
    const { _id } = req.params

    await Convenio.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async updateMerenda(req, res){
    const { merenda } = req.body
    const { _id } = req.params

    await Convenio.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }
}

module.exports = new ConvenioController()