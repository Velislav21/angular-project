import Fragrance from "../models/Fragrance.js";

const fragranceService = {

    getAll(filter = {}) {
        const query = Fragrance.find();

        if (filter.name) {
            query.find({ name: { $regex: filter.name, $options: 'i' } })
        }

        // if (filter.solarSystem) {
        //     query.find({ solarSystem: filter.solarSystem })
        // }
        return query
    },
    getOne(fragranceId) {
        return Fragrance.findById(fragranceId);
    },
    create(fragranceData) {
        return Fragrance.create({ ...fragranceData });
    },
    // create(fragranceData, userId) {
    //     return Fragrance.create({ ...fragranceData, owner: userId });
    // }, -- ORIGINAL FUNCTION 
    remove(fragranceId) {
        return Fragrance.findByIdAndDelete(fragranceId);
    },
    update(fragranceId, fragranceData) {
        // return Fragrance.findByIdAndUpdate(fragranceId, fragranceData, { runValidators: true });
        return Fragrance.findByIdAndUpdate(fragranceId, fragranceData);
    },
    like(fragranceId, userId) {
        return Fragrance.findByIdAndUpdate(fragranceId, { $push: { likedList: userId } })
    }
}

export default fragranceService;