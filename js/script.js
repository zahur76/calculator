$(document).ready(function(){

    num1= "";
    num2= ""    
    ops = "";
    console.log(num1)
   
    $(".numbutton").on("click",function(){
        if(ops.length===0){
            let press = $(this).html();
            num1 += press;
            console.log(num1);
            $("#display").val(num1); 
        }
    })
    
    $(".numbutton").on("click",function(){
        if(ops.length!==0){
            let press = $(this).html();
            num2 += press;
            console.log(num2);
            $("#display").val(num2); 
        }
    }) 
      
   
    $(".opsbutton").click(function(){
        if(num1.length!==0 && ops.length===0){
            let press = $(this).html();
            ops += press;
            console.log(ops);
            $("#display").val(ops);        
        }
        else if(num1.length!=0 && num2.length===0){
            ops = "";
            let press = $(this).html();
            ops += press;
            console.log(ops);
            $("#display").val(ops);
        }
    })    
      
    
    $(".resetbutton").click(function(){        
        reset()
    })

    $(".equalbutton").click(function(){
        if(num2.length!==0){
            equal()
        }
        
    })

    function reset(){
        num1 = "";
        num2 = "";
        ops = "";
        $("#display").val("0");
    }
   

    function equal(){
        console.log(ops)
        if (ops==="+"){
            let result = parseInt(num1) + parseInt(num2);
            $("#display").val(result);
            num1 = result;
            num2 = "";
            ops = "";
            console.log(result)                                              
        }
        else if (ops==="-"){
            let result = parseInt(num1) - parseInt(num2);
            $("#display").val(result); 
            num1 = result;
            num2 = "";
            ops = "";
                                    
        }
        else if (ops==="*"){
            let result = parseInt(num1) * parseInt(num2);
            $("#display").val(result);
            num1 = result;
            num2 = "";
            ops = "";
                                  
        }
        else if (ops==="/"){
            let result = parseInt(num1) / parseInt(num2);
            $("#display").val(result);
            num1 = result;
            num2 = "";
            ops = "";
                                  
        }
    }

})