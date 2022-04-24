{
    console.log("Hello interview register");

    $("#company-content").ready(function(){
        console.log("ready");
    });


    $('#student-list-item').click(function(){
        if($('#student-list-item').hasClass("list-group-item-success")){
            console.log("true part");
            $('#student-list-item').removeClass("list-group-item-success");
            $('#student-list-item').addClass("list-group-item-dark");
        }else{
            console.log("false part");
            $('#student-list-item').removeClass("list-group-item-dark");
            $('#student-list-item').addClass("list-group-item-success");
        }
    });
}