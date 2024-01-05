const Servidor = require('../../model/servidores/servidoresModel')
const Escola = require('../../model/relacionadosEscola/escolaModel')
const Yup = require('yup')

class ServidorController{
  async store(req, res){
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      funcao: Yup.string().required(),
      cargo: Yup.string().required(),
      fkescola: Yup.string().required()
    })

    const { nome, funcao, cargo, fkescola } = req.body

    if(!nome){
      return res.status(400).json({error: 'Falha na validação do nome.'})
    }

    if(!funcao){
      return res.status(400).json({error: 'Falha na validação da função.'})
    }

    if(!cargo){
      return res.status(400).json({error: 'Falha na validação do cargo.'})
    }

    const schoolExist = await Escola.findOne({
      _id:{'$eq':fkescola}
    })

    if(!schoolExist){
      return res.status(400).json({error: `Escola não existente no banco de dados: ${schoolExist}`})
    }

    const cad = await Servidor.create({
      nome,
      funcao,
      cargo,
      fkescola: schoolExist
    })

    try{
      await cad.save().then(r => res.status(200).json({r, msg: 'Cadastrado com sucesso.'}))
    }
    catch(error){
      res.status(400).json(error)
    }
  }

  async updateDados(req, res){
    const { nome, funcao, cargo, fkescola } = req.body
    const { _id } = req.params

    await Servidor.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json({r, msg: 'Atualizado com sucesso.'}))
    .catch(e => res.status(400).json(e))
  }

  async deleteServidor(req, res){
    const { _id } = req.params

    await Servidor.findOneAndDelete(
      {'_id':_id}
    ).then(() => res.status(200).json({msg: 'Deletado com sucesso.'}))
    .catch(e => res.status(400).json(e))
  }

  async show(req, res){
    await Servidor.find().populate('fkescola')
      .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
  }

  async merendeiraEfetiva(req, res){
    await Servidor.find({
      funcao: {'$eq': 'Merendeira'},
      cargo: {'$eq': 'Efetiva'}
    }).populate('fkescola')
      .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
  }

  async merendeiraContratada(req, res){
    await Servidor.find({
      funcao: {'$eq': 'Merendeira'},
      cargo: {'$eq': 'Contratada'}
    }).populate('fkescola')
      .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
  }

  async auxLimpContr(req, res){
    await Servidor.find({
      funcao: {'$eq': 'Aux. Limpeza Contratada'},
      cargo: {'$eq': 'Contratada'}
    }).populate('fkescola')
      .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
  }

  async auxLimpEfet(req, res){
    await Servidor.find({
      funcao: {'$eq': 'Aux. Limpeza Efetivo'},
      cargo: {'$eq': 'Efetivo'}
    }).populate('fkescola')
      .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
  }

  async motoristaEfetivo(req, res){
    await Servidor.find({
      funcao: {'$eq': 'Motorista'},
      cargo: {'$eq': 'Efetivo'}
    }).populate('fkescola')
      .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
  }

  async motoristaContratado(req, res){
    await Servidor.find({
      funcao: {'$eq': 'Motorista'},
      cargo: {'$eq': 'Contratado'}
    }).populate('fkescola')
      .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
  }

  async Cuidador(req, res){
    await Servidor.find({
      funcao: {'$eq': 'Cuidador'}
    }).populate('fkescola')
      .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
  }

  async Monitor(req, res){
    await Servidor.find({
      funcao: {'$eq': 'Monitor'}
    }).populate('fkescola')
      .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
  }
}

module.exports = new ServidorController()