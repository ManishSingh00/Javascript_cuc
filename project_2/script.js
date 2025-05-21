const form = document.querySelector('form')

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value) // before adding event listnr

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')
    const output = document.querySelector('#output')

    if(height<0 || height==='' || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`
    }
    else if(weight<0 || weight==='' || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`BMI = ${bmi}`
        if(bmi>=0 && bmi<18.6 ) {
            output.innerHTML=`Person is Under-Weight`
            output.style.color='Red'
        }
        else if(bmi>=18.6 && bmi<=24.9){
            output.innerHTML=`Person is Normal`
            output.style.color='Green'
        }

        else{
            output.innerHTML=`Person is Over-Weight`
            output.style.color='Red'
        }
            
    }

})