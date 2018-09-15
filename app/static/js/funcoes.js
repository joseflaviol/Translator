$("#texto").keyup(function(){
  var modo = $("#btn_modo").val();
  if(modo == 0){
    enviaTraducao();
  }
});

$("#btn_ouvir").click(function(){
  var traducao = $("#traducao").val();
  var idioma = $("#lang2").val();
  if(idioma == 1){
      responsiveVoice.speak(traducao, "Portuguese Female");
  }
  else if(idioma == 2){
    responsiveVoice.speak(traducao, "US English Female");
  }
});

$("#btn_theme").click(function(){
  var botao = $(this).val();
  if(botao==0){
    mudaTema("#2f3542", "#57606f", "white");
    $(this).text("Usar tema claro");
    $(this).val(1);
  }else{
    mudaTema("white", "white", "black");
    $(this).text("Usar tema escuro");
    $(this).val(0);
  }
});

$("#btn_modo").click(function(){
  var botaoModo = $(this).val();
  if(botaoModo == 0){
    document.getElementById('btn_traduz').style.display = "";
    $(this).text("Usar modo automático");
    $(this).val(1);
  }
  else{
    document.getElementById('btn_traduz').style.display = "none";
    $(this).text("Usar modo manual");
    $(this).val(0);
  }
});

$("#btn_traduz").click(function(){
  enviaTraducao();
});

$("#lang2").change(function(){
  enviaTraducao();
});

function enviaTraducao(){
  var texto = $("#texto").val();
  var idioma1 = $("#lang1").val();
  var idioma2 = $("#lang2").val();
  $.ajax({
    url: "/traduzir/",
    data: {
      'texto': texto,
      'idioma1': idioma1,
      'idioma2': idioma2
    },
    dataType: 'json',
    success: function(data) {
      if (data.result) {
        document.getElementById('traducao').innerHTML = data.traducao;
      }
    }
  })
}


function mudaTema(cor1, cor2, cor3){
  document.getElementById('body').style.backgroundColor = cor1;
  document.getElementById('texto').style.backgroundColor = cor2;
  document.getElementById('traducao').style.backgroundColor = cor2;
  document.getElementById('lang1').style.backgroundColor = cor2;
  document.getElementById('lang2').style.backgroundColor = cor2;
  document.getElementById('lang1').style.color = cor3;
  document.getElementById('lang2').style.color = cor3;
  document.getElementById('body').style.color = cor3;
  document.getElementById('texto').style.color = cor3;
  document.getElementById('traducao').style.color = cor3;
}
