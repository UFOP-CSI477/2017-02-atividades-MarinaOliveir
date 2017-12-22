
function calculaEscalaRichter() {
    var a= parseFloat(document.dados.valor1.value);
    var dt= parseFloat(document.dados.valor2.value);
    

    if (document.dados.valor1.value.length === 0 || isNaN(a)) {
        document.getElementById("grupoV1").classList.add("has-error");
        document.getElementById("alertaV1").style.display = "block";
        document.dados.valor1.value = "";
        document.dados.valor1.focus();
        return;
    }

    document.getElementById("grupoV1").classList.remove("has-error");
    document.getElementById("alertaV1").style.display = "none";

    if (isNaN(dt)) {
        //window.alert("Informe o segundo valor corretamente!");
        document.getElementById("grupoV2").classList.add("has-error");
        document.getElementById("alertaV2").style.display = "block";
        document.dados.valor2.value = "";
        document.dados.valor2.focus();
        return;
    }

    document.getElementById("grupoV2").classList.remove("has-error");
    document.getElementById("alertaV2").style.display = "none";

    

    var m = Math.log10(a) + 3 * Math.log10(8 * dt) - 2.92;
    var arredondado = parseFloat(m.toFixed(2));
    
      if (m<3.5){
          document.dados.categoria.value = "Geralmente não sentido, mas gravado.";
        }else if(m>=3.5 && m<5.4){
           document.dados.categoria.value = "Às vezes sentido, mas raramente causa danos.";
        }else if(m>=5.5 && m<6){
           document.dados.categoria.value = "Provoca apenas danos ligeiros em edifícios bem construídos. Pode causar danos importantes em edifícios mal construídos.";
        }else if(m>=6.1 && m<6.9){
           document.dados.categoria.value = "Destrutivo em áreas até 100 km em torno do epicentro.";
        }else if(m>=7 && m<7.9){
           document.dados.categoria.value = "Grande terremoto, pode causar sérios danos em uma grande faixa.";
       }else if(m>=8){
           document.dados.categoria.value = "Pode causar danos sérios num raio de várias centenas de quilómetros em torno do epicentro.";
        }
    document.dados.resultado.value = arredondado + " na Escala Richter.";
    




}
