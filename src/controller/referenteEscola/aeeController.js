const AEE = require('../../model/relacionadosEscola/aeeModel')
const Yup = require('yup')
const Escola = require('../../model/relacionadosEscola/escolaModel')

class AEEController{
  async store(req, res){
    const schema = Yup.object().shape({
      nTurmas: Yup.number().required(),
      escolaFK: Yup.string().required()
    })

    const { nTurmas, escolaFK } = req.body

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Falha na validação dos campos de cadastro.'})
    }

    const schoolExist = await Escola.findById(escolaFK)

    if(!schoolExist){
      return res.status(400).json({error: 'Escola não existente no banco de dados.'})
    }

    const cad = await AEE.create({
      nTurmas,
      escolaFK: schoolExist
    })

    try{
      await cad.save().then(r => res.status(200).json({r, msg: 'Cadastrado com sucesso.'}))
    }
    catch(error){
      res.status(400).json(error)
    }
  }

  async show(req, res){
    await AEE.find().then(r => res.status(200).json(r)).catch(e => res.status.json(e))
  }

  async update(req, res){
    const { nTurmas } = req.body
    const { _id } = req.params

    if(!nTurmas){
      return res.status(400).json({error: 'Campo invalido.'})
    }

    await AEE.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
  }
}

module.exports = new AEEController()