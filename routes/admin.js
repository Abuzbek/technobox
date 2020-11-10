const express = require('express');
const router = express.Router();
const Users = require('../model/UserAdmin')
const Help = require('../model/Help')
const Product = require('../model/Product')
    // ============== rasim images fayiliga yuklash jarayoni   ==============
const upload = require('../helper/file')
    // ============== rasim images fayiliga yuklash jarayoni   ==============
const eA = require('../helper/eA')
    /* GET home page. */
router.get('/admin', eA, (req, res, next) => {
    Product.find({}, (err, product) => {
        if (err) {
            console.log(err);
        }
        else{
            res.render('admin', {
                title: 'ASSALOMU ALEKUM HOJAYIN',
                product
            })
        }
    
    })

});
router.post('/admin', upload.single('img'), (req, res, next) => {
    try {
        // console.log(req.body); 
        const product = new Product({
            img:req.file.filename,
            name:req.body.name,
            type:req.body.type,
            square:req.body.square,
            Power:req.body.Power,
            display:req.body.display,
            curtains:req.body.curtains,
            coverings:req.body.coverings,
            remote:req.body.remote,
            refrigerantType:req.body.refrigerantType,
            Blowing:req.body.Blowing,
            capacityOffered:req.body.capacityOffered,
            nameUz:req.body.nameUz,
            typeUz:req.body.typeUz,
            squareUz:req.body.squareUz,
            PowerUz:req.body.PowerUz,
            displayUz:req.body.displayUz,
            curtainsUz:req.body.curtainsUz,
            coveringsUz:req.body.coveringsUz,
            remoteUz:req.body.remoteUz,
            refrigerantTypeUz:req.body.refrigerantTypeUz,
            BlowingUz:req.body.BlowingUz,
            capacityOfferedUz:req.body.capacityOfferedUz
        })
        product.save((err, product) => {
            if (err) {
                console.log(err);
            } else {
                req.flash('info', `Maxsulotimiz muaffaqiyatli qo'shildi hohlasangiz kirib ko'ring`)
                res.redirect('/admin')
            }
        })
        console.log(req.file);
    } catch (error) {
        console.log(error);
    }

});
router.get('/delete/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err) => {
        if (err) console.log(err);
        else {
            req.flash('info', 'Maxsulot muaffaqiyatli ochdi')
            res.redirect('/admin');
        }
    })
})
router.get('/usersAdmin', eA, (req,res)=>{
    Help.find({},(err,admin)=>{
        if (err) {
            console.log(err);
        } else {
            res.render('usersAdmin',{
                title:'Help users',
                admin:admin
            })
        }
    })
})
module.exports = router;