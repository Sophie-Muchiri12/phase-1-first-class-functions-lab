// Code your solution in this file!
const returnFirstTwoDrivers = function(){
    let ScuberDriver = ['Antonia', 'Nuru', 'Amari', 'Mo']
    let FirstScuber = ScuberDriver.slice(0,2)
return FirstScuber
}
returnFirstTwoDrivers()
console.log(returnFirstTwoDrivers())

const returnLastTwoDrivers = function(){
    let ScuberDriver = ['Antonia', 'Nuru', 'Amari', 'Mo']
    let LastScuber = ScuberDriver.slice(2,4)
return LastScuber
}
returnLastTwoDrivers()
console.log(returnLastTwoDrivers())


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]



  function createFareMultiplier(multiplier){
     
     return function(fare){

        return fare * multiplier
   }

 }
    createFareMultiplier(200)

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(arrayOfDrivers,funct){
    
     return funct(arrayOfDrivers)
     
    }

   
