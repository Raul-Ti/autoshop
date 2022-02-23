import {Request, Response} from 'express'

import { Car } from '../models/car'
import { createMenuObject } from '../helpers/createMenuObject'

export const home = (req: Request, res:Response) =>{
    
    let list = Car.getAll()

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os carros',
            banner: 'allcars.jpg'
        },
        list
    })

}

export const honda = (req: Request, res:Response) =>{

    let list = Car.getFromType('honda')

    res.render('pages/page', {
        menu: createMenuObject('honda'),
        banner: {
            title: 'Carros honda',
            banner: 'allcars.jpg'
        },
        list
    })

}

export const fiat = (req: Request, res:Response) =>{

    let list = Car.getFromType('fiat')

    res.render('pages/page', {

        menu: createMenuObject('fiat'),
        banner: {
            title: 'Carros fiat',
            banner: 'allcars.jpg'
        },
        list
    })

}

export const chevrolet = (req: Request, res:Response) =>{

    let list = Car.getFromType('chevrolet')


    res.render('pages/page', {
        menu: createMenuObject('chevrolet'),
        banner: {
            title: 'Carros chevrolet',
            banner: 'allcars.jpg'
        },
        list
    })

}