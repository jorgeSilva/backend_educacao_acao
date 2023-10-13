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

  async updateSetor(req, res){
    const { setor, nome, obs } = req.body
    const { _id } = req.params

    await Setor.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json({r, msg: 'Editado com sucesso.'}))
    .catch(e => res.status(400).json(e))
  }

  async deleteSetor(req, res){
    const { _id } = req.params

    await Setor.findOneAndDelete(
      {'_id':_id}
    ).then(() => res.status(200).json({msg: 'Deletado com sucesso.'}))
    .catch(e => res.status(400).json(e))
  }

  async show(req, res){
    await Setor.find()
      .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
  }

  async setorEsporte(req, res){
    await Setor.find({
      setor:{'$eq': 'Esporte'}
    }).then(r => res.status(200).json(r)).catch(e => res.status(400).json(e))
  }

  async setorEducacao(req, res){
    await Setor.find({
      setor:{'$eq': 'Educação'}
    }).then(r => res.status(200).json(r)).catch(e => res.status(400).json(e))
  }

  async setorCultura(req, res){
    await Setor.find({
      setor:{'$eq': 'Cultura'}
    }).then(r => res.status(200).json(r)).catch(e => res.status(400).json(e))
  }

  async setorCMAEE(req, res){
    await Setor.find({
      setor:{'$eq': 'CMAEE'}
    }).then(r => res.status(200).json(r)).catch(e => res.status(400).json(e))
  }

  async setorUnivesp(req, res){
    await Setor.find({
      setor:{'$eq': 'Univesp'}
    }).then(r => res.status(200).json(r)).catch(e => res.status(400).json(e))
  }

  async setorADM(req, res){
    await Setor.find({
      setor:{'$eq': 'ADM'}
    }).then(r => res.status(200).json(r)).catch(e => res.status(400).json(e))
  }

  async setorTransporte(req, res){
    await Setor.find({
      setor:{'$eq': 'Transporte coletivo'}
    }).then(r => res.status(200).json(r)).catch(e => res.status(400).json(e))
  }
}

module.exports = new SetorController()