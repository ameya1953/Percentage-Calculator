document.addEventListener('DOMContentLoaded', function() {
    var numField1 = document.getElementById('numfield1');
    var numField2 = document.getElementById('numfield2');
    var resultField = document.getElementById('resultfield');
    var form = document.getElementById('xisWhatPercentageofy');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        if(!numField1.value || !numField2.value){
            alert("Please enter values in both fields.");
        } else {
            var x = parseFloat(numField1.value);
            var y = parseFloat(numField2.value);

            if (isNaN(x) || isNaN(y)) {
                alert("Please enter valid numbers.");
            } else {
                var result = (x / y) * 100;
                resultField.innerText = "Answer: " + result.toFixed(2) + "%";
            }
        }
    });
});
