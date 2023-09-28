require('dotenv').config()
const Yup = require('yup')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Usuario = require('../model/UserModel')

class UserController{
  async store(req, res){
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
      confirmPassword: Yup.string().required()
    }) 

    const { name, email, password, confirmPassword} = req.body

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error:'Falha na validação dos campos.'})
    }

    const userExist = await Usuario.findOne({email: email})

    if(userExist){
      return res.status(400).json({error: 'Email já utilizado.'})
    }

    if(password != confirmPassword){
      return res.status(400).json({error: 'Senhas incopatives.'})
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = await Usuario.create({
      name,
      email,
      password: passwordHash
    })

    try{
      await user.save()
      res.status(201).json({msg: 'Usuario criado com sucesso.'})

    }catch (error){
      res.status(500).json({msg: 'Aconteceu um erro inesperado, volte mais tarde.'})
    }
  }

  async login(req, res){
    
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required()
    })
    
    const { email, password } = req.body

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error:'Falha na validação dos campos.'})
    }

    const user = await Usuario.findOne({email: email})

    if(!user){
      return res.status(400).json({error:'Usuario não encontrado.'})
    }

    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword){
      return res.status(400).json({error: 'Senha inválida.'})
    }

    try{
      const secret = process.env.SECRET
      const token = jwt.sign(
        {
          id: user._id
        },
        secret
      )

      res.status(200).json({user, token})
    }catch(error){
      res.status(500).json(error)
    }
  }

  async index(req, res){
    await Usuario.find().then(r => res.status(200).json(r))
  }
}

module.exports = new UserController()