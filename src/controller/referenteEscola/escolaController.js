const Escola = require('../../model/relacionadosEscola/escolaModel')
const Yup = require('yup')

class EscolaController{
  async store (req, res){
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      modalidade: Yup.string().required(),
      n1: Yup.string().required(),
    })

    const { nome, modalidade, n1} = req.body

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Falha na validação dos campos de cadastro da escola.'})
    }

    const cad = await Escola.create({
      nome, 
      modalidade,
      n1
    })

    try{
      await cad.save().then(r => res.status(200).json({
        r,
        msg: 'Escola cadastrada com sucesso.'
      }))
    }
    catch(error){
      res.status(400).json(error)
    }
  }

  async show (req, res){
    await Escola.find().then(r => res.status(200).json(r)).catch(e => res.status(400).json(e))
  }

}

module.exports = new EscolaController()