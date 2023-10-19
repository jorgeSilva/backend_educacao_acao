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

  async update(req, res){
    const { nome, modalidade } = req.body
    const { _id } = req.params

    await Escola.findByIdAndUpdate(
      {'_id':_id}, req.body, {new: true}
    ).then(r => res.status(200).json({r, msg: 'Atualizado com sucesso.'}))
    .catch(e => res.status(400).json(e))
  }

  async updateN1C(req, res){
    const { n1 } = req.body
    const { _id } = req.params

    await Escola.findByIdAndUpdate(
      {'_id': _id}, req.body, {new: true}
    ).then(r => res.status(200).json({r, msg: 'Atualizado com sucesso.'}))
    .catch(e => res.status(400).json(e))
  }

  async delete(req, res){
    const { _id } = req.params

    await Escola.findOneAndDelete(
      {'_id':_id}
    ).then(() => res.status(200).json({msg: 'Deletado com sucesso.'}))
    .catch(e => res.status(400).json(e))
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
      nome:{'$eq':'EMEI Arco-íris '}
    })

    const aee = await aeeModel.find({
      fkescola:{'$eq':'652608917db0c35f0086f726'}
    })

    const ei = await eiModel.find({
      fkescola:{'$eq':'652608917db0c35f0086f726'}
    })

    const eja = await ejaModel.find({
      fkescola:{'$eq':'652608917db0c35f0086f726'}
    })

    const creche = await crecheModel.find({
      fkescola:{'$eq':'652608917db0c35f0086f726'}
    })

    const pre = await preModel.find({
      fkescola:{'$eq':'652608917db0c35f0086f726'}
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
      nome:{'$eq':'CEIM Favo de Mel '}
    })

    const aee = await aeeModel.find({
      fkescola:{'$eq':'652609047db0c35f0086f737'}
    })

    const ei = await eiModel.find({
      fkescola:{'$eq':'652609047db0c35f0086f737'}
    })

    const eja = await ejaModel.find({
      fkescola:{'$eq':'652609047db0c35f0086f737'}
    })

    const creche = await crecheModel.find({
      fkescola:{'$eq':'652609047db0c35f0086f737'}
    })

    const pre = await preModel.find({
      fkescola:{'$eq':'652609047db0c35f0086f737'}
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
      nome:{'$eq':'CEIM Vila Dom Silvio '}
    })

    const aee = await aeeModel.find({
      fkescola:{'$eq':'652608c37db0c35f0086f72d'}
    })

    const ei = await eiModel.find({
      fkescola:{'$eq':'652608c37db0c35f0086f72d'}
    })

    const eja = await ejaModel.find({
      fkescola:{'$eq':'652608c37db0c35f0086f72d'}
    })

    const creche = await crecheModel.find({
      fkescola:{'$eq':'652608c37db0c35f0086f72d'}
    })

    const pre = await preModel.find({
      fkescola:{'$eq':'652608c37db0c35f0086f72d'}
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
      nome:{'$eq':'CEIM Agrovila III '}
    })

    const aee = await aeeModel.find({
      fkescola:{'$eq':'652608dc7db0c35f0086f730'}
    })

    const ei = await eiModel.find({
      fkescola:{'$eq':'652608dc7db0c35f0086f730'}
    })

    const eja = await ejaModel.find({
      fkescola:{'$eq':'652608dc7db0c35f0086f730'}
    })

    const creche = await crecheModel.find({
      fkescola:{'$eq':'652608dc7db0c35f0086f730'}
    })

    const pre = await preModel.find({
      fkescola:{'$eq':'652608dc7db0c35f0086f730'}
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
      nome:{'$eq':'CEIM Turiba do Sul '}
    })

    const aee = await aeeModel.find({
      fkescola:{'$eq':'652608f07db0c35f0086f734'}
    })

    const ei = await eiModel.find({
      fkescola:{'$eq':'652608f07db0c35f0086f734'}
    })

    const eja = await ejaModel.find({
      fkescola:{'$eq':'652608f07db0c35f0086f734'}
    })

    const creche = await crecheModel.find({
      fkescola:{'$eq':'652608f07db0c35f0086f734'}
    })

    const pre = await preModel.find({
      fkescola:{'$eq':'652608f07db0c35f0086f734'}
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
      nome:{'$eq':'CMEI Santa Inês '}
    })

    const aee = await aeeModel.find({
      fkescola:{'$eq':'652608ab7db0c35f0086f729'}
    })

    const ei = await eiModel.find({
      fkescola:{'$eq':'652608ab7db0c35f0086f729'}
    })

    const eja = await ejaModel.find({
      fkescola:{'$eq':'652608ab7db0c35f0086f729'}
    })

    const creche = await crecheModel.find({
      fkescola:{'$eq':'652608ab7db0c35f0086f729'}
    })

    const pre = await preModel.find({
      fkescola:{'$eq':'652608ab7db0c35f0086f729'}
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