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
