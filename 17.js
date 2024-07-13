// multi label condition module 17.5
// HW - grading 80+ Golden A, 70+ A, 60+ A- & so on
// HW - BMI calculator

const price = 3000;

if(price>=5000){
    //10% discount
    const discount = price * 10/100;
    const payAmount = price - discount;
    // console.log(payAmount, discount);
}
else if(price>2500){
    //5% discount
    const discount = price * 5/100;
    const payAmount = price - discount;
    // console.log(payAmount, discount);
}
else{
    // console.log(price)
}

const age = 47;
const fare = 500;

if(age <= 12){
    console.log('Ride free');
}
else if(age >= 60){
    // 10% discount
    const discount = fare * 10/100;
    const payAmount = fare - discount;
    console.log(payAmount)
}
else if(age >= 50){
    //5% discount
    const discount = fare * 5/100;
    const payAmount = fare - discount;
    console.log(payAmount)

}
else if(age >= 40){
    //2.5% discount
    const discount = fare * 2.5/100;
    const payAmount = fare - discount;
    console.log(payAmount)

}
else{
    console.log(fare)
}

// nested if else condition module 17.6

const money = 3000
if(money > 3000){
    console.log('Can go Coxs');
}
else{
    if(money > 2000){
        console.log('Can go Sylhet')
    }
    else{
        if(money > 1000){
            console.log('Can go Gazipur')
        }
        else{
            console.log('Stay at home')
        }
    }
}

// if else shorthand ternary module 17.7

amount = 3500;
amount >= 3000 ? console.log('Coxs') : console.log('Stay Home')

//2nd example

land = 500;
const isLeader = true;

if(isLeader === true){
    land = 0;
}
else{
    land = land + 100;
}

land = isLeader === true ? 0 : land + 100; //important 07:30

//Optional ternary
land = isLeader === true ? land > 1000 ? land/2 : 0 : land + 100; //important (have to clear) 10:00

