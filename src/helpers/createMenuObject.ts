
type MenuOptions = ''| 'all' | 'honda' | 'fiat' | 'chevrolet'

export const createMenuObject = (activeMenu: MenuOptions) =>{

    let returnObject = {
        all: false,
        honda: false,
        fiat: false,
        chevrolet: false
    }

    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    }

    return returnObject
}