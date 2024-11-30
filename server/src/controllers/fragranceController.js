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
    
    const ownerId = req.user._id;
    const fragranceData = req.body;

    // console.log(ownerId, fragranceData)
    try {
        const fragrance = await fragranceService.create(fragranceData, ownerId)
        res.status(200).json(fragrance)
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})
fragranceController.patch('/edit/:fragranceId', async (req, res) => {

    const fragranceId = req.params.fragranceId;
    const fragranceData = req.body;
    // console.log(fragranceId, fragranceData)
    try {
        const result = await fragranceService.update(fragranceId, fragranceData)
        res.status(200).json(result)
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})

fragranceController.delete('/delete/:fragranceId', async (req, res) => {

    const fragranceId = req.params.fragranceId;

    try {
        await fragranceService.remove(fragranceId);
        res.status(200).json({message: "deleted"})
    } catch (err) {
        const error = getError(err);
        res.status(400).json({ message: error })
    }
})

export default fragranceController