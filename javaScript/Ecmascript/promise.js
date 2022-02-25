var pr=new Promise((resolve, reject) => {
    
    var condition=true;
    if (condition)
    {
        console.log('Entered pin is proper')
        resolve('Amount withdrawed successfully');
    }
    else {
        console.log('Insufficient funds')
        reject('Amount is greater than balance');
    }


});
//pr.then(success, failure);//success faliure 2 call back function
//pr.then(success).catch(failure)
pr.then(success).catch(failure).finally(def);//finally will execute the block always
function success(msg)
{
    console.log('promise is successfull')
    console.log(msg);
}

function failure(msg)
{
    console.log('promise is failure');
    console.log(msg);
}
function def()
{
    console.log('finally receipt is printed');
}