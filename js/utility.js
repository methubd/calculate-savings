// condition maker if any field is NaN
function dontLeaveEmpty (field){
    if(isNaN(field)){
        alert('Please dont leave income field empty!!!');
    }
    return;
}

// input to number converter >>>
function inputFieldToNumberById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}

// span to number converter >>>
function spanFieldtoNumberById (spanId){
    const spanField = document.getElementById(spanId);
    const spanFieldString = spanField.innerText;
    const spanFieldValue = parseFloat(spanFieldString);
    return spanFieldValue;
}

// span field value setter >>>
function setAValueOnField (settingAreaId, newValue){
    const settingId = document.getElementById(settingAreaId);
    settingId.innerText = newValue;
}
