const checkMillionDollarIdea = (req, res, next) => {
    const total = req.body.numWeeks * req.body.weeklyRevenue;
    if (total >= 1000000) {
        next();
    } else {
        return;
    }
};


module.exports = checkMillionDollarIdea;
