// Arshdeep Singh || arshdeepsingh5476@conestogac.on.ca || StudentID - 8715476

// import dependencies you will use
const express = require('express');
const path = require('path');

//setting up Express Validator
const {check, validationResult} = require('express-validator');  
const { toNamespacedPath } = require('path');

// set up variables to use packages
var myApp = express();
myApp.use(express.urlencoded({extended:false})); // new way after Express 4.16

// set path to public folders and view folders
myApp.set('views', path.join(__dirname, 'views'));

//use public folder for CSS etc.
myApp.use(express.static(__dirname+'/public'));
myApp.set('view engine', 'ejs');
// set up different routes (pages) of the website

//home page
myApp.get('/', function(req, res){
    res.render('form'); 
});

//defining regular expressions
var phoneCheck = /^[0-9]{10}$/;
var emailCheck = /^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/;
var positiveNum = /^[1-9][0-9]*$/;
var priceTableLamps = 5;
var priceFloorLamps = 8;
var pricePortableLamps = 15;
var priceLEDLamps = 10;
var salesTax = 0.15;
var salesTaxPercentage;

//function to check a value using regular expression
function checkRegex(userInput, regex)
{
    if(regex.test(userInput)){
        return true;
    }
    else{
        return false;
    }
}

// Custom phone validation function
function customPhoneValidation(value)
{
    if(!checkRegex(value, phoneCheck))
    {
        throw new Error('Phone should be in the format xxxxxxxxxx');
    }
    return true;
}

// Custom e-mail validation function
function customEmailValidation(value)
{
    if(!checkRegex(value, emailCheck))
    {
        throw new Error('Email should be in the format test@test.com');
    }
    return true;
}

// Quantity validation function
function customTableLampsQuantityValidation(value, {req})
{
    var tableLamps = req.body.tableLamps;
    var floorLamps = req.body.floorLamps;
    var portableLamps = req.body.portableLamps;
    var ledLamps = req.body.ledLamps;
    
    if((tableLamps == '') && (floorLamps == '') && (portableLamps == '') && (ledLamps == ''))
    {
        throw new Error('Quantity can not be left blank');
    }

    if(tableLamps != '')
    {
        if(!checkRegex(tableLamps, positiveNum))
        {
            throw new Error('Table Lamps quantity should be a number');
        }
    }
   return true;
}

// Floor Lamp Quantity validation function
function customFloorLampQuantityValidation(value, {req})
{
    var floorLamps = req.body.floorLamps;
    
    if(floorLamps != '')
    {
        if(!checkRegex(floorLamps, positiveNum))
        {
            throw new Error('Floor Lamps quantity should be a number');
        }
    }
    return true;
}

// Portable Lamp Quantity validation function
function customPortableLampQuantityValidation(value, {req})
{
    var portableLamps = req.body.portableLamps;
    
    if(portableLamps != '')
    {
        if(!checkRegex(portableLamps, positiveNum))
        {
            throw new Error('Portable Lamps quantity should be a number');
        }
    } 
    return true;
}

// LED Lamp Quantity validation function
function customLEDLampQuantityValidation(value, {req})
{
    var ledLamps = req.body.ledLamps;
    
    if(ledLamps != '')
    {
        if(!checkRegex(ledLamps, positiveNum))
        {
            throw new Error('LED Lamps quantity should be a number');
        }
    }
    return true;
}

//Validation check for Minimum purchased amount
function customTotalPriceValidation(value, {req})
{
    var tableLamps = req.body.tableLamps;
    var floorLamps = req.body.floorLamps;
    var portableLamps = req.body.portableLamps;
    var ledLamps = req.body.ledLamps;

    if(tableLamps != '')
    {
        tableLamps = parseInt(tableLamps);
    }
    else
    {
        tableLamps = 0;
    }

    if(floorLamps != '')
    {
        floorLamps = parseInt(floorLamps);
    }
    else
    {
        floorLamps = 0;
    }

    if(portableLamps != '')
    {
        portableLamps = parseInt(portableLamps);
    }
    else
    {
        portableLamps = 0;
    }

    if(ledLamps != '')
    {
        ledLamps = parseInt(ledLamps);
    }
    else
    {
        ledLamps = 0;
    }

    var totalPriceTableLamps = tableLamps * parseInt(priceTableLamps);
    var totalFloorLamps = floorLamps * parseInt(priceFloorLamps);
    var totalPortableLamps = portableLamps * parseInt(pricePortableLamps);
    var totalLEDLamps = ledLamps * parseInt(priceLEDLamps); 

    var subTotal = totalPriceTableLamps + totalFloorLamps + totalPortableLamps + totalLEDLamps;

    if(subTotal < 10)
    {
        throw new Error('Total Price of items must be more than $10.00');
    }
    return true;
}

