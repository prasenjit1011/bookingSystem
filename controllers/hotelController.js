const Booking = require('../models/bookingModel');

exports.getHotelList = (req, res, next)=>{
    let id = req.params.id ?? 1;
    
    console.log('Id =>> ', id);
    next();
}

exports.bookNow = (req, res, next)=>{

    let hotelBooking = new Booking({userId:req.body.userId, hotelId: req.body.hotelId, dtd: req.body.dtd});
    return hotelBooking
            .save()
            .then(data=>{
                console.log(data);
                let result = {status:true, msg:'Booking successfull on date '+req.body.dtd};
                return res.end(JSON.stringify(result));
            })
            .catch();

}

exports.bookingList = (req, res, next)=>{

    return Booking
                .find()
                .then(data=>{
                    return res.end(JSON.stringify(data));
                })
                .catch();
}
