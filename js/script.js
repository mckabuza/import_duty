function custom() {

               var cSelect = document.getElementById("country")
               var country = cSelect.options[cSelect.selectedIndex].value
               var pcSelect = document.getElementById("category")
               var product = Number(pcSelect.options[pcSelect.selectedIndex].value)
               var price = document.getElementById("price").value
               var sign;

               var currency=  document.querySelector('input[name="currency"]:checked').value;
                
                  
               
               if((validate(price, product, country) == -1)){

                  return;
               }

               if(currency == "ZAR"){

                  sign='R'
               }

               else{
                  sign='$'
               }








                var sadc_countries = ['Angola', 'Botswana', 'Congo DRC', 'Lesotho', 'Malawi', 'Madagascar', 'Mauritius', 'Mozambique', 'Namibia',
                      'Seychelles', 'South Africa', 'Swaziland', 'Tanzania', 'Zambia', 'Zimbabwe']

                      var EU_countries = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece',
                     'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia',
                     'Spain', 'Sweden', 'United Kingdom']
                     var EFTA_countries = ['Iceland', 'Liechtenstein', 'Norway', 'Switzerland']
                     var MERCOSUR_countries = ['Argentina', 'Brazil', 'Paraguay', 'Uruguay']
                     var duty;
                     var region;


                     if (sadc_countries.includes(country)){
                             duty=0
                             region="SADC"
                        }
                     
                    else if (EU_countries.includes(country)) {

                          region="EU"

                           switch(product){
                              case 1:
                                    
                              case 2:
                                   
                              case 4:
                                   
                              case 5:
                                    
                              case 6:
                                   
                              case 8:
                                   
                              case 10:
                                    
                              case 12:
                                    
                              case 13:
                                   
                              case 14:
                                   
                              case 15:
                                    
                              case 16:
                                   
                              case 19:
                                    
                              case 20:
                                    
                              case 21:
                                    duty=0
                                    break;
                              case 3:
                                    duty=0.2
                                    break;
                              case 18:
                                    duty=0.2
                                    break;
                              case 7:
                                    duty=0.03
                                    break;
                              case 9:
                                    duty=0.27
                                    break;
                              case 11:
                                    duty=0.18
                                    break;
                              case 17:
                                    duty=0.05
                                    break;


                           }

                    }

                    else if(EFTA_countries.includes(country)){
                           region="EFTA"
                           switch(product){
                              case 2:
                                   
                              case 4:
                                   
                              case 5:
                                   
                              case 6:
                                    
                              case 8:
                                   
                              case 10:
                                   
                              case 12:
                                   
                              case 13:
                                   
                              case 14:
                                    
                              case 15:
                                    
                              case 16:
                                   
                              case 19:
                                    
                              case 20:
                                    
                              case 21:
                                    duty=0
                                    break;
                              case 3:
                                   
                              case 18:
                                    duty=0.2
                                    break;
                              case 1:
                                    duty=0.15
                                    break;
                              case 7:
                                    duty=0.03
                                    break;
                              case 11:
                                    duty=0.15
                                    break;
                              case 17:
                                    duty=0.05
                                    break;

                           }

                    }

                  else if(MERCOSUR_countries.includes(country)){
                        region="MERCOSUR"
                        switch(product){
                              case 2:
                                   
                              case 4:
                                   
                              case 6:
                                    
                              case 8:
                                   
                              case 10:
                                    
                              case 12:
                                    
                              case 15:
                                    
                              case 16:
                                    
                              case 19:
                                    
                              case 20:
                                    
                              case 21:
                                    duty=0
                                    break
                              case 1:
                                    
                              case 14:
                                    duty=0.15
                                    break
                              case 3:
                                   
                              case 11:
                                    
                              case 18:
                                    duty=0.3
                                    break
                              case 5:
                                    
                              case 13:
                                    duty=0.2
                                    break
                              case 7:
                                   
                              case 17:
                                    duty=0.05
                                    break
                              case 9:
                                    duty=0.45
                                    break
                              case 11:
                                    duty=0.3
                                    break

                        }

                  }

                  else{
                     region="General"
                     switch(product){
                        case 1:
                             
                        case 14:
                              duty=0.15
                              break
                        case 2:
                              
                        case 4:
                             
                        case 6:
                              
                        case 8:
                              
                        case 10:
                              
                        case 12:
                              
                        case 15:
                              
                        case 16:
                              
                        case 19:
                              
                        case 20:
                              
                        case 21:
                              duty=0
                              break
                        case 3:
                              
                        case 11:
                              
                        case 18:
                              duty=0.3
                              break
                        case 5:
                              
                        case 13:
                              duty=0.2
                              break
                        case 7:
                              
                        case 17:
                              duty=0.05
                              break
                        case 9:
                              duty=0.45
                              break
                        case 14:
                              duty=0.15
                              break



                     }

                  }

                  var tax = 0.15*price
                  var import_duty = duty*price
                  var total_cost = Number(price)+ Number(tax)+ Number(import_duty)
                  var total = total_cost.toFixed(2)

                 if (tax > 0){

                     document.getElementById("res").innerHTML =`<div class="negative" style="color:rgba(15, 15, 15, 1.00)">
                <div class="callout" style="color:rgba(15, 15, 15, 1.00)">
                    15% VAT on your product value: <strong class="result-costs">`+sign+tax.toFixed(2)+`</strong>!
                    <br><br> `+100*duty.toFixed(2)+`% import duties on your product value:
                    <strong class="result-duty">`+sign+import_duty.toFixed(2)+`</strong>!
                    <br><br> Total (excluding shipping): <strong class="result-total">`+sign+total+`</strong>!
                </div>
                
                <div class="details">NOTE: The country you've selected is in the <strong>`+region+` Trade Agreement</strong> with South Africa.</div>
            </div>`
                 }

                 else if (tax <0){

                     document.getElementById("res").innerHTML =`<div class="negative" style="color:rgba(15, 15, 15, 1.00)">
                <div class="callout" style="color:rgba(15, 15, 15, 1.00)">
                    &#128521  Not too bad, you’ll have to pay <strong class="result-costs">`+sign+tax.toFixed(2)+`</strong>
                    in taxes!
                </div>

                <div class="explanation">
                    Additionally, you'll be charged a duty fee of `+sign+`
                    <strong class="result-duty">`+import_duty.toFixed(2)+`</strong> 
                </div>

                <div class="details">
                    Which brings your total to `+sign+`
                    <strong class="result-duty">`+total+`</strong> 
                </div>
                 <div class="details">NOTE: The country you've selected is part of the <strong> `+region+`</strong> Trade Agreement.</div>
            </div>`

                 }

                 else{  

                  document.getElementById("res").innerHTML =`<div class="negative" style="color:rgba(15, 15, 15, 1.00)">
                <div class="callout" style="color:rgba(15, 15, 15, 1.00)">
                    &#128542  Yikes! , you’ll have to pay <strong class="result-costs">`+sign+tax.toFixed(2)+`</strong>
                    in taxes!
                </div>

                <div class="explanation">
                    Additionally, you'll be charged a duty fee of `+sign+`
                    <strong class="result-duty">`+import_duty.toFixed(2)+`</strong> 
                </div>

                <div class="details">
                    Which brings your total to `+sign+`
                    <strong class="result-duty">`+total+`</strong> 
                </div>
                 <div class="details">NOTE: The country you've selected is part of the <strong> `+region+` </strong> Trade Agreement.</div>
            </div>`





                 }
            

                  //document.getElementById("tax").innerHTML = "TAX: $"+tax.toFixed(2); 
          }        //document.getElementById("duty").innerHTML = "IMPORT DUTY: $"+import_duty.toFixed(2); 
          
        //document.getElementById("total").innerHTML = "TOTAL COST : $"+total;



                  //window.scrollBy(0, 400);
            

            function validate(value , category, country){

               

            if (value == 0.00 && category != -1 && country != "-1"){

                  document.getElementById("res").innerHTML =`<div class="positive" style="color:rgba(15, 15, 15, 1.00);">
                <div class="callout" style="color:rgba(15, 15, 15, 1.00);">
                  🥳 WHOOO! 0 Costs mean 0 Taxes , or you made a mistake, Try again!
                </div>

                <div class="explanation" style="color:rgba(15, 15, 15, 1.00);">
                    Fill Out the details again <span class="result-taxrate"></span> and 
                    <strong class="result-vat">PRESS</strong> the button below &#128071 &#128071
                </div>
            </div>

          </div>`
               return -1
            }

           if (value != 0.00 && category != -1 && country == "-1" ){

                  document.getElementById("res").innerHTML =`<div class="positive" style="color:rgba(15, 15, 15, 1.00);">
                <div class="callout" style="color:rgba(15, 15, 15, 1.00);">
                  &#128558 SORRY! Think you made a mistake! , you forgot to select country.  
                </div>

                <div class="explanation" style="color:rgba(15, 15, 15, 1.00);">
                    Fill Out the details again <span class="result-taxrate"></span> and 
                    <strong class="result-vat">PRESS</strong> the button below &#128071 &#128071
                </div>
            </div>

          </div>`
               return -1
       }

      if (value != 0.00 && category == -1 && country == "-1" ){

                  document.getElementById("res").innerHTML =`<div class="positive" style="color:rgba(15, 15, 15, 1.00);">
                <div class="callout" style="color:rgba(15, 15, 15, 1.00);">
                  &#128562 SORRY! Think you made a mistake! , you forgot to select both country and category.  
                </div>

                <div class="explanation" style="color:rgba(15, 15, 15, 1.00);">
                    Fill Out the details again <span class="result-taxrate"></span> and 
                    <strong class="result-vat">PRESS</strong> the button below &#128071 &#128071
                </div>
            </div>

          </div>`
               return -1
       }


       if (value == 0.00 && category == -1 && country == "-1"){

                  document.getElementById("res").innerHTML =`<div class="positive" style="color:rgba(15, 15, 15, 1.00);">
                <div class="callout" style="color:rgba(15, 15, 15, 1.00);">
                  &#128556 You barely touched anything
                </div>

                <div class="explanation" style="color:rgba(15, 15, 15, 1.00);">
                    Fill Out the details again <span class="result-taxrate"></span> and 
                    <strong class="result-vat">PRESS</strong> the button below &#128071 &#128071
                </div>
            </div>

          </div>`
               return -1
            }

       if(country == "-1"){


         document.getElementById("res").innerHTML =`<div class="positive" style="color:rgba(15, 15, 15, 1.00);">
                <div class="callout" style="color:rgba(15, 15, 15, 1.00);">
                  &#128558 SORRY! Think you made a mistake! , you forgot to select country.  
                </div>

                <div class="explanation" style="color:rgba(15, 15, 15, 1.00);">
                    Fill Out the details again <span class="result-taxrate"></span> and 
                    <strong class="result-vat">PRESS</strong> the button below &#128071 &#128071
                </div>
            </div>

          </div>`
               return -1



       }   



       if(category == -1){


         document.getElementById("res").innerHTML =`<div class="positive" style="color:rgba(15, 15, 15, 1.00);">
                <div class="callout" style="color:rgba(15, 15, 15, 1.00);">
                  &#128556 OOOPS! Think you made a mistake! , you forgot to select category.  
                </div>

                <div class="explanation" style="color:rgba(15, 15, 15, 1.00);">
                    Fill Out the details again <span class="result-taxrate"></span> and 
                    <strong class="result-vat">PRESS</strong> the button below &#128071 &#128071
                </div>
            </div>

          </div>`
               return -1



       } 




            }