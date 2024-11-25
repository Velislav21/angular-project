import { Router } from "express";
import fragranceService from "../services/fragranceService.js";
import getError from "../utils/error.js";
const fragranceController = Router();

// /fragrances
fragranceController.get('/', async (req, res) => {

    const fragrances = await fragranceService.getAll().lean();

    res.status(200).json(fragrances);
})

fragranceController.get('/details/:fragranceId', async (req, res) => {

    const id = req.params.fragranceId
    const fragrance = await fragranceService.getOne(id).lean();

    res.status(200).json(fragrance);
})

fragranceController.post('/create', async (req, res) => {
    
    // const ownerId = req.user._id;

    const fragranceData = req.body;
    //! ownerId !!!
    try {
        const fragrance = await fragranceService.create(fragranceData)
        res.status(200).json(fragrance)
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})
fragranceController.patch('/update/:fragranceId', async (req, res) => {

    const fragranceId = req.params.fragranceId;
    const fragranceData = req.body;
    try {
        const result = await fragranceService.update(fragranceId, fragranceData)
        res.status(200).json(result)
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})



// /fragrances/search
// fragranceController.get('/search', async (req, res) => {

//     const query = req.query
//     const planets = await planetService.getAll(query).lean();

// })

// planetController.get('/create', isAuth, (req, res) => {

// planetController.post('/create', isAuth, async (req, res) => { ORIGINAL
// fragranceController.post('/create', isAuth, async (req, res) => {

//     const planetData = req.body;
//     console.log(planetData)

//     try {

//         await planetService.create(planetData);
//         return

//     } catch (err) {
//         console.log(err)
//     }
// })

// fragranceController.get('/:planetId/details', async (req, res) => {
//     const planetId = req.params.planetId;

//     const planet = await planetService.getOne(planetId).lean();
//     const isOwner = planet.owner == req.user?._id;
//     const isLiked = planet.likedList?.some(planetId => planetId == req.user?._id)


// })
// fragranceController.get('/:planetId/like', isAuth, async (req, res) => {

//     const planetId = req.params.planetId
//     const userId = req.user._id
//     const planet = await planetService.getOne(planetId)

//     if (planet.owner.toString() === userId) {
//         return res.redirect('/404');
//     }

//     await planetService.like(planetId, userId)

// })

// fragranceController.get('/:planetId/delete', isAuth, async (req, res) => {

//     if (!isOwner(req.params.planetId, req.user._id)) {
//         return res.redirect('/404')
//     }

//     await planetService.remove(req.params.planetId);
//     res.redirect('/planets')
// })

// fragranceController.get('/:planetId/edit', isAuth, async (req, res) => {

//     const planet = await planetService.getOne(req.params.planetId).lean();
//     const planetTypeData = getPlanetType(planet);
//     const ringsData = getRingsData(planet);
//     const isOwner = planet.owner.toString() === req.user._id;

//     if (!isOwner) {
//         return res.redirect('/404')
//     }

// })

// fragranceController.post('/:planetId/edit', isAuth, async (req, res) => {
//     const planetData = req.body;
//     const planetId = req.params.planetId;

//     if (!isOwner(planetId, req.user._id)) {
//     }
//     try {
//         await planetService.update(planetId, planetData);
//         res.redirect(`/planets/${planetId}/details`)

//     } catch (err) {
//         const error = getError(err)
//         const planetTypeData = getPlanetType(planetData);
//         const ringsDataTypes = getRingsData(planetData);

//     }
// })

// async function isOwner(planetId, userId) {
//     const planet = await planetService.getOne(planetId).lean();
//     const isOwner = planet.owner.toString() === userId;

//     return isOwner
// }

export default fragranceController