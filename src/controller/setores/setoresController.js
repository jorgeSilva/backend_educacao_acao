const Setor = require('../../model/setores/setoresModel')
const Yup = require('yup')

class SetorController{
  async store(req, res){
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      setor: Yup.string().required(),
      obs: Yup.string().required()
    })

    const { nome, setor, obs } = req.body

    if(!nome || !setor){
      return res.status(400).json({error: 'Os campos devem estarem preechidos.'})
    }

    const cad = await Setor.create({
      nome,
      setor,
      obs
    })

    try{
      await cad.save().then(r => res.status(200).json({r, msg: 'Cadastrado com sucesso.'}))
    }
    catch(error){
      res.status(400).json(error)
    }
  }

  async show(req, res){
    await Setor.find()
      .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
  }

  async updateObs(req, res){
    const { obs } = req.body
    const { _id } = req.params

    await Setor.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }

  async updateSetor(req, res){
    const { setor } = req.body
    const { _id } = req.params

    await Setor.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }
}

module.exports = new SetorController()