const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const notes = [];
const users = [{
    username:"hritik",
    password: "123456"}
];

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const userexist = users.find((user) => user.username === username);
  if (userexist) {
    return res.status(403).json({
      message: "user with similar name already exist ",
    });
  }
  users.push({
    username: username,
    password: password,
  });
//   res.json({
//     message:"you have signed up  "
//   })
  
  const token = res.json({
    token :token 
})
});


app.post("/signin",function(req,res){
     const username = req.body.username;
  const password = req.body.password;
  const userexist = users.find(user=>user.username===username && user.password===password ); 

  if (!userexist) {
    res.status(403).json({
        message : "user dont exist  "
    })
    return ; 
}
// json web token  
const token =  jwt.sign({
   username: username 
},"hritik123" )
res.json({
    token : token 
})
})



app.post("/notes", function (req, res) {

     const token = req.headers.token 
     if (!token ) {
        res.status(403).send({
            message:"you are not logged in "
        });
        return ; 
     }

const decoded = jwt.verify(token ,"hritik123")
const username=decoded.username 
if (!username) {
    res.status(403).json({
        message: " malformed token "
    })
    return ;
}

  const note = req.body.note;
  notes.push({
    note : note ,
    username:username
  });

  res.json({
    message: "done add notes ",
  });
});

app.get("/notes", function (req, res) {
       const token = req.headers.token 
     if (!token ) {
        res.status(403).send({
            message:"you are not logged in "
        });
        return ; 
     }

const decoded = jwt.verify(token ,"hritik123")
const username=decoded.username 
if (!username) {
    res.status(403).json({
        message: " malformed token "
    })
    return ;
}


const usernotes = notes.filter(note =>note.username==username )

  res.json({
    notes:usernotes 
  });
});
app.get("/", function (req, res) {
  res.sendFile(
    "/home/hritik/Work/web_development/javascript/lecture/auth/frontend/index.html",
  );
});

app.get("/signup", function (req, res) {
  res.sendFile(
    "/home/hritik/Work/web_development/javascript/lecture/auth/frontend/signup.html",
  );
});

app.get("/signin", function (req, res) {
  res.sendFile(
    "/home/hritik/Work/web_development/javascript/lecture/auth/frontend/signin.html",
  );
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
