window.addEventListener('load', function OnWindowLoaded() {
    var but = document.getElementById('but_click');
    let mas = [];
    var sum = 0;

    let OnButtonClick = function () {

        var textarea = document.getElementById('text').value;
        if (textarea == 0) {
            alert('Vvedite znachenie');
        }
        else {
            mas.push(textarea);

            var tables = mas[0];
            for (let i = 1; i < mas.length; i++) {
                tables += "<tr><td>" + mas[i] + "</td></tr>";
            }
            document.getElementById("table").innerHTML = '<td>' + tables + '</td>';

        }
    }
    but.addEventListener('click', OnButtonClick);



    var Sr_arif_but = document.getElementById('Sr_but');
    let OnButtonClickSredAr = function () {
        for (let j = 0; j < mas.length; j++) {
            sum += parseInt(mas[j]);
        }
        var sr_arif = (sum / mas.length);

        document.getElementById("vivod").innerHTML = sr_arif;
    }

    Sr_arif_but.addEventListener('click', OnButtonClickSredAr);

});