const express = require("express");
const port = 8000;
const app = express();
app.use(express.json());

app.get("/api/user", (req,res) => {
    res.json({
        user: [
            {
                _id: 1,
                firstname: "Jason",
                lastname:"Mcelvain",
                phonenumber:666-666-6666,
                email: "bpt@yahoo.net",
                password: "ppppp"

            },
        ],

    });
});

app.get("/api/company", (req,res)=> {
    res.json({
        company: [
            {
                _id: 1,
                name: "Nike",
                address: " east malibu dr",
                city: "portland",
                state: "Oregon",
                Zip : 36754,
                country: "USA",

            },
                    
                        
                
        ],

        
    });
});

app.post("/api/user", (req,res)=>{
    console.log(req.body);
    res.json({
        status: "success",
        user: req.body,
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port} for REQuests to RESpond to`);
});
