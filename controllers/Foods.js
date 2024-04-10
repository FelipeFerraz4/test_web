app.get("/api/foods", async (req,res)=>{
    res.send(foods);
});

app.post('api/foods', (req,res) => {
    console.log('new food');
    // const food = {
    //     "id":req.body,
    //     "name":req.body,
    //     "category": req.body,
    //     "quantity": req.body,
    //     "expirationDate": req.body,
    //     "price": req.body
    // };
    res.send('new foods');
})