//form submission handler
myApp.post('/',  [
    check('name', 'Must have a name').notEmpty(),
    check('address', 'Must have a address').notEmpty(),
    check('city', 'Must have a city').notEmpty(),
    check('province', 'Must have a province').notEmpty(),
    check('phone').custom(customPhoneValidation),
    check('email').custom(customEmailValidation),
    check('tableLamps').custom(customTableLampsQuantityValidation),
    check('floorLamps').custom(customFloorLampQuantityValidation),
    check('portableLamps').custom(customPortableLampQuantityValidation),
    check('ledLamps').custom(customLEDLampQuantityValidation),
    check('subTotal').custom(customTotalPriceValidation)

],function(req, res)
{
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        res.render('form', {
            errors:errors.array()
        });
    }
    else
    {
        var name = req.body.name;
        var email = req.body.email;
        var phone = req.body.phone;
        var address = req.body.address;
        var province = req.body.province;
        var city = req.body.city;
        var postcode = req.body.postCode;
        var tableLamps = req.body.tableLamps;
        var floorLamps = req.body.floorLamps;
        var portableLamps = req.body.portableLamps;
        var ledLamps = req.body.ledLamps;

        if(tableLamps != '')
        {
            tableLamps = parseInt(tableLamps);
        }
        else
        {
            tableLamps = 0;
        }

        if(floorLamps != '')
        {
            floorLamps = parseInt(floorLamps);
        }
        else
        {
            floorLamps = 0;
        }
   
        if(portableLamps != '')
        {
            portableLamps = parseInt(portableLamps);
        }
        else
        {
            portableLamps = 0;
        }

        if(ledLamps != '')
        {
            ledLamps = parseInt(ledLamps);
        }
        else
        {
            ledLamps = 0;
        }
        var qtyTableLamps = tableLamps;
        var qtyFloorLamps = floorLamps;
        var qtyPortableLamps = portableLamps;
        var qtyLEDLamps = ledLamps;    
        var totalPriceTableLamps = tableLamps * parseInt(priceTableLamps);
        var totalFloorLamps = floorLamps * parseInt(priceFloorLamps);
        var totalPortableLamps = portableLamps * parseInt(pricePortableLamps);
        var totalLEDLamps = ledLamps * parseInt(priceLEDLamps); 

        var subTotal = totalPriceTableLamps + totalFloorLamps + totalPortableLamps + totalLEDLamps;

        if((province == 'Alberta') || (province == 'NorthwestTerritories') || (province == 'Nunavut') || (province == 'Yukon'))
        {
            salesTax = 0.05; 
            salesTaxPercentage = 5;
        }
        else if(province == 'Saskatchewan')
        {
            salesTax = 0.11;
            salesTaxPercentage = 11;
        }
        else if((province == 'BritishColumbia') || (province == 'Manitoba'))
        {
            salesTax = 0.12;
            salesTaxPercentage = 12;
        }
        else if(province == 'Ontario')
        {
            salesTax = 0.13;
            salesTaxPercentage = 13;
        }
        else
        {
            salesTax = 0.15;
            salesTaxPercentage = 15;
        }
  
        var tax = subTotal * salesTax;
        var total = subTotal + tax;
        
        var pageData = 
        {
            name : name,
            email : email,
            phone : phone, 
            address : address,
            province : province,
            city : city,
            postcode : postcode,
            qtyTableLamps : qtyTableLamps,
            qtyFloorLamps : qtyFloorLamps,
            qtyPortableLamps : qtyPortableLamps,
            qtyLEDLamps : qtyLEDLamps,
            priceTableLamps : priceTableLamps,
            priceFloorLamps : priceFloorLamps,
            pricePortableLamps : pricePortableLamps,
            priceLEDLamps : priceLEDLamps,
            tableLamps : totalPriceTableLamps,
            floorLamps : totalFloorLamps,
            portableLamps : totalPortableLamps,
            ledLamps : totalLEDLamps,
            subTotal : subTotal,
            tax : tax,
            salesTaxPercentage : salesTaxPercentage,
            total : total
        }
        res.render('form', pageData);
    }
});

// start the server and listen at a port
myApp.listen(8080);

//tell everything was ok
console.log('Everything executed fine.. website at port 8080....');


