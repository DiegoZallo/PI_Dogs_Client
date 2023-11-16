
const validation = (dogsData, dogsNames)=>{
    let errors = {};

    const onlyLetters = /^[a-zA-Z\s]*$/; //contains only letters
    const validUrl = /((www\.|(http|https|ftp|news|file)+\:\/\/)[_.a-z0-9-]+\.[a-z0-9\/_:@=.+?,##%&~-]*[^.|\'|\# |!|\(|?|,| |>|<|;|\)])/;

    dogsNames = dogsNames?.filter((dog)=>{
        return dog.name?.toLowerCase() === dogsData.name.toLowerCase()
    });

    if(dogsNames?.length!==0){
        errors.name = 'Breed name already exist'
        return errors        
    }else if(dogsData.name.length>35) {
        errors.name = 'Breed name can´t be larger than 35 characters'
        return errors
    }else if(!dogsData.name.length ===0){
        errors.name = 'Breed name can not be blank'
        return errors
    }else if(dogsData.name.length<3){
        errors.name = 'Breed name can´t be less than 3 characters'
        return errors
    }else if(!onlyLetters.test(dogsData.name)){
        errors.name = 'Breed name can only contain letters'
        return errors
    }

    if(isNaN(dogsData.minWeight)){
        errors.minWeight = 'Minimun Weight can only be numbers'
        return errors
    }else if(Number(dogsData.minWeight)<1){
        errors.minWeight = 'Minimun Weight is too low'
        return errors
    }else if(isNaN(dogsData.maxWeight)){
        errors.maxWeight = 'Maximun Weight can only be numbers'
        return errors
    }else if(dogsData.maxWeight > 100 ){
        errors.minWeight = 'Maximun Weight should be less than 100kgs'
        return errors
    }else if(Number(dogsData.minWeight) > Number(dogsData.maxWeight)){
        errors.minWeight = 'Minimun Weight should be less or equal maxiumun'
        return errors
    }else if((dogsData.maxWeight-dogsData.minWeight)>dogsData.minWeight*3){
        errors.maxWeight = 'Range between min and max is to high'
        return errors
    }

    if(isNaN(dogsData.minHeight)){
        errors.minHeight = 'Minimun Height can only be numbers'
        return errors
    }else if(Number(dogsData.minHeight)<15){
        errors.maxHeight = 'Minimun Height is too low'
        return errors
    }else if(Number(dogsData.maxHeight) > 100){
        errors.minHeight = 'Maximun Height should be less than 100cms'
        return errors
    }else if(isNaN(dogsData.maxHeight)){
        errors.maxHeight = 'Maximun Height can only be numbers'
        return errors
    }else if(Number(dogsData.minHeight) > Number(dogsData.maxHeight)){
        errors.minHeight = 'Minimun Height should be less or equal maxiumun'
        return errors
    }else if((dogsData.maxHeight-dogsData.minHeight)>dogsData.minHeight*3){
        errors.maxHeight = 'Range between min and max is to high'
        return errors
    }

    if(isNaN(dogsData.life_span_min)){
        errors.life_span_min = 'Minimun life span can only be numbers'
        return errors
    }else if(Number(dogsData.life_span_min)<8){
        errors.life_span_min = 'Minimun life span is too low'
        return errors
    }else if(isNaN(dogsData.life_span_max)){
        errors.life_span_max = 'Maximun life span can only be numbers'
        return errors
    }else if(Number(dogsData.life_span_max) > 30){
        errors.life_span_min = 'Maximun life span should be less than 30 years'
        return errors
    }else if(Number(dogsData.life_span_min) > Number(dogsData.life_span_max)){
        errors.life_span_min = 'Minimun life span should be less or equal maxiumun'
        return errors
    }else if((dogsData.life_span_max-dogsData.life_span_min)>dogsData.life_span_min*2){
        errors.life_span_max = 'Range between min and max is to high'
        return errors
    }

    if(!validUrl.test(dogsData.image)){
        errors.image = 'Please enter a valid url'
        return errors
    }

    if (dogsData.temperaments ===''){
        errors.temperaments = 'You ave to select at least one temperament'
        return errors
    }

    return errors
}

export default validation;