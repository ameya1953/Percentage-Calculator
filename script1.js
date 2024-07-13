document.addEventListener('DOMContentLoaded', function() {
    var numField1 = document.getElementById('numfield1');
    var numField2 = document.getElementById('numfield2');
    var resultField = document.getElementById('resultfield');
    var form = document.getElementById('xisWhatPercentageofy');
    var clearButton = document.getElementById('clearButton');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!numField1.value || !numField2.value) {
            alert("Please enter values in both fields.");
        } else {
            var x = parseFloat(numField1.value);
            var y = parseFloat(numField2.value);

            var result = (x / y) * 100;
            resultField.innerText = "Answer: " + result.toFixed(2) + "%";
        }
    });

    clearButton.addEventListener('click', function() {
        numField1.value = '';
        numField2.value = '';
        resultField.innerText = 'Answer = ';
    });
});
