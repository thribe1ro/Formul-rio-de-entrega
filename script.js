        function clicar() {
            var name = document.getElementById('nome');
            var tel = document.getElementById('telef');
            var cpf = document.getElementById('cpf');
            var end = document.getElementById('end');
            var payment = document.getElementById('payment');
            var chapa = document.getElementById('chapa');
            var valuetaxa = document.getElementById('valuetaxa');

            var resnome = document.getElementById('resnome');
            var restel = document.getElementById('restel');
            var rescpf = document.getElementById('rescpf');
            var resend = document.getElementById('resend');
            var respayment = document.getElementById('respayment');
            var reschapa = document.getElementById('reschapa');
            var restaxa = document.getElementById('restaxa');
            var rescodint = document.getElementById('rescodint');
	        var resproduct = document.getElementById('resproduct');

            var n1 = (name.value);
            var n2 = (tel.value);
            var n3 = (cpf.value);
            var n4 = (end.value);
            var n5 = (payment.value);
            var n6 = (chapa.value);
            var n7 = (valuetaxa.value);
            var n8 = (codint.value);

            resnome.innerHTML = `Nome: ${n1}`
            restel.innerHTML = `Telefone: ${n2}`
            rescpf.innerHTML = `CPF: ${n3}`
            resend.innerHTML = `Endereço: ${n4}`
            respayment.innerHTML = `Forma de pagamento: ${n5}`
            reschapa.innerHTML = `Chapa: ${n6}`
            restaxa.innerHTML = `Valor com a taxa de entrega: ${n7}`
	        rescodint.innerHTML = `Código interno: ${n8}`

	if (n8 == 210949.9) {
	    resproduct.innerHTML = 'PANTOVIT FRASCO 10ML'
} else if (n8 == 212216.7) {
	   resproduct.innerHTML = 'AGUA MINERAL MONTEIRO LOBATO S/GAS PET 510ML'
} else if (n8 == 221382.7) {
	   resproduct.innerHTML = 'DEXILANT 30MG CAIXA 30 CAPSULAS'
} else if (n8 == 221251.7) {
	   resproduct.innerHTML = 'DEXILANT 30MG CAIXA 60 CAPSULAS'
} else if (n8 == 221253.3) {
	   resproduct.innerHTML = 'DEXILANT 60MG CAIXA 30 CAPSULAS'
} else if (n8 == 221252.5) {
	   resproduct.innerHTML = 'DEXILANT 60MG CAIXA 60 CAPSULAS'
} else if (n8 == 122642.3) {
	   resproduct.innerHTML = 'SOLUCAO CLORETO DE SODIO ADV 0.9% FRASCO 500ML'
} else if (n8 == 216049.7) {
	   resproduct.innerHTML = 'SOLUCAO CLORETO DE SODIO SORIMAX 0.9% FRASCO 500ML'
} else if (n8 == 215690.6) {
	   resproduct.innerHTML = 'SOLUCAO CLORETO DE SODIO SORIMAX 0.9% FRASCO 250ML'
} else if (n8 == 122324.9) {
	   resproduct.innerHTML = 'SOLUCAO CLORETO DE SODIO ADV 0.9% FRASCO 250ML'
} else if (n8 == 216420.1) {
	   resproduct.innerHTML = 'SOLUCAO CLORETO DE SODIO SORIMAX 0.9% FRASCO 100ML'
} else if (n8 == 120838.0) {
	   resproduct.innerHTML = 'SOLUCAO CLORETO DE SODIO ADV 0.9% FRASCO 100ML'
} else if (n8 == 232343.6) {
	   resproduct.innerHTML = 'LAVITAN MELATONINA 0,21MG MORANGO 150 COMPRIMIDOS'
} else if (n8 == 232458.6) {
	   resproduct.innerHTML = 'MELATONINA FAST EQUALIV 210MCG MENTA FRASCO 30ML'
} else if (n8 == 232342.8) {
	   resproduct.innerHTML = 'LAVITAN MELATONINA 0,21MG MORANGO 90 COMPRIMIDOS'
} else if (n8 == 233293.0) {
	   resproduct.innerHTML = 'MELATONINA ARTE NATIVA SABOR MARACUJA FRASCO 20ML'
} else if (n8 == 233481.3) {
	   resproduct.innerHTML = 'BILASTINA EUROFARMA 20MG CAIXA 30 COMPRIMIDOS (G)'
} else if (n8 == 233480.5) {
	   resproduct.innerHTML = 'BILASTINA EUROFARMA 20MG CAIXA 15 COMPRIMIDOS (G)'
} else if (n8 == 231657.8) {
	   resproduct.innerHTML = 'ALEKTOS 2,5MG/ML SOLUCAO ORAL FRASCO 120ML'
} else if (n8 == 233935.8) {
	   resproduct.innerHTML = 'ALEKTOS 20MG CAIXA 20 COMPRIMIDOS'
} else if (n8 == 233271.1) {
	   resproduct.innerHTML = 'NAIRE 20MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 172957.3) {
	   resproduct.innerHTML = 'ALEKTOS 20MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 235875.1) {
	   resproduct.innerHTML = 'TYNNA 20MG CAIXA 15 COMPRIMIDOS'
} else if (n8 == 233274.6) {
	   resproduct.innerHTML = 'NAIRE 20MG CAIXA 15 COMPRIMIDOS'
} else if (n8 == 165093.7) {
	   resproduct.innerHTML = 'DESODORANTE HERBISSIMO TRADICIONAL CREME POTE 55G'
} else if (n8 == 165094.5) {
	   resproduct.innerHTML = 'DESODORANTE HERBISSIMO NEUTRO CREME POTE 55G'
} else if (n8 == 113257.4) {
	   resproduct.innerHTML = 'SUCRAFILM 2G/10ML CAIXA 20 FLACONETES 10ML'
} else if (n8 == 113256.6) {
	   resproduct.innerHTML = 'SUCRAFILM 1G CAIXA 30 COMPRIMIDOS'
} else if (n8 == 211200.6) {
	   resproduct.innerHTML = 'ZYPRED COLIRIO FRASCO 3ML'
} else if (n8 == 211596.0) {
	   resproduct.innerHTML = 'RELVAR ELLIPTA 100/25MCG PO INALANTE 30 DOSES'
} else if (n8 == 150148.0) {
	   resproduct.innerHTML = 'MESALAZINA EMS 800MG CAIXA 30 COMPRIMIDOS (G)'
} else if (n8 == 226360.5) {
	   resproduct.innerHTML = 'CETAPHIL SABONETE BARRA LIMPEZA PROFUNDA 127G'
} else if (n8 == 169208.8) {
	   resproduct.innerHTML = 'CETAPHIL LOCAO HIDRATANTE FRASCO 473ML'
} else if (n8 == 169206.1) {
	   resproduct.innerHTML = 'CETAPHIL CREME HIDRATANTE POTE 453G'
} else if (n8 == 226362.1) {
	   resproduct.innerHTML = 'CETAPHIL SABONETE BARRA LIMPEZA SUAVE 127G'
} else if (n8 == 233514.6) {
	   resproduct.innerHTML = 'CETAPHIL OPTIMAL HYDRATION SERUM HD FAC 48H 30ML'
} else if (n8 == 172230.4) {
	   resproduct.innerHTML = 'CETAPHIL RESTORADERM PRO AD CONTROL LOC HIDR 295ML'
} else if (n8 == 226360.5) {
	   resproduct.innerHTML = 'CETAPHIL SABONETE BARRA LIMPEZA PROFUNDA 127G	'
} else if (n8 == 235580.9) {
	   resproduct.innerHTML = 'CETAPHIL OPTIMAL HYDRATION WATER GEL REST HIAL 48G'
} else if (n8 == 233515.4) {
	   resproduct.innerHTML = 'CETAPHIL OPTIMAL HYDRA SERUM CORP HID SPR 207ML'
} else if (n8 == 233511.1) {
	   resproduct.innerHTML = 'CETAPHIL LOCAO HIDRATANTE FRASCO 200ML'
} else if (n8 == 234145.8) {
	   resproduct.innerHTML = 'CETAPHIL GEL CREME HIDRATANTE BISNAGA 226G'
} else if (n8 == 234143.1) {
	   resproduct.innerHTML = 'CETAPHIL GEL CREME HIDRATANTE POTE 453G'
} else if (n8 == 211963.8) {
	   resproduct.innerHTML = 'CETAPHIL PUMP LOCAO DE LIMPEZA 300ML'
} else if (n8 == 231944.5) {
	   resproduct.innerHTML = 'CETAPHIL HEALTHY HYGIENE CREME P/MAOS BISNAGA 50ML'
} else if (n8 == 234313.8) {
	   resproduct.innerHTML = 'CETAPHIL SUN ANTIOX LIGHT FLUID FPS60 S/ COR 50 ML'
} else if (n8 == 232823.7) {
	   resproduct.innerHTML = 'CETAPHIL PRO AD CONTROL SABONETE FRASCO 295ML'
} else if (n8 == 230500.0) {
	   resproduct.innerHTML = 'ROSUVASTATINA CALCICA MEDLEY 20MG CX 60 COMP (G)'
} else if (n8 == 230499.9) {
	   resproduct.innerHTML = 'ROSUVASTATINA CALCICA MEDLEY 10MG CX 60 COMP (G)'
} else if (n8 == 214166.7) {
	   resproduct.innerHTML = 'ROSUVASTATINA CALCICA MEDLEY 20MG CX 30 COMP (G)'
} else if (n8 == 236132.8) {
	   resproduct.innerHTML = 'ROSUVASTATINA CALCICA CIMED 20MG CAIXA 30COMP (G)'
} else if (n8 == 214165.9) {
	   resproduct.innerHTML = 'ROSUVASTATINA CALCICA MEDLEY 10MG CX 30 COMP (G)'
} else if (n8 == 224554.6) {
	   resproduct.innerHTML = 'ROSUVASTATINA CALCICA SANDOZ 10MG CX 60COMP (G)'
} else if (n8 == 233355.4) {
	   resproduct.innerHTML = 'ROSUVASTATINA CALCICA CIMED 10MG CAIXA 30COMP (G)'
} else if (n8 == 233845.1) {
	   resproduct.innerHTML = 'ROSUVASTATINA CALCICA ALTHAIA 5MG CX 30 COMP (G)'
} else if (n8 == 172970.9) {
	   resproduct.innerHTML = 'ROSUCOR 10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 233319.1) {
	   resproduct.innerHTML = 'ROSUVASTATINA CALCICA TEUTO 20MG CAIXA 30COMP (G)'
} else if (n8 == 229127.8) {
	   resproduct.innerHTML = 'PLENANCE EZE 10/10MG CAIXA 30 CAPSULAS'
} else if (n8 == 229128.6) {
	   resproduct.innerHTML = 'PLENANCE EZE 20/10MG CAIXA 30 CAPSULAS'
} else if (n8 == 209689.4) {
	   resproduct.innerHTML = 'ROSUCOR 20MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 225081.2) {
	   resproduct.innerHTML = 'ROSUVASTATINA CALCICA SANDOZ 5MG CX 30COMP (G)'
} else if (n8 == 215976.0) {
	   resproduct.innerHTML = 'PLENANCE 10MG CAIXA 90 COMPRIMIDOS'
} else if (n8 == 236191.8) {
	   resproduct.innerHTML = 'COLEDUE-R 10MG+10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 229125.1) {
	   resproduct.innerHTML = 'PLENANCE EZE 5/10MG CAIXA 30 CAPSULAS'
} else if (n8 == 225521.8) {
	   resproduct.innerHTML = 'PLENANCE 5MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 207448.4) {
	   resproduct.innerHTML = 'RUSOVAS 5MG CAIXA 60 COMPRIMIDOS'
} else if (n8 == 229933.3) {
	   resproduct.innerHTML = 'ZINPASS+EZE 20MG/10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 236192.6) {
	   resproduct.innerHTML = 'COLEDUE-R 20MG+10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 215080.3) {
	   resproduct.innerHTML = 'ROSUCOR 20MG CAIXA 60 COMPRIMIDOS'
} else if (n8 == 229934.1) {
	   resproduct.innerHTML = 'ZINPASS+EZE 10MG/10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 213385.1) {
	   resproduct.innerHTML = 'ROSUCOR 10MG CAIXA 60 COMPRIMIDOS'
} else if (n8 == 206713.7) {
	   resproduct.innerHTML = 'PLENANCE 10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 213764.1) {
	   resproduct.innerHTML = 'ZINPASS 10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 233315.90) {
	   resproduct.innerHTML = 'ROSUVASTATINA CALCICA TEUTO 10MG CAIXA 30COMP (G)'
} else if (n8 == 118438.2) {
	   resproduct.innerHTML = 'CRESTOR 20MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 157300.3) {
	   resproduct.innerHTML = 'CRESTOR 40MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 118439.0) {
	   resproduct.innerHTML = 'CRESTOR 10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 210770.9) {
	   resproduct.innerHTML = 'CRESTOR 5MG CAIXA 60 COMPRIMIDOS'
} else if (n8 == 224555.4) {
	   resproduct.innerHTML = 'ROSUVASTATINA CALCICA SANDOZ 20MG CX 60COMP (G)'
} else if (n8 == 228458.8) {
	   resproduct.innerHTML = 'TREZETE 20MG+10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 235326.4) {
	   resproduct.innerHTML = 'RUSOVAS 20MG CAIXA 90 COMPRIMIDOS'
} else if (n8 == 227014.3) {
	   resproduct.innerHTML = 'TREZOR 40MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 171423.2) {
	   resproduct.innerHTML = 'CRESTOR 5MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 229932.5) {
	   resproduct.innerHTML = 'ZINPASS+EZE 40MG/10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 228460.9) {
	   resproduct.innerHTML = 'TREZETE 10MG+10MG CAIXA 30 C0MPRIMIDOS'
} else if (n8 == 210798.7) {
	   resproduct.innerHTML = 'RUSOVAS 10MG CAIXA 60 COMPRIMIDOS'
} else if (n8 == 229371.6) {
	   resproduct.innerHTML = 'TREZOR 20MG CAIXA 60 COMPRIMIDOS'
} else if (n8 == 206714.5) {
	   resproduct.innerHTML = 'PLENANCE 20MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 229480.7) {
	   resproduct.innerHTML = 'ROSUCOR 10MG CAIXA 100 COMPRIMIDOS'
} else if (n8 == 213766.8) {
	   resproduct.innerHTML = 'ZINPASS 20MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 203046.5) {
	   resproduct.innerHTML = 'ROSULIB 10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 173018.7) {
	   resproduct.innerHTML = 'RUSOVAS 10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 173017.9) {
	   resproduct.innerHTML = 'RUSOVAS 20MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 229723.1) {
	   resproduct.innerHTML = 'RUVA 20MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 229372.4) {
	   resproduct.innerHTML = 'TREZOR 10MG CAIXA 60 COMPRIMIDOS'
} else if (n8 == 174424.7) {
	   resproduct.innerHTML = 'TREZOR 20MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 229809.0) {
	   resproduct.innerHTML = 'ROX 10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 229504.1) {
	   resproduct.innerHTML = 'TREZOR 5MG CAIXA 60 COMPRIMIDOS'
} else if (n8 == 236189.7) {
	   resproduct.innerHTML = 'COLEDUE-R 5MG+10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 229722.3) {
	   resproduct.innerHTML = 'RUVA 10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 233806.4) {
	   resproduct.innerHTML = 'ROSA 20MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 235361.9) {
	   resproduct.innerHTML = 'RUNNER 10MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 229720.7) {
	   resproduct.innerHTML = 'RUVA 5MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 222544.9) {
	   resproduct.innerHTML = 'TREZOR 5MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 235362.7) {
	   resproduct.innerHTML = 'RUNNER 20MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 104180.8) {
	   resproduct.innerHTML = 'DECONGEX PLUS CAIXA 12 COMPRIMIDOS'
} else if (n8 == 101561.8) {
	   resproduct.innerHTML = 'DECONGEX PLUS XAROPE FRASCO 120ML'
} else if (n8 == 101562.6) {
	   resproduct.innerHTML = 'DECONGEX PLUS GOTAS FRASCO 20ML'
} else if (n8 == 165757.3) {
	   resproduct.innerHTML = 'DECONGEX PLUS CARTELA 4 COMPRIMIDOS'
} else if (n8 == 109890.0) {
	   resproduct.innerHTML = 'FLUCONAZOL MEDLEY 150MG CAIXA 2 CAPSULAS (G)'
} else if (n8 == 213502.1) {
	   resproduct.innerHTML = 'FLUCONAZOL CIMED 150MG CAIXA 2 CAPSULAS (G)'
} else if (n8 == 233826.7) {
	   resproduct.innerHTML = 'FLUCONAZOL MEDQUIMICA 150MG CAIXA 1 CAPSULA (G)'
} else if (n8 == 163360.0) {
	   resproduct.innerHTML = 'TRIAZOL 150MG CAIXA 2 CAPSULAS'
} else if (n8 == 103860.9) {
	   resproduct.innerHTML = 'ZELIX 150MG CAIXA 1 CAPSULA'
} else if (n8 == 226867.6) {
	   resproduct.innerHTML = 'OZEMPIC 1MG SOL INJ 1 CARP 3ML+1 SIST APL'
} else if (n8 == 226800.0) {
	   resproduct.innerHTML = 'OZEMPIC 0,25+0,5MG SOL INJ 1 CARP 1,5ML+1 SIST APL'
} else if (n8 == 233191.1) {
	   resproduct.innerHTML = 'RYBELSUS 7MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 233193.8) {
	   resproduct.innerHTML = 'RYBELSUS 14MG CAIXA 30 COMPRIMIDOS'
} else if (n8 == 233190.3) {
	   resproduct.innerHTML = 'RYBELSUS 3MG CAIXA 30 COMPRIMIDOS'
} else {
	resproduct.innerHTML = `<p id="erro">Código interno não encontrado.<p>`
}

        }

var handlePhone = (event) => {
  var input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

var handleCpf = (event) => {
  var input = event.target
  input.value = cpfMask(input.value)
}

const cpfMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d)(\d{8})$/,"$1.$2")
  value = value.replace(/(\d)(\d{5})$/,"$1.$2")
  value = value.replace(/(\d)(\d{2})$/,"$1-$2")
  return value
}

var handleMoney = (event) => {
  var input = event.target
  input.value = moneyMask(input.value)
}

const moneyMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{0})(\d)/,"$1R$ $2")
  value = value.replace(/(\d)(\d{2})$/,"$1,$2")
  return value
}

var handleCod = (event) => {
    var input = event.target
    input.value = codMask(input.value)
}

const codMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d)(\d{1})$/,"$1.$2")
    return value
}

document.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {
  
      var btn = document.querySelector("#btn");
    
    btn.click();
  
  }
});
