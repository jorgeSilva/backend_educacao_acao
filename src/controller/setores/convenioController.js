const Convenio = require('../../model/setores/convenioModel')
const Yup = require('yup')

class ConvenioController{
  async store(req, res){
    const schema = Yup.object().shape({
      convenio: Yup.string().required(),
      pmi: Yup.number().required(),
      see: Yup.number().required(),
      contraPartida: Yup.number().required(),
      date: Yup.date().required()
    })

    const { convenio, pmi, see, contraPartida, date } = req.body

    if(!convenio || !pmi || !see || !contraPartida || !date){
      return res.status(400).json({error: 'Os campos devem estarem preechidos.'})
    }

    const cad = await Convenio.create({
      convenio,
      pmi,
      see,
      contraPartida,
      date
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

  async convenioMerenda(req, res){
    await Convenio.find({
      convenio:{'$eq': 'Merenda'}
    }).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async convenioTransporte(req, res){
    await Convenio.find({
      convenio:{'$eq': 'Transporte'}
    }).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }
}

module.exports = new ConvenioController()