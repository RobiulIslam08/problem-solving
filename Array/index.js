db.test.aggregate([
    
    {
        $facet: {
            // pipeline 1
            friendsCount: [
                //stage 1
                { $unwind: "$friends" },
                //stage 2
                { $group: { _id: "$friends", count: { $sum: 1 } } }
            ],
            // pipeline 1
            educationCount: [
                //stage 1
                { $unwind: "$education" },
                //stage 2
                { $group: { _id: "$education", count: { $sum: 1 } } }
            ]
        }
    }
])
