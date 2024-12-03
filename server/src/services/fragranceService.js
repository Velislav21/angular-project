import Fragrance from "../models/Fragrance.js";

const fragranceService = {

    getAll(filter = {}) {
        const query = Fragrance.find();

        if (filter.name) {
            query.find({ name: { $regex: filter.name, $options: 'i' } })
        }
        return query
    },
    getOne(fragranceId) {
        return Fragrance.findById(fragranceId);
    },
    create(fragranceData, ownerId) {
        return Fragrance.create({ ...fragranceData, owner: ownerId });
    },
   
    remove(fragranceId) {
        return Fragrance.findByIdAndDelete(fragranceId);
    },
    update(fragranceId, fragranceData) {
        return Fragrance.findByIdAndUpdate(fragranceId, fragranceData);
        // return Fragrance.findByIdAndUpdate(fragranceId, fragranceData);
    },
    like(fragranceId, userId) {
        return Fragrance.findByIdAndUpdate(fragranceId, { $push: { likedList: userId } })
    }
}

export default fragranceService;