const express=require('express');
const path=require('path');

const port=1000;
// const Contact = require('./models/contact');
const db=require('./config/mongoose');
const Contact = require('./models/contact');

const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var ToDoList=[
    {
        Purpose:"Buy Vegetables",
        Date:"02/02/2020",
        Category:"Work"
    },
    {
        Purpose:"Vegetables",
        Date:"02/02/2020",
        Category:"Personal"
    }

]

app.get('/',function(req,res){
    Contact.find({}, function(err, contacts){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return res.render('home',{
            title: "Contact List",
            to_do_list: contacts
        });

    })
});
app.post('/CreateList',function(req,res){
    Contact.create({
        Purpose: req.body.Purpose,
        Date: req.body.Date,
        Category:req.body.Category
    }, function(err, newContact){
        if(err){console.log('Error in creating a contact!')
            return;}
            console.log('******', newContact);
            return res.redirect('back');
    })
});
app.post('/delete-task', function(req, res) {
    if (req.body.checked == undefined) {
        return res.redirect("/");
    } else if (req.body.checked.length == 24) {
        Contact.findByIdAndDelete(req.body.checked, (err) => {
            if (err) {
                console.log("error in deleting a Task");
                return;
            }
            return res.redirect("/");
        });
    } else {
        for (let i = 0; i < req.body.checked.length; i++) {
            Contact.findByIdAndDelete(req.body.checked[i], (err) => {
                if (err) {
                    console.log("error in deleting a Task");
                    return;
                }
            });
        }
        return res.redirect("/");
    }

});

app.listen(port,function(err){
    if(err){
        console.log('Error',err);
    }
    console.log('server port:',port);
});


