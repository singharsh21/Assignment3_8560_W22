//Arshdeep Singh || arshdeepsingh5476@conestogac.on.ca || StudentID - 8715476

function formSubmit()
{
    return true;
    var priceTableLamps = 10;
    var priceFloorLamps = 20;
    var pricePortableLamps = 5;
    var priceLEDLamps = 15;
    //var priceCupCakes = 5;  
    var fixedDonation = 10; 
    var donationPercentage = 10;
    const firstPart = 'xxxx-xxxx-xxxx-';

    var totalPriceTableLamps = 0;
    var totalPriceFloorLamps = 0;
    var totalPricePortableLamps = 0;
    var totalPriceLEDLamps = 0;
    //var totalPriceCupCakes = 0;
    var donationItems = 0;
    var finalDonation = 0;
    var finalTotal = 0;
    
    var inputName = document.getElementById('name').value;
    var inputEmail = document.getElementById('email').value;
    var inputPhone = document.getElementById('phone').value;
    var inputAddress = document.getElementById('address').value;
    var inputProvince = document.getElementById('province').value;
    var inputCity = document.getElementById('city').value;
    var inputPostCode = document.getElementById('postCode').value;
    var inputCreditNo = document.getElementById('creditNo').value;
    var inputCreditMonth = document.getElementById('creditMonth').value;
    var inputCreditYear = document.getElementById('creditYear').value;
    var inputTableLamps = document.getElementById('tableLamps').value;
    var inputFloorLamps = document.getElementById('floorlamps').value;
    var inputPortableLamps = document.getElementById('portablelamps').value;
    var inputLEDLamps = document.getElementById('ledLamps').value;
    //var inputCupCakes = document.getElementById('cupCakes').value;

    var errors = '';

    //Validation Check on Name field.
    var nameCheck = /^[a-zA-Z]+[\-\s]?[a-zA-Z]+$/;
    if(inputName == '')
    {
        errors += 'Name can not be left blank. <br>';
    }
    else    
    {
        if((!nameCheck.test(inputName)) && (inputName != '')) 
        {
            errors += 'Name should only include alphabets only. <br>';
        }
    }

    //Validation Check on Email field.
    var emailCheck = /^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/;
    if(inputEmail == '')
    {
        errors += 'Email can not be left blank. <br>';
    }
    else
    {
        if((!emailCheck.test(inputEmail)) && (inputEmail != '')) 
        {
            errors += 'Email should be in format aaa@aaa.com only. <br>';
        }
    }

    //Validation Check on Phone Number.
    var phoneCheck = /^\(?(\d{3})\)?[\.\-\/\s]?(\d{3})[ \.\-\/\s]?(\d{4})$/;
    if(inputPhone == '')
    {
        errors += 'Phone Number can not be left blank. <br>';
    }
    else
    {
        if((!phoneCheck.test(inputPhone)) && (inputPhone != ''))
        {
            errors += 'Phone Number should include only integers. <br>';
        }
    }
    
    //Null value check on Address field.
    if(inputAddress == '')
    {
        errors += 'Address can not be left blank. <br>';
    }

    //Null value check on Province field.
    if(inputProvince == '')
    {
        errors += 'Province can not be left blank. <br>';
    }

    //Null value check on City field.
    if(inputCity == '')
    {
        errors += 'City can not be left blank. <br>';
    }

    //Validation Check on Postal Code.
    var postCodeCheck = /^[A-Za-z][0-9][A-Za-z]\s[0-9][A-Za-z][0-9]$/;
    if(!postCodeCheck.test(inputPostCode))
    {
        errors += 'Postal Code should be in the format A2A 2A2 <br>';
    }

    //Validation Check on Credit Card Number.
    var creditNoCheck = /^[0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9]$/;
    if((!creditNoCheck.test(inputCreditNo)) && (inputCreditNo != ''))
    {
        errors += 'Credit Card Number should be in the format 1234-1234-1234<br>'; 
    }   

    if((inputCreditMonth != '') || (inputCreditYear != ''))
    {
        if(inputCreditNo == '')
        {
            errors += "Credit Card Number is required <br>";
        }
    }

    //Validation Check on Credit Card Month.
    var creditMonthCheck = /^[A-Za-z][A-Za-z][A-Za-z]$/;
    if((!creditMonthCheck.test(inputCreditMonth)) && (inputCreditMonth != ''))
    {
        errors += 'Credit Card Month should be in the format MMM<br>'; 
    }

    //Validation Check on Credit Card Year.
    var creditYearCheck = /^[0-9][0-9][0-9][0-9]$/;
    if((!creditYearCheck.test(inputCreditYear)) && (inputCreditYear != ''))
    {
        errors += 'Credit Card Year should be in the format yyyy<br>'; 
    }
    
    //Validation Check on Empty Quantity fields.
    //if ((inputTableLamps == "") && (inputFloorLamps == "") && (inputPortableLamps == 0) && (inputLEDLamps == "") && (inputCupCakes == ""))
    if ((inputTableLamps == "") && (inputFloorLamps == "") && (inputPortableLamps == 0) && (inputLEDLamps == ""))
    {
        errors += 'Quantity can not be left blank.';
    }
    
    //Validation Check on Quantity field 1.
    var numberCheck = /^[0-9]+$/;
    if((!numberCheck.test(inputTableLamps)) && (inputTableLamps != '')) 
    {
        errors += "Water Bottles: Quantity should be in number<br>";
    }

    //Validation Check on Quantity field 2.
    if((!numberCheck.test(inputFloorLamps)) && (inputFloorLamps != ''))
    {
        errors += "FloorLamps: Quantity should be in number<br>";
    } 
    
    //Validation Check on Quantity field 3.
    if((!numberCheck.test(inputPortableLamps)) && (inputPortableLamps != ''))
    {
        errors += "PortableLamps: Quantity should be in number<br>";
    }
    
    //Validation Check on Quantity field 4.
    if((!numberCheck.test(inputLEDLamps)) && (inputLEDLamps != ''))
    {
        errors += "Candy Bags: Quantity should be in number<br>";
    }
    
    //Validation Check on Quantity field 5.
/*    if((!numberCheck.test(inputCupCakes)) && (inputCupCakes != '')) 
    {
        errors += "Cup Cakes: Quantity should be in number<br>";
    }   */   

    if(errors)
    {
        document.getElementById('errors').innerHTML = errors;
        document.getElementById('formResult').innerHTML = '';
    }
    else
    {
        document.getElementById('errors').innerHTML = '';
        var output = 'Thank you for your purchase! <br>';
        document.getElementById('formResult').innerHTML = output;

        //Setting Water Bottle Price while keeping check on NULL Value.
        if(inputTableLamps != '')
        {
            totalPriceTableLamps = parseInt(inputTableLamps) * priceTableLamps;
        }
        else
        {
            totalPriceTableLamps = 0;
        }

        //Setting FloorLamps Price while keeping check on NULL Value.
        if(inputFloorLamps != '')
        {
            totalPriceFloorLamps = parseInt(inputFloorLamps) * priceFloorLamps;
        }
        else
        {
            totalPriceFloorLamps = 0;
        }

        //Setting PortableLamps Price while keeping check on NULL Value.
        if(inputPortableLamps != '')
        {
            totalPricePortableLamps = parseInt(inputPortableLamps) * pricePortableLamps;
        }
        else
        {
            totalPricePortableLamps = 0;
        }

        //Setting Candy Bags Price while keeping check on NULL Value.
        if(inputLEDLamps != '')
        {
            totalPriceLEDLamps = parseInt(inputLEDLamps) * priceLEDLamps;
        }
        else
        {
            totalPriceLEDLamps = 0;
        }

        //Setting Cup Cakes Price while keeping check on NULL Value.
    /*    if(inputCupCakes != '')
        {
            totalPriceCupCakes = parseInt(inputCupCakes) * priceCupCakes;
        }
        else
        {
            totalPriceCupCakes = 0;
        }   */
        
    //    var totalItems = totalPriceTableLamps + totalPriceFloorLamps + totalPricePortableLamps + totalPriceLEDLamps + totalPriceCupCakes;
        var totalItems = totalPriceTableLamps + totalPriceFloorLamps + totalPricePortableLamps + totalPriceLEDLamps;

        //Fixing Donation Value..
        var donationItems = donationPercentage / 100 * totalItems;
        if(fixedDonation > donationItems)
        {
            finalDonation = fixedDonation;
        }
        else
        {
            finalDonation = donationItems;
        }

        finalTotal = totalItems + finalDonation;
    
        //Creating Table in Receipt Column to show basic details of User
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        table.appendChild(thead);
        table.appendChild(tbody);

        //document.getElementById('body').appendChild(table);
        document.getElementById('formResult').appendChild(table);

        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = "Name";
        let data_1 = document.createElement('td');
        data_1.innerHTML = inputName;

        row_1.appendChild(heading_1);
        row_1.appendChild(data_1);
        thead.appendChild(row_1);

        let row_2 = document.createElement('tr');
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = "Email";
        let data_2 = document.createElement('td');
        data_2.innerHTML = inputEmail;

        row_2.appendChild(heading_2);
        row_2.appendChild(data_2);
        thead.appendChild(row_2);

        let row_3 = document.createElement('tr');
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = "Credit Card";
        let data_3 = document.createElement('td');
        if(inputCreditNo != "")
        {
            var lastFour = inputCreditNo.slice(-4);
            var finalCreditNo = firstPart.concat('', lastFour);
            data_3.innerHTML = finalCreditNo;
        }
        else
        {
            data_3.innerHTML = "";
        }
        
        row_3.appendChild(heading_3);
        row_3.appendChild(data_3);
        thead.appendChild(row_3);

        //Creating Table 2 for displaying Price of quantities user bought. 
        let table1 = document.createElement('table');
        let thead1 = document.createElement('thead');
        let tbody1 = document.createElement('tbody');

        table1.appendChild(thead1);
        table1.appendChild(tbody1);

        document.getElementById('formResult').appendChild(table1);
        
        let row_4 = document.createElement('tr');
        let heading_4 = document.createElement('th');
        heading_4.innerHTML = "Item";
        let heading_5 = document.createElement('th');
        heading_5.innerHTML = "Quantity";
        let heading_6 = document.createElement('th');
        heading_6.innerHTML = "Unit Price";
        let heading_7 = document.createElement('th');
        heading_7.innerHTML = "Total Price";

        row_4.appendChild(heading_4);
        row_4.appendChild(heading_5);
        row_4.appendChild(heading_6);
        row_4.appendChild(heading_7);
        thead.appendChild(row_4);

        if(inputTableLamps != '')
        {
            let row_5 = document.createElement('tr');
            let r5Data_1 = document.createElement('td');
            r5Data_1.innerHTML = "Water Bottles";
            let r5Data_2 = document.createElement('td');
            r5Data_2.innerHTML = inputTableLamps;
            let r5Data_3 = document.createElement('td');
            r5Data_3.innerHTML = "$" + priceTableLamps.toFixed(2);
            let r5Data_4 = document.createElement('td');
            r5Data_4.innerHTML = "$" + totalPriceTableLamps.toFixed(2);
            
            r5Data_2.style.textAlign = "Center";
            r5Data_3.style.textAlign = "Right";
            r5Data_4.style.textAlign = "Right";

            row_5.appendChild(r5Data_1);
            row_5.appendChild(r5Data_2);
            row_5.appendChild(r5Data_3);
            row_5.appendChild(r5Data_4);
            thead.appendChild(row_5);
        }
        if(inputFloorLamps != '')
        {
            let row_6 = document.createElement('tr');
            let r6Data_1 = document.createElement('td');
            r6Data_1.innerHTML = "FloorLamps";
            let r6Data_2 = document.createElement('td');
            r6Data_2.innerHTML = inputFloorLamps;
            let r6Data_3 = document.createElement('td');
            r6Data_3.innerHTML = "$" + priceFloorLamps.toFixed(2);
            let r6Data_4 = document.createElement('td');
            r6Data_4.innerHTML = "$" + totalPriceFloorLamps.toFixed(2);
        
            r6Data_2.style.textAlign = "Center";
            r6Data_3.style.textAlign = "Right";
            r6Data_4.style.textAlign = "Right";

            row_6.appendChild(r6Data_1);
            row_6.appendChild(r6Data_2);
            row_6.appendChild(r6Data_3);
            row_6.appendChild(r6Data_4);
            thead.appendChild(row_6);
        }
        if(inputPortableLamps != '')
        {
            let row_7 = document.createElement('tr');
            let r7Data_1 = document.createElement('td');
            r7Data_1.innerHTML = "PortableLamps";
            let r7Data_2 = document.createElement('td');
            r7Data_2.innerHTML = inputPortableLamps;
            let r7Data_3 = document.createElement('td');
            r7Data_3.innerHTML = "$" + pricePortableLamps.toFixed(2);
            let r7Data_4 = document.createElement('td');
            r7Data_4.innerHTML = "$" + totalPricePortableLamps.toFixed(2);
        
            r7Data_2.style.textAlign = "Center";
            r7Data_3.style.textAlign = "Right";
            r7Data_4.style.textAlign = "Right";

            row_7.appendChild(r7Data_1);
            row_7.appendChild(r7Data_2);
            row_7.appendChild(r7Data_3);
            row_7.appendChild(r7Data_4);
            thead.appendChild(row_7);
        }
        if(inputLEDLamps != '')
        {
            let row_8 = document.createElement('tr');
            let r8Data_1 = document.createElement('td');
            r8Data_1.innerHTML = "Candy Bags";
            let r8Data_2 = document.createElement('td');
            r8Data_2.innerHTML = inputLEDLamps;
            let r8Data_3 = document.createElement('td');
            r8Data_3.innerHTML = "$" + priceLEDLamps.toFixed(2);
            let r8Data_4 = document.createElement('td');
            r8Data_4.innerHTML = "$" + totalPriceLEDLamps.toFixed(2);
        
            r8Data_2.style.textAlign = "Center";
            r8Data_3.style.textAlign = "Right";
            r8Data_4.style.textAlign = "Right";

            row_8.appendChild(r8Data_1);
            row_8.appendChild(r8Data_2);
            row_8.appendChild(r8Data_3);
            row_8.appendChild(r8Data_4);
            thead.appendChild(row_8);
        }
    /*    if(inputCupCakes != '')
        {
            let row_9 = document.createElement('tr');
            let r9Data_1 = document.createElement('td');
            r9Data_1.innerHTML = "Cup Cakes";
            let r9Data_2 = document.createElement('td');
            r9Data_2.innerHTML = inputCupCakes;
            let r9Data_3 = document.createElement('td');
            r9Data_3.innerHTML = "$" + priceCupCakes.toFixed(2);
            let r9Data_4 = document.createElement('td');
            r9Data_4.innerHTML = "$" + totalPriceCupCakes.toFixed(2);
        
            r9Data_2.style.textAlign = "Center";
            r9Data_3.style.textAlign = "Right";
            r9Data_4.style.textAlign = "Right";
            
            row_9.appendChild(r9Data_1);
            row_9.appendChild(r9Data_2);
            row_9.appendChild(r9Data_3);
            row_9.appendChild(r9Data_4);
            thead.appendChild(row_9);
        }   */
        
        let row_10 = document.createElement('tr');
        let r10Data_1 = document.createElement('td');
        r10Data_1.innerHTML = "Donation";
        let r10Data_2 = document.createElement('td');
        r10Data_2.innerHTML = '';
        let r10Data_3 = document.createElement('td');
        r10Data_3.innerHTML = 'Minimum';
        let r10Data_4 = document.createElement('td');
        r10Data_4.innerHTML = "$" + finalDonation.toFixed(2);

        r10Data_2.style.textAlign = "Center";
        r10Data_3.style.textAlign = "Right";
        r10Data_4.style.textAlign = "Right";

        row_10.appendChild(r10Data_1);
        row_10.appendChild(r10Data_2);
        row_10.appendChild(r10Data_3);
        row_10.appendChild(r10Data_4);
        thead.appendChild(row_10);

        let row_11 = document.createElement('tr');
        let r11Data_1 = document.createElement('td');
        r11Data_1.innerHTML = "";
        let r11Data_2 = document.createElement('td');
        r11Data_2.innerHTML = '';
        let r11Data_3 = document.createElement('td');
        r11Data_3.innerHTML = 'Total';
        let r11Data_4 = document.createElement('td');
        r11Data_4.innerHTML = "$" + finalTotal.toFixed(2);

        r11Data_2.style.textAlign = "Center";
        r11Data_3.style.textAlign = "Right";
        r11Data_4.style.textAlign = "Right";

        row_11.appendChild(r11Data_1);
        row_11.appendChild(r11Data_2);
        row_11.appendChild(r11Data_3);
        row_11.appendChild(r11Data_4);
        thead.appendChild(row_11);
    }   

    return false;
}