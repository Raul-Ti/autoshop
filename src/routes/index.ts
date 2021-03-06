import { Router } from "express";
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

const router = Router()

router.get('/', PageController.home)

router.get('/honda', PageController.honda)

router.get('/fiat', PageController.fiat)

router.get('/chevrolet', PageController.chevrolet)

router.get('/search', SearchController.search)


export default router