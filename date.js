module.exports.getDate=function (){
    let today=new Date();
    currentDay=today.getDay();
    options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    return today.toLocaleDateString("en-US");
};

module.exports.getDay=function(){
    let today=new Date();
    currentDay=today.getDay();
    options={
        weekday:"long",
    };

    return today.toLocaleDateString("en-US");
};