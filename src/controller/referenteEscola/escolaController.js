const aeeModel = require('../../model/relacionadosEscola/aeeModel')
const eiModel = require('../../model/relacionadosEscola/eiModel')
const ejaModel = require('../../model/relacionadosEscola/ejaModel')
const Escola = require('../../model/relacionadosEscola/escolaModel')
const Yup = require('yup')
const preModel = require('../../model/relacionadosEscola/preModel')
const crecheModel = require('../../model/relacionadosEscola/crecheModel')

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
    await Escola.find()
    .then(r => res.status(200).json(r)).catch(e => res.status(400).json(e))
  }

  async showN1 (req, res){
    await Escola.find()
    .then(r => res.status(200).json(r)).catch(e => res.status(400).json(e))
  }

  async referenteEMEI(req, res){
    const escola = await Escola.find({
      nome:{'$eq':'EMEI'}
    })

    const aee = await aeeModel.find({
      fkescola:{'$eq':'652426342bcaf073395bb421'}
    })

    const ei = await eiModel.find({
      fkescola:{'$eq':'652426342bcaf073395bb421'}
    })

    const eja = await ejaModel.find({
      fkescola:{'$eq':'652426342bcaf073395bb421'}
    })

    const creche = await crecheModel.find({
      fkescola:{'$eq':'652426342bcaf073395bb421'}
    })

    const pre = await preModel.find({
      fkescola:{'$eq':'652426342bcaf073395bb421'}
    })

    try{
      res.status(200).json({escola, aee, ei, eja, creche, pre})
    }
    catch(e){
      res.status(400).json(e)
    }
  }

  async referenteFavo(req, res){
    const escola = await Escola.find({
      nome:{'$eq':'Favo de mel'}
    })

    const aee = await aeeModel.find({
      fkescola:{'$eq':'652426582bcaf073395bb428'}
    })

    const ei = await eiModel.find({
      fkescola:{'$eq':'652426582bcaf073395bb428'}
    })

    const eja = await ejaModel.find({
      fkescola:{'$eq':'652426582bcaf073395bb428'}
    })

    const creche = await crecheModel.find({
      fkescola:{'$eq':'652426582bcaf073395bb428'}
    })

    const pre = await preModel.find({
      fkescola:{'$eq':'652426582bcaf073395bb428'}
    })

    try{
      res.status(200).json({escola, aee, ei, eja, creche, pre})
    }
    catch(e){
      res.status(400).json(e)
    }
  }

  async referenteVILA(req, res){
    const escola = await Escola.find({
      nome:{'$eq':'Vila Dom Silvio'}
    })

    const aee = await aeeModel.find({
      fkescola:{'$eq':'6524267a2bcaf073395bb42b'}
    })

    const ei = await eiModel.find({
      fkescola:{'$eq':'6524267a2bcaf073395bb42b'}
    })

    const eja = await ejaModel.find({
      fkescola:{'$eq':'6524267a2bcaf073395bb42b'}
    })

    const creche = await crecheModel.find({
      fkescola:{'$eq':'6524267a2bcaf073395bb42b'}
    })

    const pre = await preModel.find({
      fkescola:{'$eq':'6524267a2bcaf073395bb42b'}
    })

    try{
      res.status(200).json({escola, aee, ei, eja, creche, pre})
    }
    catch(e){
      res.status(400).json(e)
    }
  }

  async referenteAgro(req, res){
    const escola = await Escola.find({
      nome:{'$eq':'Agrovila III'}
    })

    const aee = await aeeModel.find({
      fkescola:{'$eq':'652426962bcaf073395bb42e'}
    })

    const ei = await eiModel.find({
      fkescola:{'$eq':'652426962bcaf073395bb42e'}
    })

    const eja = await ejaModel.find({
      fkescola:{'$eq':'652426962bcaf073395bb42e'}
    })

    const creche = await crecheModel.find({
      fkescola:{'$eq':'652426962bcaf073395bb42e'}
    })

    const pre = await preModel.find({
      fkescola:{'$eq':'652426962bcaf073395bb42e'}
    })

    try{
      res.status(200).json({escola, aee, ei, eja, creche, pre})
    }
    catch(e){
      res.status(400).json(e)
    }
  }

  async referenteToriba(req, res){
    const escola = await Escola.find({
      nome:{'$eq':'Toriba'}
    })

    const aee = await aeeModel.find({
      fkescola:{'$eq':'652426c42bcaf073395bb435'}
    })

    const ei = await eiModel.find({
      fkescola:{'$eq':'652426c42bcaf073395bb435'}
    })

    const eja = await ejaModel.find({
      fkescola:{'$eq':'652426c42bcaf073395bb435'}
    })

    const creche = await crecheModel.find({
      fkescola:{'$eq':'652426c42bcaf073395bb435'}
    })

    const pre = await preModel.find({
      fkescola:{'$eq':'652426c42bcaf073395bb435'}
    })

    try{
      res.status(200).json({escola, aee, ei, eja, creche, pre})
    }
    catch(e){
      res.status(400).json(e)
    }
  }

  async referenteJSI(req, res){
    const escola = await Escola.find({
      nome:{'$eq':'EE Jardim Santa Ines'}
    })

    const aee = await aeeModel.find({
      fkescola:{'$eq':'652426f22bcaf073395bb438'}
    })

    const ei = await eiModel.find({
      fkescola:{'$eq':'652426f22bcaf073395bb438'}
    })

    const eja = await ejaModel.find({
      fkescola:{'$eq':'652426f22bcaf073395bb438'}
    })

    const creche = await crecheModel.find({
      fkescola:{'$eq':'652426f22bcaf073395bb438'}
    })

    const pre = await preModel.find({
      fkescola:{'$eq':'652426f22bcaf073395bb438'}
    })

    try{
      res.status(200).json({escola, aee, ei, eja, creche, pre})
    }
    catch(e){
      res.status(400).json(e)
    }
  }
}

module.exports = new EscolaController()