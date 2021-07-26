    var Sr_arif_but = document.getElementById('Sr_but');

    let OnButtonClick = function () {
        for (let j = 0; j < mas.length; j++) {
            sum += parseInt(mas[j]);
        }
        var sr_arif = (sum / mas.length).toFixed();
        document.getElementById("vivod").innerHTML = sr_arif;
    }
    Sr_arif_but.addEventListener('click', swapper, false);

