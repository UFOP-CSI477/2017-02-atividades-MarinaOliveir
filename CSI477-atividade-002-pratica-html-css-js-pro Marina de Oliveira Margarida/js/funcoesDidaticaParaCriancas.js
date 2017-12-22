//Sintaxe
//$(seletor).acao()
$(document).ready(function () {
    //Todo conteudo do jquery
    console.log("Documento pronto para uso.");

    $("#sabao").click(function () {
        $("#sabao").hide();
        $("#legendaSabao").hide();
    });

    $("#algodao").click(function () {
        $("#algodao").hide();
        $("#legendaAlgodao").hide();
    });
    $("#maquina").click(function () {
        $("#maquina").hide();
        $("#legendaMaquina").hide();
    });

    $("#chave").click(function () {
        $("#chave").hide();
        $("#legendaChave").hide();
    });


});