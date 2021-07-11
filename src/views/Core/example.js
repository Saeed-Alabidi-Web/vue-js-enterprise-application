let UITools =(()=>{
 

  function Task1(){
    let max=$( "#doctorInfo" ).children().length-1;
    index=index<max?++index:max; 
    let current=`form-horizontal-p-${index}`;
     console.log(current)
    $(".body").css("display","none")
    $("#"+current).css("display","block")
    index>max? null:$($( "#doctorInfo" ).children()).removeClass("current")
    index>max?null:$($( "#doctorInfo" ).children()[index]).addClass("current")
    
 }
 
return {Task1}

})();


export default UITools




