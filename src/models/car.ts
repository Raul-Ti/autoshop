
type CarType = 'honda' | 'fiat' | 'chevrolet'

type Car = {
    type: CarType,
    image: string,
    name: string,
    color: string,
    manufacturer: string
}

const data: Car[] = [
    {
        type: 'honda',
        image: 'HondaCivic.jpg',
        name: 'Civic',
        color: 'Prata',
        manufacturer: 'Honda'
    },
    {
        type: 'fiat',
        image: 'FiatMobi.jpg',
        name: 'Mobi',
        color: 'Cinza escuro',
        manufacturer: 'Fiat'
    },
    {
        type: 'fiat',
        image: 'fiatuno.jpg',
        name: 'Uno',
        color: 'Prata',
        manufacturer: 'Fiat'
    },
    {
        type: 'chevrolet',
        image: 'prisma.jpg',
        name: 'Prisma',
        color: 'Prata',
        manufacturer: 'Chevrolet'
    },
    {
        type: 'honda',
        image: 'hr-v.jpg',
        name: 'Hr-v',
        color: 'Vinho',
        manufacturer: 'Honda'
    },
    {
        type: 'honda',
        image: 'city.jpg',
        name: 'City',
        color: 'Branco',
        manufacturer: 'Honda'
    },
    {
        type: 'fiat',
        image: 'toro.jpeg',
        name: 'Toro',
        color: 'Azul',
        manufacturer: 'Fiat'
    },
    {
        type: 'fiat',
        image: 'strada.jpg',
        name: 'Strada',
        color: 'Vermelho',
        manufacturer: 'Fiat'
    },

    {
        type: 'honda',
        image: 'fit.jpeg',
        name: 'Fit',
        color: 'Preto',
        manufacturer: 'Honda'
    },
    {
        type: 'chevrolet',
        image: 'onix.jpg',
        name: 'Onix',
        color: 'Branco',
        manufacturer: 'Chevrolet'
    },
    {
        type: 'chevrolet',
        image: 'camaro.jpg',
        name: 'Camaro',
        color: 'Branco',
        manufacturer: 'Chevrolet'
    },
    {
        type: 'fiat',
        image: 'bravo.jpg',
        name: 'Bravo',
        color: 'Azul',
        manufacturer: 'Fiat'
    }
           
]

export const Car = {

    getAll: (): Car[]=>{
        return data
    },
    getFromType: (type: CarType): Car[] =>{
        return data.filter(item => item.type === type)
    },
    getFromName: (name: string): Car[] =>{
        return data.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1)
    }
}