function whats() {
var name = document.getElementById("nome");
var tel = document.getElementById("telef");
var cpf = document.getElementById("cpf");
var end = document.getElementById("rua");
var payment = document.getElementById("payment");
var chapa = document.getElementById("chapa");
var total = document.getElementById("valuetaxa");
var codint = document.getElementById("codint");
var product = document.getElementById("product");

var btn = document.getElementById("btn");

var upperCase = name.value
var inputName = upperCase.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
var inputTel = tel.value
var inputCpf = cpf.value
var inputEnd = end.value
var inputPayment = payment.value
var inputChapa = chapa.value
var inputTotal = total.value
var inputCodint = codint.value


if (inputCodint == 210949.9) {
var inputProduct = "PANTOVIT FRASCO 10ML";
} if (inputCodint == 212216.7) {
var inputProduct = "AGUA MINERAL MONTEIRO LOBATO S/GAS PET 510ML";
} if (inputCodint == 221382.7) {
var inputProduct = "DEXILANT 30MG CAIXA 30 CAPSULAS";
} if (inputCodint == 221251.7) {
var inputProduct = "DEXILANT 30MG CAIXA 60 CAPSULAS";
} if (inputCodint == 221253.3) {
var inputProduct = "DEXILANT 60MG CAIXA 30 CAPSULAS";
} if (inputCodint == 221252.5) {
var inputProduct = "DEXILANT 60MG CAIXA 60 CAPSULAS";
} if (inputCodint == 122642.3) {
var inputProduct = "SOLUCAO CLORETO DE SODIO ADV 0.9% FRASCO 500ML";
} if (inputCodint == 216049.7) {
var inputProduct = "SOLUCAO CLORETO DE SODIO SORIMAX 0.9% FRASCO 500ML";
} if (inputCodint == 215690.6) {
var inputProduct = "SOLUCAO CLORETO DE SODIO SORIMAX 0.9% FRASCO 250ML";
} if (inputCodint == 122324.9) {
var inputProduct = "SOLUCAO CLORETO DE SODIO ADV 0.9% FRASCO 250ML";
} if (inputCodint == 216420.1) {
var inputProduct = "SOLUCAO CLORETO DE SODIO SORIMAX 0.9% FRASCO 100ML";
} if (inputCodint == 120838.0) {
var inputProduct = "SOLUCAO CLORETO DE SODIO ADV 0.9% FRASCO 100ML";
} if (inputCodint == 232343.6) {
var inputProduct = "LAVITAN MELATONINA 0,21MG MORANGO 150 COMPRIMIDOS";
} if (inputCodint == 232458.6) {
var inputProduct = "MELATONINA FAST EQUALIV 210MCG MENTA FRASCO 30ML";
} if (inputCodint == 232342.8) {
var inputProduct = "LAVITAN MELATONINA 0,21MG MORANGO 90 COMPRIMIDOS";
} if (inputCodint == 233293.0) {
var inputProduct = "MELATONINA ARTE NATIVA SABOR MARACUJA FRASCO 20ML";
} if (inputCodint == 233481.3) {
var inputProduct = "BILASTINA EUROFARMA 20MG CAIXA 30 COMPRIMIDOS (G)";
} if (inputCodint == 233480.5) {
var inputProduct = "BILASTINA EUROFARMA 20MG CAIXA 15 COMPRIMIDOS (G)";
} if (inputCodint == 231657.8) {
var inputProduct = "ALEKTOS 2,5MG/ML SOLUCAO ORAL FRASCO 120ML";
} if (inputCodint == 233935.8) {
var inputProduct = "ALEKTOS 20MG CAIXA 20 COMPRIMIDOS";
} if (inputCodint == 233271.1) {
var inputProduct = "NAIRE 20MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 172957.3) {
var inputProduct = "ALEKTOS 20MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 235875.1) {
var inputProduct = "TYNNA 20MG CAIXA 15 COMPRIMIDOS";
} if (inputCodint == 233274.6) {
var inputProduct = "NAIRE 20MG CAIXA 15 COMPRIMIDOS";
} if (inputCodint == 165093.7) {
var inputProduct = "DESODORANTE HERBISSIMO TRADICIONAL CREME POTE 55G";
} if (inputCodint == 165094.5) {
var inputProduct = "DESODORANTE HERBISSIMO NEUTRO CREME POTE 55G";
} if (inputCodint == 113257.4) {
var inputProduct = "SUCRAFILM 2G/10ML CAIXA 20 FLACONETES 10ML";
} if (inputCodint == 113256.6) {
var inputProduct = "SUCRAFILM 1G CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 211200.6) {
var inputProduct = "ZYPRED COLIRIO FRASCO 3ML";
} if (inputCodint == 211596.0) {
var inputProduct = "RELVAR ELLIPTA 100/25MCG PO INALANTE 30 DOSES";
} if (inputCodint == 150148.0) {
var inputProduct = "MESALAZINA EMS 800MG CAIXA 30 COMPRIMIDOS (G)";
} if (inputCodint == 226360.5) {
var inputProduct = "CETAPHIL SABONETE BARRA LIMPEZA PROFUNDA 127G";
} if (inputCodint == 169208.8) {
var inputProduct = "CETAPHIL CREME HIDRATANTE POTE 453G";
} if (inputCodint == 226362.1) {
var inputProduct = "CETAPHIL SABONETE BARRA LIMPEZA SUAVE 127G";
} if (inputCodint == 233514.6) {
var inputProduct = "CETAPHIL OPTIMAL HYDRATION SERUM HD FAC 48H 30ML";
} if (inputCodint == 172230.4) {
var inputProduct = "CETAPHIL RESTORADERM PRO AD CONTROL LOC HIDR 295ML";
} if (inputCodint == 226360.5) {
var inputProduct = "CETAPHIL SABONETE BARRA LIMPEZA PROFUNDA 127G";
} if (inputCodint == 235580.9) {
var inputProduct = "CETAPHIL OPTIMAL HYDRATION WATER GEL REST HIAL 48G";
} if (inputCodint == 233515.4) {
var inputProduct = "CETAPHIL OPTIMAL HYDRA SERUM CORP HID SPR 207ML";
} if (inputCodint == 233511.1) {
var inputProduct = "CETAPHIL LOCAO HIDRATANTE FRASCO 200ML";
} if (inputCodint == 234145.8) {
var inputProduct = "CETAPHIL GEL CREME HIDRATANTE BISNAGA 226G";
} if (inputCodint == 234143.1) {
var inputProduct = "CETAPHIL GEL CREME HIDRATANTE POTE 453G";
} if (inputCodint == 211963.8) {
var inputProduct = "CETAPHIL PUMP LOCAO DE LIMPEZA 300ML";
} if (inputCodint == 231944.5) {
var inputProduct = "CETAPHIL HEALTHY HYGIENE CREME P/MAOS BISNAGA 50ML";
} if (inputCodint == 234313.8) {
var inputProduct = "CETAPHIL SUN ANTIOX LIGHT FLUID FPS60 S/ COR 50 ML";
} if (inputCodint == 232823.7) {
var inputProduct = "CETAPHIL PRO AD CONTROL SABONETE FRASCO 295ML";
} if (inputCodint == 230500.0) {
var inputProduct = "ROSUVASTATINA CALCICA MEDLEY 20MG CX 60 COMP (G)";
} if (inputCodint == 230499.9) {
var inputProduct = "ROSUVASTATINA CALCICA MEDLEY 10MG CX 60 COMP (G)";
} if (inputCodint == 214166.7) {
var inputProduct = "ROSUVASTATINA CALCICA MEDLEY 20MG CX 30 COMP (G)";
} if (inputCodint == 236132.8) {
var inputProduct = "ROSUVASTATINA CALCICA CIMED 20MG CAIXA 30COMP (G)";
} if (inputCodint == 214165.9) {
var inputProduct = "ROSUVASTATINA CALCICA MEDLEY 10MG CX 30 COMP (G)";
} if (inputCodint == 224554.6) {
var inputProduct = "ROSUVASTATINA CALCICA SANDOZ 10MG CX 60COMP (G)";
} if (inputCodint == 233355.4) {
var inputProduct = "ROSUVASTATINA CALCICA CIMED 10MG CAIXA 30COMP (G)";
} if (inputCodint == 233845.1) {
var inputProduct = "ROSUVASTATINA CALCICA ALTHAIA 5MG CX 30 COMP (G)";
} if (inputCodint == 172970.9) {
var inputProduct = "ROSUCOR 10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 233319.1) {
var inputProduct = "ROSUVASTATINA CALCICA TEUTO 20MG CAIXA 30COMP (G)";
} if (inputCodint == 229127.8) {
var inputProduct = "PLENANCE EZE 10/10MG CAIXA 30 CAPSULAS";
} if (inputCodint == 229128.6) {
var inputProduct = "PLENANCE EZE 20/10MG CAIXA 30 CAPSULAS";
} if (inputCodint == 209689.4) {
var inputProduct = "ROSUCOR 20MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 225081.2) {
var inputProduct = "ROSUVASTATINA CALCICA SANDOZ 5MG CX 30COMP (G)";
} if (inputCodint == 215976.0) {
var inputProduct = "PLENANCE 10MG CAIXA 90 COMPRIMIDOS";
} if (inputCodint == 236191.8) {
var inputProduct = "COLEDUE-R 10MG+10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 229125.1) {
var inputProduct = "PLENANCE EZE 5/10MG CAIXA 30 CAPSULAS";
} if (inputCodint == 225521.8) {
var inputProduct = "PLENANCE 5MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 207448.4) {
var inputProduct = "RUSOVAS 5MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 229933.3) {
var inputProduct = "ZINPASS+EZE 20MG/10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 236192.6) {
var inputProduct = "COLEDUE-R 20MG+10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 215080.3) {
var inputProduct = "ROSUCOR 20MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 229934.1) {
var inputProduct = "ZINPASS+EZE 10MG/10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 213385.1) {
var inputProduct = "ROSUCOR 10MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 206713.7) {
var inputProduct = "PLENANCE 10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 213764.1) {
var inputProduct = "ZINPASS 10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 233315.9) {
var inputProduct = "ROSUVASTATINA CALCICA TEUTO 10MG CAIXA 30COMP (G)";
} if (inputCodint == 118438.2) {
var inputProduct = "CRESTOR 20MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 157300.3) {
var inputProduct = "CRESTOR 40MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 118439.0) {
var inputProduct = "CRESTOR 10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 210770.9) {
var inputProduct = "CRESTOR 5MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 224555.4) {
var inputProduct = "ROSUVASTATINA CALCICA SANDOZ 20MG CX 60COMP (G)";
} if (inputCodint == 228458.8) {
var inputProduct = "TREZETE 20MG+10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 235326.4) {
var inputProduct = "RUSOVAS 20MG CAIXA 90 COMPRIMIDOS";
} if (inputCodint == 227014.3) {
var inputProduct = "TREZOR 40MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 171423.2) {
var inputProduct = "CRESTOR 5MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 229932.5) {
var inputProduct = "ZINPASS+EZE 40MG/10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 228460.9) {
var inputProduct = "TREZETE 10MG+10MG CAIXA 30 C0MPRIMIDOS";
} if (inputCodint == 210798.7) {
var inputProduct = "RUSOVAS 10MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 229371.6) {
var inputProduct = "TREZOR 20MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 206714.5) {
var inputProduct = "PLENANCE 20MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 229480.7) {
var inputProduct = "ROSUCOR 10MG CAIXA 100 COMPRIMIDOS";
} if (inputCodint == 213766.8) {
var inputProduct = "ZINPASS 20MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 203046.5) {
var inputProduct = "ROSULIB 10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 173018.7) {
var inputProduct = "RUSOVAS 10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 173017.9) {
var inputProduct = "RUSOVAS 20MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 229723.1) {
var inputProduct = "RUVA 20MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 229372.4) {
var inputProduct = "TREZOR 10MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 174424.7) {
var inputProduct = "TREZOR 20MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 229809.0) {
var inputProduct = "ROX 10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 229504.1) {
var inputProduct = "TREZOR 5MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 236189.7) {
var inputProduct = "COLEDUE-R 5MG+10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 229722.3) {
var inputProduct = "RUVA 10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 233806.4) {
var inputProduct = "ROSA 20MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 235361.9) {
var inputProduct = "RUNNER 10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 229720.7) {
var inputProduct = "RUVA 5MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 222544.9) {
var inputProduct = "TREZOR 5MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 235362.7) {
var inputProduct = "RUNNER 20MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 104180.8) {
var inputProduct = "DECONGEX PLUS CAIXA 12 COMPRIMIDOS";
} if (inputCodint == 101561.8) {
var inputProduct = "DECONGEX PLUS XAROPE FRASCO 120ML";
} if (inputCodint == 101562.6) {
var inputProduct = "DECONGEX PLUS GOTAS FRASCO 20ML";
} if (inputCodint == 165757.3) {
var inputProduct = "DECONGEX PLUS CARTELA 4 COMPRIMIDOS";
} if (inputCodint == 109890.0) {
var inputProduct = "FLUCONAZOL MEDLEY 150MG CAIXA 2 CAPSULAS (G)";
} if (inputCodint == 213502.1) {
var inputProduct = "FLUCONAZOL CIMED 150MG CAIXA 2 CAPSULAS (G)";
} if (inputCodint == 233826.7) {
var inputProduct = "FLUCONAZOL MEDQUIMICA 150MG CAIXA 1 CAPSULA (G)";
} if (inputCodint == 163360.0) {
var inputProduct = "TRIAZOL 150MG CAIXA 2 CAPSULAS";
} if (inputCodint == 103860.9) {
var inputProduct = "ZELIX 150MG CAIXA 1 CAPSULA";
} if (inputCodint == 226867.6) {
var inputProduct = "OZEMPIC 1MG SOL INJ 1 CARP 3ML+1 SIST APL";
} if (inputCodint == 226800.0) {
var inputProduct = "OZEMPIC 0,25+0,5MG SOL INJ 1 CARP 1,5ML+1 SIST APL";
} if (inputCodint == 233191.1) {
var inputProduct = "RYBELSUS 7MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 233193.8) {
var inputProduct = "RYBELSUS 14MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 233190.3) {
var inputProduct = "RYBELSUS 3MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 114721.5) {
var inputProduct = "UREADIN 20 UREIA CREME BISNAGA 50G";
} if (inputCodint == 209688.6) {
var inputProduct = "UREADIN 10 UREIA LOCAO FRASCO 400ML";
} if (inputCodint == 207868.8) {
var inputProduct = "UREADIN PODOS GEL OIL BISNAGA 75ML";
} if (inputCodint == 231710.8) {
var inputProduct = "UREADIN 10 UREIA LOCAO FRASCO 200ML";
} if (inputCodint == 215484.7) {
var inputProduct = "UREADIN MAOS CREME FRASCO 51,5G";
} if (inputCodint == 223813.5) {
var inputProduct = "MICRONEBULIZADOR MICROPAR PLUS ADULTO PLUG";
} if (inputCodint == 211856.3) {
var inputProduct = "MICRONEBULIZADOR MICROPAR PLUS INFANTIL ROSCA";
} if (inputCodint == 223814.3) {
var inputProduct = "MICRONEBULIZADOR MICROPAR PLUS INFANTIL PLUG";
} if (inputCodint == 211855.5) {
var inputProduct = "MICRONEBULIZADOR MICROPAR PLUS ADULTO ROSCA";
} if (inputCodint == 236501.1) {
var inputProduct = "INALADOR G-TECH NEBULIZADOR AR COMPRIMIDO DC1";
} if (inputCodint == 173108.3) {
var inputProduct = "TERMOMETRO G-TECH CLINICO DIGITAL COLORS";
} if (inputCodint == 228921.5) {
var inputProduct = "TERMOMETRO MULTILASER DIGITAL BRANCO HC070";
} if (inputCodint == 231219.8) {
var inputProduct = "TERMOMETRO MULTILASER INFRAVERMELHO S/CONTA HC260";
} if (inputCodint == 104781.2) {
var inputProduct = "MAXALT 10MG CAIXA 2 COMPRIMIDOS";
} if (inputCodint == 234193.3) {
var inputProduct = "CARBONATO DE LITIO EUROFARMA 300MG 90 COMP (C1)";
} if (inputCodint == 234192.5) {
var inputProduct = "CARBONATO DE LITIO EUROFARMA 300MG 60 COMP (C1)";
} if (inputCodint == 232481.8) {
var inputProduct = "CARBOLITIUM CR 450MG CAIXA 90 COMPRIMIDOS (C1)";
} if (inputCodint == 232479.7) {
var inputProduct = "CARBOLITIUM CR 450MG CAIXA 60 COMPRIMIDOS (C1)";
} if (inputCodint == 232477.0) {
var inputProduct = "CARBOLITIUM 300MG CAIXA 90 COMPRIMIDOS (C1)";
} if (inputCodint == 235298.2) {
var inputProduct = "CARBONATO DE LITIO BIOLAB 300MG 60 COMP (C1)";
} if (inputCodint == 232139.3) {
var inputProduct = "LITERATA 300MG CAIXA 60 COMPRIMIDOS (C1)";
} if (inputCodint == 232474.6) {
var inputProduct = "CARBOLITIUM 300MG CAIXA 60 COMPRIMIDOS (C1)";
} if (inputCodint == 215698.1) {
var inputProduct = "CARLIT 300MG CAIXA 50 COMPRIMIDOS (C1)";
} if (inputCodint == 125418.4) {
var inputProduct = "VAL DE BETAMETASONA+ASSOCIACOES EURO CREME 20G (G)";
} if (inputCodint == 117745.7) {
var inputProduct = "VAL DE BETAMETASONA MEDLEY POMADA BISNAGA 30G (G)";
} if (inputCodint == 163688.7) {
var inputProduct = "VAL BETAMETASONA+ASSOCIACOES NOVA QUIMICA CR 20G";
} if (inputCodint == 236063.2) {
var inputProduct = "QUADRIDERM POMADA BISNAGA 20G";
} if (inputCodint == 211450.3) {
var inputProduct = "ACIDO FUSIDICO+VAL DE BETA NOVA QUIMICA CR 15G (G)";
} if (inputCodint == 137342.3) {
var inputProduct = "OTO-BETNOVATE SOLUCAO OTOLOGICA FRASCO 10ML";
} if (inputCodint == 125063.4) {
var inputProduct = "VERUTEX B CREME BISNAGA 15G";
} if (inputCodint == 163705.4) {
var inputProduct = "VAL DE BETAMETASONA NEO QUIMICA SOL CAPILAR 50ML(G)";
} if (inputCodint == 163677.2) {
var inputProduct = "VAL DE BETAMETASONA NEO QUIMICA CR BISNAGA 30G (G)";
} if (inputCodint == 153317.5) {
var inputProduct = "POSTEC POMADA BISNAGA 20G";
} if (inputCodint == 176061.8) {
var inputProduct = "BETNOVATE 1MG/G CREME BISNAGA 30G";
} if (inputCodint == 176069.3) {
var inputProduct = "BETNOVATE 1MG/G SOLUCAO CAPILAR FRASCO 50ML";
} if (inputCodint == 176068.5) {
var inputProduct = "BETNOVATE 1MG/G POMADA BISNAGA 30G";
} if (inputCodint == 176071.4) {
var inputProduct = "BETNOVATE N 1+5MG CREME BISNAGA 30G";
} if (inputCodint == 223222.7) {
var inputProduct = "LATUDA 40MG CAIXA 30 COMPRIMIDOS (C1)";
} if (inputCodint == 229693.3) {
var inputProduct = "LUTAB 40MG CAIXA 30 COMPRIMIDOS (C1)";
} if (inputCodint == 229692.5) {
var inputProduct = "LUTAB 20MG CAIXA 30 COMPRIMIDOS (C1)";
} if (inputCodint == 225110.2) {
var inputProduct = "LATUDA 20MG CAIXA 30 COMPRIMIDOS (C1)";
} if (inputCodint == 227685.2) {
var inputProduct = "LAVITAN COLAGENO TIPO II CAIXA 30 CAPSULAS";
} if (inputCodint == 218512.5) {
var inputProduct = "LAVITAN CABELOS E UNHAS CAIXA 60 CAPSULAS";
} if (inputCodint == 232343.6) {
var inputProduct = "LAVITAN MELATONINA 0,21MG MORANGO 150 COMPRIMIDOS";
} if (inputCodint == 215751.1) {
var inputProduct = "LAVITAN A-Z MAIS CAIXA 90 COMPRIMIDOS";
} if (inputCodint == 217447.7) {
var inputProduct = "LAVITAN A-Z MAIS MULHER CAIXA 90 COMPRIMIDOS";
} if (inputCodint == 217452.2) {
var inputProduct = "LAVITAN MEMORIA CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 228776.2) {
var inputProduct = "LAVITAN 5G MULTI MULHER FRASCO 60 COMPRIMIDOS";
} if (inputCodint == 228775.4) {
var inputProduct = "LAVITAN 5G MULTI HOMEM FRASCO 60 COMPRIMIDOS";
} if (inputCodint == 235989.3) {
var inputProduct = "LAVITAN MACA PERUANA VIRON FRASCO 60 CAPSULAS";
} if (inputCodint == 227686.0) {
var inputProduct = "LAVITAN PRIMULA FEMME CAIXA 60 CAPSULAS";
} if (inputCodint == 236402.7) {
var inputProduct = "LAVITAN PRE-NATAL+OMEGA 3 DHA 90 CAPSULAS";
} if (inputCodint == 202439.9) {
var inputProduct = "	LAVITAN A-Z MULHER CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 205227.7) {
var inputProduct = "LAVITAN A-Z CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 213505.6) {
var inputProduct = "LAVITAN CALCIO+D 600MG/200UI CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 213508.0) {
var inputProduct = "LAVITAN CABELOS E UNHAS CAIXA 30 CAPSULAS";
} if (inputCodint == 235979.7) {
var inputProduct = "LAVITAN 50+ MULHER CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 233377.3) {
var inputProduct = "LAVITAN 50+ SENIOR CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 225711.7) {
var inputProduct = "LAVITAN CRANBERRY CAIXA 30 CAPSULAS";
} if (inputCodint == 229231.8) {
var inputProduct = "LAVITAN IMUNIDADE CDZSE CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 217971.0) {
var inputProduct = "LAVITAN OMEGA MAIS CAIXA 90 CAPSULAS";
} if (inputCodint == 227718.5) {
var inputProduct = "LAVITAN KIDS SOLUCAO ORAL TUTTI-FRUTTI 240ML";
} if (inputCodint == 222772.7) {
var inputProduct = "LAVITAN TESTO PERFORMANCE CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 227716.9) {
var inputProduct = "LAVITAN VITAMINA D 1.000UI CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 221047.4) {
var inputProduct = "LAVITAN KIDS SABORES 60 COMPRIMIDOS MASTIGAVEIS";
} if (inputCodint == 235991.4) {
var inputProduct = "LAVITAN VITAMINA D 500UI/GOTA FRASCO 10ML";
} if (inputCodint == 220730.4) {
var inputProduct = "LAVITAN INFANTIL SOLUCAO ORAL LARANJA FRASCO 240ML";
} if (inputCodint == 217404.7) {
var inputProduct = "OTOSYLASE SOLUCAO OTOLOGICA FRASCO 10ML";
} if (inputCodint == 165431.3) {
var inputProduct = "ULTRAFER 50MG/ML GOTAS FRASCO 30ML";
} if (inputCodint == 203830.1) {
var inputProduct = "ULTRAFER 100MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 105590.0) {
var inputProduct = "COLTRAX 4MG CAIXA 20 COMPRIMIDOS";
} if (inputCodint == 234007.6) {
var inputProduct = "COLTRAX 2MG/ML CAIXA 3 AMPOLAS DE 2ML";
} if (inputCodint == 109409.6) {
var inputProduct = "PREDSIM 20MG CAIXA 10 COMPRIMIDOS";
} if (inputCodint == 108127.9) {
var inputProduct = "PREDSIM 3MG/ML SOLUCAO ORAL FRASCO 60ML";
} if (inputCodint == 233612.2) {
var inputProduct = "PREDSIM 20MG CAIXA 20 COMPRIMIDOS";
} if (inputCodint == 206798.9) {
var inputProduct = "PREDSIM 40MG CAIXA 7 COMPRIMIDOS";
} if (inputCodint == 107309.2) {
var inputProduct = "PREDSIM 3MG/ML SOLUCAO ORAL FRASCO 100ML";
} if (inputCodint == 146925.7) {
var inputProduct = "PREDSIM 11MG/ML GOTAS FRASCO 20ML";
} if (inputCodint == 109410.9) {
var inputProduct = "PREDSIM 5MG CAIXA 20 COMPRIMIDOS";
} if (inputCodint == 233611.4) {
var inputProduct = "PREDSIM 40MG CAIXA 10 COMPRIMIDOS";
} if (inputCodint == 109408.8) {
var inputProduct = "PREDSIM 5MG CAIXA 10 COMPRIMIDOS";
} if (inputCodint == 115367.4) {
var inputProduct = "PERCOF 6MG/ML XAROPE FRASCO 120ML";
} if (inputCodint == 107187.1) {
var inputProduct = "ANTUX 30MG/5ML XAROPE FRASCO 120ML";
} if (inputCodint == 222288.9) {
var inputProduct = "LISADOR DIP 1G CAIXA 10 COMPRIMIDOS";
} if (inputCodint == 110470.9) {
var inputProduct = "LISADOR CARTELA 8 COMPRIMIDOS";
} if (inputCodint == 168020.4) {
var inputProduct = "LISADOR CARTELA 4 COMPRIMIDOS";
} if (inputCodint == 140985.2) {
var inputProduct = "CAFILISADOR CAIXA 16 COMPRIMIDOS";
} if (inputCodint == 113590.0) {
var inputProduct = "LISADOR CAIXA 16 COMPRIMIDOS";
} if (inputCodint == 228687.4) {
var inputProduct = "LISADOR DIP 500MG/ML GOTAS FRASCO 20ML";
} if (inputCodint == 114552.7) {
var inputProduct = "AMOXICILINA EUROFARMA 875MG CAIXA 14 COMP (G)";
} if (inputCodint == 154696.1) {
var inputProduct = "AMOX+CLAV POTASSIO LEGRAND 875+125MG CX 14 COMP";
} if (inputCodint == 154641.9) {
var inputProduct = "AMOXICILINA GERMED 400MG/5ML SUSP FR 100ML (G)";
} if (inputCodint == 154636.3) {
var inputProduct = "AMOXICILINA GERMED 250MG/5ML SUSP FR 150ML (G)";
} if (inputCodint == 144857.9) {
var inputProduct = "AMOXICILINA CIMED 500MG CAIXA 21 CAPSULAS (G)";
} if (inputCodint == 234420.2) {
var inputProduct = "AMOX+CLAV POTASSIO UNIAO QUI 400+57MG/5ML 70ML (G)";
} if (inputCodint == 154672.6) {
var inputProduct = "AMOXICILINA UNIAO QUIMICA 250MG/5ML SUSP 150ML (G)";
} if (inputCodint == 118575.6) {
var inputProduct = "ACETILCISTEINA EURO 600MG CX 16 ENVELOPES 5G (G)";
} if (inputCodint == 209050.5) {
var inputProduct = "FLUITEINA 40MG/ML XAROPE FRASCO 120ML";
} if (inputCodint == 110429.0) {
var inputProduct = "ACETILCISTEINA EURO 100MG CX 16 ENVELOPES 5G (G)";
} if (inputCodint == 234271.7) {
var inputProduct = "ACETILCISTEINA EUROFARMA 40MG/ML XPE FR 120ML (G)";
} if (inputCodint == 158770.4) {
var inputProduct = "FLUITEINA 20MG/ML XAROPE FRASCO 120ML";
} if (inputCodint == 153566.4) {
var inputProduct = "FLUITEINA ADULTO 200MG CAIXA 16 ENVELOPES 5G";
} if (inputCodint == 126373.4) {
var inputProduct = "ACETILCISTEINA EMS 40MG/ML XAROPE FRASCO 120ML (G)";
} if (inputCodint == 234306.6) {
var inputProduct = "FLUIVE 40MG/ML XAROPE FRASCO 120ML";
} if (inputCodint == 205867.9) {
var inputProduct = "FLUITEINA ADULTO 600MG CAIXA 16 ENVELOPES 5G";
} if (inputCodint == 154133.5) {
var inputProduct = "ACETILCISTEINA GERMED 20MG/ML XPE FR 120ML (G)";
} if (inputCodint == 126371.8) {
var inputProduct = "ACETILCISTEINA EMS 200MG CX 16 ENVELOPES 5G (G)";
} if (inputCodint == 154147.4) {
var inputProduct = "ACETILCISTEINA GERMED 600MG CX 16 ENVELOPES 5G (G)";
} if (inputCodint == 252067.5) {
var inputProduct = "FLUIMUCIL D 600MG CAIXA 16 ENVELOPES 5G";
} if (inputCodint == 130365.2) {
var inputProduct = "ACETILCISTEINA UNIAO QUIMICA 100MG/ML 5AMP 3ML (G)";
} if (inputCodint == 252016.5) {
var inputProduct = "FLUIMUCIL 100MG/ML 5 AMPOLAS 3ML";
} if (inputCodint == 233407.1) {
var inputProduct = "ACETILCISTEINA GEOLAB 20MG/ML XPE FR 120ML (G)";
} if (inputCodint == 252071.2) {
var inputProduct = "FLUIMUCIL 600MG CAIXA 16 COMPRIMIDOS EFERVESCENTES";
} if (inputCodint == 202220.3) {
var inputProduct = "FLUIMUCIL ADULTO 200MG CAIXA 16 COMPRIMIDOS EFERV";
} if (inputCodint == 115414.0) {
var inputProduct = "FLUIMUCIL ADULTO 40MG/ML XAROPE FRASCO 120ML";
} if (inputCodint == 235988.5) {
var inputProduct = "CIMEGRIPE MUC 10 COMPRIMIDOS EFERVECENTE";
} if (inputCodint == 173646.6) {
var inputProduct = "SBP ELETRICO 45 NOITES REFIL 35ML GRATIS APARELHO";
} if (inputCodint == 154672.6) {
var inputProduct = "AMOXICILINA UNIAO QUIMICA 250MG/5ML SUSP 150ML (G)";
} if (inputCodint == 233589.1) {
var inputProduct = "SOPI CAIXA 30 SACHES";
} if (inputCodint == 237020.8) {
var inputProduct = "REPELENTE ABOVE PROTECT AERO FRASCO 120G";
} if (inputCodint == 236835.1) {
var inputProduct = "REPELENTE TOTAL PROTECT SPRAY FRASCO 200ML";
} if (inputCodint == 236838.6) {
var inputProduct = "REPELENTE TOTAL PROTECT ICARIDINA SPRAY 100ML";
} if (inputCodint == 222269.4) {
var inputProduct = "REPELENTE INFANTIL GRANADO BEBE SENSIVEL FR 110ML";
} if (inputCodint == 205062.6) {
var inputProduct = "REPELENTE XO INSETO KIDS LOCAO FRASCO 100ML";
} if (inputCodint == 237057.4) {
var inputProduct = "REPELENTE FULLREPEL C/ ICARIDINA SPRAY 100ML";
} if (inputCodint == 227760.1) {
var inputProduct = "REPELENTE XO INSETO ICARIDINA SPRAY FRASCO 100ML";
} if (inputCodint == 218774.5) {
var inputProduct = "LOCAO ANTIMOSQUITO JOHNSONS BABY FRASCO 200ML";
} if (inputCodint == 169025.0) {
var inputProduct = "REPELENTE OFF FAMILY LOCAO FRASCO 100ML";
} if (inputCodint == 202573.8) {
var inputProduct = "EGIDE 50MG CAIXA 60 COMPRIMIDOS (C1)";
} if (inputCodint == 163268.3) {
var inputProduct = "TOPIRAMATO EUROFARMA 100MG CX 60 COMPRIMIDOS (C1)";
} if (inputCodint == 163277.1) {
var inputProduct = "TOPIRAMATO EUROFARMA 50MG CX 60 COMPRIMIDOS (C1)";
} if (inputCodint == 163273.9) {
var inputProduct = "TOPIRAMATO EUROFARMA 25MG CX 60 COMPRIMIDOS (C1)";
} if (inputCodint == 211958.2) {
var inputProduct = "VIDMAX 100MG CAIXA 60 COMPRIMIDOS (C1)";
} if (inputCodint == 141305.0) {
var inputProduct = "AMATO 100MG CAIXA 60 COMPRIMIDOS (C1)";
} if (inputCodint == 202573.8) {
var inputProduct = "EGIDE 50MG CAIXA 60 COMPRIMIDOS (C1";
} if (inputCodint == 141303.4) {
var inputProduct = "AMATO 50MG CAIXA 60 COMPRIMIDOS (C1)";
} if (inputCodint == 211957.4) {
var inputProduct = "VIDMAX 50MG CAIXA 60 COMPRIMIDOS (C1)";
} if (inputCodint == 141304.2) {
var inputProduct = "AMATO 25MG CAIXA 60 COMPRIMIDOS (C1)";
} if (inputCodint == 221389.4) {
var inputProduct = "TEMPORA 25MG CAIXA 60 COMPRIMIDOS (C1)";
} if (inputCodint == 160125.4) {
var inputProduct = "LOSARTANA POTASSICA+HIDRO EURO 50+12,5MG 30COMP (G)";
} if (inputCodint == 160124.6) {
var inputProduct = "LOSARTANA POTASSICA+HIDRO EURO 100+25MG 30 COMP (G)";
} if (inputCodint == 109880.4) {
var inputProduct = "ARADOIS 50MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 160112.3) {
var inputProduct = "LOSARTANA POTASSICA EUROFARMA 50MG 30 COMPRIMID (G)";
} if (inputCodint == 116517.3) {
var inputProduct = "LOSARTANA POTASSICA MEDLEY 50MG 30 COMPRIMIDOS (G)";
} if (inputCodint == 148672.7) {
var inputProduct = "ARADOIS H 50/12,5MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 205372.0) {
var inputProduct = "CORUS 50MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 160117.4) {
var inputProduct = "LOSARTANA POTASSICA GERMED 50MG 30 COMPRIMIDOS (G)";
} if (inputCodint == 160115.8) {
var inputProduct = "LOSARTANA POTASSICA TEUTO 50MG CAIXA 30 COMP (G)";
} if (inputCodint == 226586.2) {
var inputProduct = "LOSARTANA POTASSICA PRATI 100MG 30 COMPRIMID (G)";
} if (inputCodint == 116097.0) {
var inputProduct = "ARADOIS 25MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 209214.8) {
var inputProduct = "ARADOIS H 50/12,5MG CAIXA 90 COMPRIMIDOS";
} if (inputCodint == 205374.7) {
var inputProduct = "CORUS H 100/25MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 171348.3) {
var inputProduct = "ARADOIS H 100/25MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 116098.9) {
var inputProduct = "ARADOIS H 100/25MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 110980.9) {
var inputProduct = "ARADOIS H 50/12,5MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 153629.6) {
var inputProduct = "ZART H 100/25MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 205373.9) {
var inputProduct = "CORUS H 50/12,5MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 116729.1) {
var inputProduct = "ARADOIS 100MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 117818.5) {
var inputProduct = "LOTAR 5/100MG CAIXA 30 CAPSULAS";
} if (inputCodint == 205371.2) {
var inputProduct = "CORUS 25MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 149755.7) {
var inputProduct = "LOTAR 5/50MG CAIXA 30 CAPSULAS";
} if (inputCodint == 117819.3) {
var inputProduct = "LOTAR 2,5/50MG CAIXA 30 CAPSULAS";
} if (inputCodint == 209215.6) {
var inputProduct = "ARADOIS 25MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 206034.9) {
var inputProduct = "HYZAAR 50/12,5MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 153340.7) {
var inputProduct = "ZART H 50/12,5MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 209217.2) {
var inputProduct = "ARADOIS 100MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 160082.5) {
var inputProduct = "LOSARTANA POTASSICA GERMED 100MG 30 COMPRIMIDOS(G)";
} if (inputCodint == 143374.8) {
var inputProduct = "ZART 50MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 171018.6) {
var inputProduct = "DICLORID DE LEVOCETIRIZINA EURO 5MG 10 COMP (G)";
} if (inputCodint == 229209.4) {
var inputProduct = "RIZI 5MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 169033.0) {
var inputProduct = "ZYXEM 5MG/ML GOTAS FRASCO 20ML";
} if (inputCodint == 214312.8) {
var inputProduct = "LEVOLUKAST 5/10MG CAIXA 14 COMPRIMIDOS";
} if (inputCodint == 234137.8) {
var inputProduct = "LEMONT 10/5MG CAIXA 14 COMPRIMIDOS";
} if (inputCodint == 229211.5) {
var inputProduct = "RIZI M 10/5MG CAIXA 14 COMPRIMIDOS";
} if (inputCodint == 107982.2) {
var inputProduct = "ZYRTEC 10MG CAIXA 12 COMPRIMIDOS";
} if (inputCodint == 234134.3) {
var inputProduct = "LEMONT 10/5MG CAIXA 7 COMPRIMIDOS";
} if (inputCodint == 124300.4) {
var inputProduct = "ZYXEM 5MG CAIXA 10 COMPRIMIDOS";
} if (inputCodint == 229212.3) {
var inputProduct = "RIZI M 10/5MG CAIXA 7 COMPRIMIDOS";
} if (inputCodint == 229210.7) {
var inputProduct = "RIZI 5MG CAIXA 10 COMPRIMIDOS";
} if (inputCodint == 166814.1) {
var inputProduct = "ZINA 5MG CAIXA 10 COMPRIMIDOS";
} if (inputCodint == 214310.1) {
var inputProduct = "LEVOLUKAST 5/10MG CAIXA 7 COMPRIMIDOS";
} if (inputCodint == 127208.3) {
var inputProduct = "AGUA MINERAL CRYSTAL S/GAS PET 500ML";
} if (inputCodint == 127209.1) {
var inputProduct = "AGUA MINERAL CRYSTAL C/GAS PET 500ML";
} if (inputCodint == 214198.2) {
var inputProduct = "AGUA MINERAL MONTEIRO LOBATO S/GAS PET 1,5L";
} if (inputCodint == 232398.9) {
var inputProduct = "AGUA MINERAL CRYSTAL LIMAO C/GAS PET 510ML";
} if (inputCodint == 236722.8) {
var inputProduct = "AGUA MINERAL CRYSTAL FRUTAS VERM C/GAS PET 510ML";
} if (inputCodint == 138430.9) {
var inputProduct = "REFRIGERANTE COCA-COLA ZERO LATA 350ML";
} if (inputCodint == 112477.7) {
var inputProduct = "REFRIGERANTE COCA-COLA LATA 350ML";
} if (inputCodint == 232911.7) {
var inputProduct = "REFRIGERANTE COCA-COLA PET 200ML";
} if (inputCodint == 138432.5) {
var inputProduct = "REFRIGERANTE COCA-COLA ZERO PET 2L";
} if (inputCodint == 138431.7) {
var inputProduct = "REFRIGERANTE COCA-COLA ZERO PET 600ML";
} if (inputCodint == 112481.4) {
var inputProduct = "REFRIGERANTE COCA-COLA PET 600ML";
} if (inputCodint == 112493.7) {
var inputProduct = "REFRIGERANTE COCA-COLA PET 2L";
} if (inputCodint == 216431.6) {
var inputProduct = "SUPLEVIT MULHER CAIXA 60 CAPSULAS";
} if (inputCodint == 213994.6) {
var inputProduct = "CAMOMINE C BABY CAIXA 20 CAPSULAS";
} if (inputCodint == 235981.8) {
var inputProduct = "ACEVITON TRIPLA ACAO 30 COMPRIMIDOS EFERVESCENTE";
} if (inputCodint == 216347.9) {
var inputProduct = "BIOARGI C 1+1G CAIXA 16 COMPRIMIDOS EFERVESCENTES";
} if (inputCodint == 225659.5) {
var inputProduct = "VITAMINA C EQUALIV 500MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 260028.8) {
var inputProduct = "APEVITIN BC XAROPE FRASCO 240ML";
} if (inputCodint == 218250.6) {
var inputProduct = "BIO-C ZINCO 1G+10MG LARANJA 30 COMPRIMIDOS EFERV";
} if (inputCodint == 233362.6) {
var inputProduct = "ACEVITON ZINCO LARANJA 30 COMPRIMIDOS EFERVESCENTE";
} if (inputCodint == 221047.4) {
var inputProduct = "LAVITAN KIDS SABORES 60 COMPRIMIDOS MASTIGAVEIS";
} if (inputCodint == 218256.5) {
var inputProduct = "BIO-C 200MG/ML GOTAS FRASCO 20ML";
} if (inputCodint == 109918.8) {
var inputProduct = "GEROVITAL CAIXA 60 CAPSULAS";
} if (inputCodint == 149316.9) {
var inputProduct = "BIO-C 1G LARANJA 10 COMPRIMIDOS EFERVESCENTES";
} if (inputCodint == 214806.8) {
var inputProduct = "ACEVITON 1G LARANJA 10 COMPRIMIDOS EFERVESCENTES";
} if (inputCodint == 167950.2) {
var inputProduct = "MIOSAN CAF 10/60MG CAIXA 15 COMPRIMIDOS";
} if (inputCodint == 167933.4) {
var inputProduct = "MIOSAN CAF 5/30MG CAIXA 15 COMPRIMIDOS";
} if (inputCodint == 140526.1) {
var inputProduct = "MIOSAN 5MG CAIXA 10 COMPRIMIDOS";
} if (inputCodint == 142505.1) {
var inputProduct = "MIOSAN 10MG CAIXA 10 COMPRIMIDOS";
} if (inputCodint == 156718.0) {
var inputProduct = "CLORID DE CICLOBENZAPRINA EURO 10MG 30 COMP (G)";
} if (inputCodint == 156720.1) {
var inputProduct = "CLORID DE CICLOBENZAPRINA EURO 5MG CX 15 COMP (G)";
} if (inputCodint == 227174.4) {
var inputProduct = "CLORID DE CICLOBENZAPRINA BIO 10MG 15 COMP (G)";
} if (inputCodint == 219356.3) {
var inputProduct = "CLORID DE CICLOBENZAPRINA CIMED 10MG 30 COMP (G)";
} if (inputCodint == 161067.9) {
var inputProduct = "NISTATINA TEUTO 100.000UI/ML SUSP ORAL 50ML (G)";
} if (inputCodint == 226832.6) {
var inputProduct = "ABSORVENTE DESCARTAVEL BIOFRAL MAXI GERIATR L20P17";
} if (inputCodint == 227744.1) {
var inputProduct = "FRALDA BIOFRAL CLASSIC GENERIC ADULTO M C/32";
} if (inputCodint == 227746.8) {
var inputProduct = "FRALDA BIOFRAL CLASSIC GENERIC ADULTO G C/28";
} if (inputCodint == 227747.6) {
var inputProduct = "FRALDA BIOFRAL CLASSIC GENERIC ADULTO XG C/24";
} if (inputCodint == 144577.3) {
var inputProduct = "ABSORVENTE DESCARTAVEL BIOFRAL MAXI GERIATRIC C/20";
} if (inputCodint == 192250.9) {
var inputProduct = "TOALHAS UMEDECIDAS BIOFRAL CORPO C/40 19,5X24,5CM";
} if (inputCodint == 232689.9) {
var inputProduct = "RIVAROXABANA MEDLEY 20MG CAIXA 30 COMPRIMIDOS (G)";
} if (inputCodint == 232690.1) {
var inputProduct = "RIVAROXABANA MEDLEY 15MG CAIXA 30 COMPRIMIDOS (G)";
} if (inputCodint == 232688.0) {
var inputProduct = "RIVAROXABANA MEDLEY 10MG CAIXA 30 COMPRIMIDOS (G)";
} if (inputCodint == 232489.3) {
var inputProduct = "XAFAC 15MG CAIXA 14 COMPRIMIDOS";
} if (inputCodint == 232491.4) {
var inputProduct = "XAFAC 20MG CAIXA 14 COMPRIMIDOS";
} if (inputCodint == 232490.6) {
var inputProduct = "XAFAC 15MG CAIXA 28 COMPRIMIDOS";
} if (inputCodint == 173421.7) {
var inputProduct = "XARELTO 20MG CAIXA 28 COMPRIMIDOS";
} if (inputCodint == 233354.6) {
var inputProduct = "RIVAROXABANA CIMED 15MG CAIXA 30 COMPRIMIDOS (G)";
} if (inputCodint == 213647.0) {
var inputProduct = "XARELTO 20MG CAIXA 14 COMPRIMIDOS";
} if (inputCodint == 228830.0) {
var inputProduct = "XARELTO 2,5MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 233201.7) {
var inputProduct = "ACOG 20MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 228831.9) {
var inputProduct = "XARELTO 2,5MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 232488.5) {
var inputProduct = "XAFAC 10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 233871.8) {
var inputProduct = "KLEV 20MG CAIXA 28 COMPRIMIDOS";
} if (inputCodint == 170783.3) {
var inputProduct = "XARELTO 10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 232494.9) {
var inputProduct = "XAFAC 20MG CAIXA 28 COMPRIMIDOS";
} if (inputCodint == 233425.8) {
var inputProduct = "VABAM 10MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 233427.4) {
var inputProduct = "VABAM 15MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 170782.5) {
var inputProduct = "XARELTO 10MG CAIXA 10 COMPRIMIDOS";
} if (inputCodint == 235867.1) {
var inputProduct = "DARTRIAL 15MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 235869.8) {
var inputProduct = "DARTRIAL 20MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 233429.0) {
var inputProduct = "VABAM 20MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 233200.9) {
var inputProduct = "ACOG 15MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 233865.4) {
var inputProduct = "KLEV 10MG CAIXA 10 COMPRIMIDOS";
} if (inputCodint == 217668.3) {
var inputProduct = "GYNOTRAN CAIXA 7 OVULOS+14 DEDEIRAS";
} if (inputCodint == 160570.6) {
var inputProduct = "METRONIDAZOL NOVA 100MG/G GEL VAGINAL BIS 50G (G)";
} if (inputCodint == 225888.1) {
var inputProduct = "METRONIDAZOL TEUTO 400MG CAIXA 24 COMPRIMIDOS (G)";
} if (inputCodint == 160575.7) {
var inputProduct = "METRONIDAZOL NEO QUIMICA 250MG 20 COMPRIMIDOS (G)";
} if (inputCodint == 109121.5) {
var inputProduct = "BENZOILMETRONIDAZOL EMS 40MG/ML SUSP FR 120ML (G";
} if (inputCodint == 145684.3) {
var inputProduct = "BIO VAGIN CREME VAGINAL 40G 10 APLIC";
} if (inputCodint == 226014.8) {
var inputProduct = "FLAGYL 400MG CAIXA 24 COMPRIMIDOS";
} if (inputCodint == 106312.6) {
var inputProduct = "FLAGYL GINECOLOGICO GELEIA 50G 10 APLICADORES";
} if (inputCodint == 226012.1) {
var inputProduct = "FLAGYL 250MG CAIXA 20 COMPRIMIDOS";
} if (inputCodint == 771002.1) {
var inputProduct = "ROZEX 0,75% GEL BISNAGA 30G";
} if (inputCodint == 102123.3) {
var inputProduct = "COLPISTATIN CREME VAGINAL 40G 10 APLICADORES";
} if (inputCodint == 224167.6) {
var inputProduct = "ANSIODORON WELEDA 80 COMPRIMIDOS";
} if (inputCodint == 107610.3) {
var inputProduct = "POVIDINE SOLUCAO TOPICA FRASCO 100ML";
} if (inputCodint == 224227.3) {
var inputProduct = "STRESSDORON WELEDA FRASCO 220 COMPRIMIDOS";
} if (inputCodint == 224166.8) {
var inputProduct = "ANSIODORON WELEDA 220 COMPRIMIDOS";
} if (inputCodint == 224234.5) {
var inputProduct = "CALENDULA WELEDA BABYCREME BISNAGA 75ML";
} if (inputCodint == 224170.5) {
var inputProduct = "BRYOPHYLLUM ARGENTO CULTUM WELEDA FRASCO 50ML";
} if (inputCodint == 224167.6) {
var inputProduct = "ANSIODORON WELEDA 80 COMPRIMIDOS";
} if (inputCodint == 217285.0) {
var inputProduct = "POVIDINE SOLUCAO TOPICA SPRAY FRASCO 30ML";
} if (inputCodint == 138032.4) {
var inputProduct = "SUSTRATE 10MG CAIXA 50 COMPRIMIDOS";
} if (inputCodint == 103422.9) {
var inputProduct = "ASPIRINA PREVENT 100MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 137825.9) {
var inputProduct = "A A S PROTECT 100MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 125171.7) {
var inputProduct = "ACIDO ACETILSALICILICO EMS 100MG CAIXA 30 COMP (G)";
} if (inputCodint == 116581.9) {
var inputProduct = "ENGOV CARTELA 6 COMPRIMIDOS";
} if (inputCodint == 213553.1) {
var inputProduct = "DORIL ENXAQUECA CARTELA 4 COMPRIMIDOS";
} if (inputCodint == 248014.0) {
var inputProduct = "SONRISAL CARTELA 2 COMPRIMIDOS EFERVESCENTES";
} if (inputCodint == 117322.9) {
var inputProduct = "DORIL CARTELA 6 COMPRIMIDO";
} if (inputCodint == 120038.9) {
var inputProduct = "ASPIRINA 500MG CARTELA 10 COMPRIMIDOS";
} if (inputCodint == 248019.1) {
var inputProduct = "A A S INFANTIL 100MG CARTELA 10 COMPRIMIDOS";
} if (inputCodint == 154885.2) {
var inputProduct = "AS-MED 500MG CARTELA 10 COMPRIMIDOS";
} if (inputCodint == 216693.6) {
var inputProduct = "SALICETIL INFANTIL 100MG CAIXA 200 COMPRIMIDOS";
} if (inputCodint == 209791.8) {
var inputProduct = "ECASIL 81MG CAIXA 90 COMPRIMIDOS";
} if (inputCodint == 248011.6) {
var inputProduct = "MELHORAL ADULTO CARTELA 8 COMPRIMIDOS";
} if (inputCodint == 120050.6) {
var inputProduct = "ASPIRINA C LIMAO CARTELA 2 COMPRIMIDOS EFERV";
} if (inputCodint == 109830.2) {
var inputProduct = "SONRISAL LIMAO CARTELA 2 COMPRIMIDOS EFERVESCENTES";
} if (inputCodint == 232909.6) {
var inputProduct = "CLOPIN DUO 75MG/100MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 128875.5) {
var inputProduct = "A A S INFANTIL 100MG POTE 120 COMPRIMIDOS";
} if (inputCodint == 101395.4) {
var inputProduct = "SOMALGIN CARDIO 325MG CAIXA 32 COMPRIMIDOS";
} if (inputCodint == 216143.0) {
var inputProduct = "DORIL ENXAQUECA CAIXA 18 COMPRIMIDOS";
} if (inputCodint == 226516.8) {
var inputProduct = "SOMALGIN CARDIO 100MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 194011.7) {
var inputProduct = "DORIL CAIXA 20 COMPRIMIDOS";
} if (inputCodint == 129640.5) {
var inputProduct = "SOMALGIN CARDIO 200MG CAIXA 32 COMPRIMIDOS";
} if (inputCodint == 228116.8) {
var inputProduct = "SOMALGIN CARDIO 81MG CAIXA 60 COMPRIMIDOS";
} if (inputCodint == 232717.0) {
var inputProduct = "DORIL ENXAQUECA CAIXA 8 COMPRIMIDOS";
} if (inputCodint == 211519.4) {
var inputProduct = "ASPIRINA 500MG CAIXA 20 COMPRIMIDOS";
} if (inputCodint == 111180.2) {
var inputProduct = "A A S INFANTIL 100MG CAIXA 30 COMPRIMIDOS";
} if (inputCodint == 107497.6) {
var inputProduct = "CAFIASPIRINA CARTELA 4 COMPRIMIDOS";
} if (inputCodint == 204014.5) {
var inputProduct = "CITONEURIN 5000 3 AMPOLAS 1ML+ 3 AMPOLAS 1ML";
} if (inputCodint == 218779.6) {
var inputProduct = "COGMAX CAIXA 60 CAPSULAS";
} if (inputCodint == 126002.3) {
var inputProduct = "ANDROCUR 50MG CAIXA 20 COMPRIMIDOS";
} if (inputCodint == 164815.9) {
var inputProduct = "AVAMYS 27,5MCG SPRAY FRASCO 120 DOSES";
} if (inputCodint == 225552.5) {
var inputProduct = "ROUPA INTIMA TENA PANTS DERMACARE G/XG C/16";
} if (inputCodint == 236847.4) {
var inputProduct = "FRALDA COTIDIAN BEM ESTAR ADULTO G C/7";
} if (inputCodint == 234033.2) {
var inputProduct = "ABSORVENTE DESCARTAVEL TENA MEN L10P9";
} if (inputCodint == 236849.0) {
var inputProduct = "FRALDA COTIDIAN BEM ESTAR ADULTO M C/20";
} if (inputCodint == 224323.3) {
var inputProduct = "FRALDA COTIDIAN PLUS ADULTO XG C/7";
} if (inputCodint == 217802.1) {
var inputProduct = "FRALDA COTIDIAN CLASICA ADULTO G C/8";
} if (inputCodint == 232967.8) {
var inputProduct = "FRALDA TENA DERMACARE M C/8";
} if (inputCodint == 226643.5) {
var inputProduct = "FRALDA COTIDIAN CLASSICA PACOTE M C/20";
} if (inputCodint == 232968.6) {
var inputProduct = "FRALDA TENA DERMACARE M C/16";
} if (inputCodint == 235492.9) {
var inputProduct = "FRALDA TENA PANTS DERMACARE G/XG C/8";
} if (inputCodint == 235491.0) {
var inputProduct = "FRALDA TENA PANTS DERMACARE P/M C/8";
} if (inputCodint == 236119.2) {
var inputProduct = "ROUPA INTIMA TENA PANTS MEN ADULTO G/EG C/16";
} if (inputCodint == 233123.3) {
var inputProduct = "FRALDA TENA DERMACARE G C/";
} if (inputCodint == 235738.81) {
var inputProduct = "ABSORVENTE DESCARTAVEL TENA LADY DISCREET NOR C/16";
} if (inputCodint == 236047.2) {
var inputProduct = "ROUPA INTIMA TENA PANTS MEN ADULTO P/M C/16";
} if (inputCodint == 223569.8) {
var inputProduct = "ROUPA INTIMA BIGFRAL MOVIMENT UNISSEX G/XG C/16";
} if (inputCodint == 229680.2) {
var inputProduct = "ROUPA INTIMA TENA PANTS CONFORT ADULTO P/M C/24";
} if (inputCodint == 236039.2) {
var inputProduct = "ROUPA INTIMA TENA PANTS DISCREET PRETA G/EG C/16";
} if (inputCodint == 217020.6) {
var inputProduct = "ABSORVENTE DESCARTAVEL TENA MEN C/10";
} if (inputCodint == 236048.0) {
var inputProduct = "ABSORVENTE DESCARTAVEL TENA LADY DISCREET NOR C/8";
} if (inputCodint == 231114.4) {
var inputProduct = "FRALDA BIGFRAL REGULAR PLUS ADULTO G C/7";
} if (inputCodint == 232822.9) {
var inputProduct = "FRALDA BIGFRAL REGULAR PLUS ADULTO M C/8";
} if (inputCodint == 236042.1) {
var inputProduct = "ROUPA INTIMA TENA PANTS DISCREET NUDE G/XG C/16";
} if (inputCodint == 232965.1) {
var inputProduct = "FRALDA TENA DERMACARE EG C/7";
} if (inputCodint == 231655.1) {
var inputProduct = "ROUPA INTIMA BIGFRAL MOVIMENT UNISSEX P/M C/7";
} if (inputCodint == 232969.4) {
var inputProduct = "FRALDA TENA DERMACARE G C/16";
} if (inputCodint == 214926.3) {
var inputProduct = "FRALDA TENA CONFORT ADULTO XG C/7";
} if (inputCodint == 144591.7) {
var inputProduct = "FRALDA TENA CONFORT ADULTO P C/9";
} if (inputCodint == 223567.1) {
var inputProduct = "ROUPA INTIMA BIGFRAL MOVIMENT UNISSEX P/M C/16";
} if (inputCodint == 229678.1) {
var inputProduct = "ROUPA INTIMA TENA PANTS CONFORT ADULTO G/XG C/24";
} if (inputCodint == 236041.3) {
var inputProduct = "ROUPA INTIMA TENA PANTS DISCREET PRETA P/M C/16";
} if (inputCodint == 236046.4) {
var inputProduct = "ROUPA INTIMA TENA PANTS DISCREET NUDE P/M C/16";
} if (inputCodint == 219447.8) {
var inputProduct = "ROUPA INTIMA TENA PANTS CONFORT ADULTO G/XG C/8";
} if (inputCodint == 219445.1) {
var inputProduct = "ROUPA INTIMA TENA PANTS CONFORT ADULTO P/M C/8";
} if (inputCodint == 228368.1) {
var inputProduct = "FRALDA TENA SLIP NOTURNA M C/7";
} if (inputCodint == 144590.9) {
var inputProduct = "FRALDA TENA CONFORT ADULTO M C/8";
} if (inputCodint == 231534.8) {
var inputProduct = "ABSORVENTE DESCARTAVEL BIGFRAL REGULAR PLUS C/20";
} if (inputCodint == 144593.3) {
var inputProduct = "FRALDA TENA CONFORT ADULTO G C/8";
} if (inputCodint == 214076.0) {
var inputProduct = "FRALDA BIGFRAL DERMA PLUS NOTURNA ADULTO M C/8";
} if (inputCodint == 232970.7) {
var inputProduct = "FRALDA TENA SLIP NOTURNA M C/16";
} if (inputCodint == 172850.3) {
var inputProduct = "FRALDA BIGFRAL DERMA PLUS ADULTO M C/8";
} if (inputCodint == 220196.5) {
var inputProduct = "ROUPA INTIMA BIGFRAL MOVIMENT UNISSEX G/XG C/7";
} if (inputCodint == 228370.2) {
var inputProduct = "FRALDA TENA SLIP NOTURNA G C/7";
} if (inputCodint == 217016.9) {
var inputProduct = "ABSORVENTE DESCARTAVEL TENA LADY MAXI NIGHT C/6";
} if (inputCodint == 216867.5) {
var inputProduct = "FRALDA TENA CONFORT ADULTO XG C/18";
} if (inputCodint == 231758.9) {
var inputProduct = "ROUPA INTIMA TENA PANTS NOTURNA ADULTO P/M C/16";
} if (inputCodint == 114998.2) {
var inputProduct = "FRALDA BIGFRAL DERMA PLUS ADULTO G C/7";
} if (inputCodint == 214376.9) {
var inputProduct = "FRALDA BIGFRAL DERMA PLUS NOTURNA ADULTO G C/7";
} if (inputCodint == 214568.4) {
var inputProduct = "ROUPA INTIMA PLENITUD PROTECT PLUS G/XG C/8";
} if (inputCodint == 216592.5) {
var inputProduct = "FRALDA BIGFRAL DERMA PLUS ADULTO M C/18";
} if (inputCodint == 225954.2) {
var inputProduct = "ROUPA INTIMA PLENITUD ACTIVE MULHER G/XG C/16";
} if (inputCodint == 227136.5) {
var inputProduct = "ROUPA INTIMA BIGFRAL PANTS PREMIUM P/M C/16";
} if (inputCodint == 214567.6) {
var inputProduct = "ROUPA INTIMA PLENITUD PROTECT PLUS P/M C/8";
} if (inputCodint == 225955.0) {
var inputProduct = "ROUPA INTIMA PLENITUD ACTIVE MULHER P/M C/16";
} if (inputCodint == 233772.3) {
var inputProduct = "ABSORVENTE DESCARTAVEL TENA LADY EXTRA C/20";
} if (inputCodint == 217690.7) {
var inputProduct = "ABSORVENTE DESCARTAVEL TENA LADY EXTRA C/8";
} if (inputCodint == 227138.1) {
var inputProduct = "ROUPA INTIMA BIGFRAL PANTS PREMIUM G/XG C/16";
} if (inputCodint == 144577.3) {
var inputProduct = "ABSORVENTE DESCARTAVEL BIOFRAL MAXI GERIATRIC C/20";
} if (inputCodint == 231856.5) {
var inputProduct = "ABSORVENTE DESCARTAVEL GERIAMAX C/20";
} if (inputCodint == 232971.5) {
var inputProduct = "FRALDA TENA SLIP NOTURNA G C/16";
} if (inputCodint == 227549.7) {
var inputProduct = "ROUPA INTIMA PLENITUD PROTECT PLUS P/M C/16";
} if (inputCodint == 217945.4) {
var inputProduct = "ABSORVENTE DESCARTAVEL TENA LADY SUPER C/8";
} if (inputCodint == 228364.9) {
var inputProduct = "ROUPA INTIMA TENA PANTS DISCREET PRETA P/M C/8";
} if (inputCodint == 227758.0) {
var inputProduct = "ABSORVENTE DESCARTAVEL TENA LADY MINI PLUS C/8";
} if (inputCodint == 232934.4) {
var inputProduct = "FRALDA COTIDIAN CLASSICA PACOTE XG C/7";
} if (inputCodint == 228361.4) {
var inputProduct = "ROUPA INTIMA TENA PANTS NOTURNA ADULTO G/XG C/7";
} if (inputCodint == 228762.3) {
var inputProduct = "ROUPA INTIMA TENA PANTS NOTURNA ADULTO P/M C/7";
} if (inputCodint == 228360.6) {
var inputProduct = "ROUPA INTIMA TENA PANTS MEN ADULTO G/EG C/8";
} if (inputCodint == 234024.4) {
var inputProduct = "ROUPA INTIMA TENA PANTS DISCREET PRETA G/EG L8P7";
} if (inputCodint == 228359.3) {
var inputProduct = "ROUPA INTIMA TENA PANTS MEN ADULTO P/M C/8";
} if (inputCodint == 226832.6) {
var inputProduct = "ABSORVENTE DESCARTAVEL BIOFRAL MAXI GERIATR L20P17";
} if (inputCodint == 228367.3) {
var inputProduct = "ROUPA INTIMA TENA PANTS DISCREET PRETA G/XG C/8";
} if (inputCodint == 228363.0) {
var inputProduct = "ROUPA INTIMA TENA PANTS DISCREET NUDE G/XG C/8";
} if (inputCodint == 141963.9) {
var inputProduct = "FRALDA BIGFRAL DERMA PLUS ADULTO XG C/7";
} if (inputCodint == 216468.2) {
var inputProduct = "FRALDA TENA CONFORT ADULTO G C/20";
} if (inputCodint == 231759.7) {
var inputProduct = "ROUPA INTIMA TENA PANTS NOTURNA ADULTO G/XG C/16";
} if (inputCodint == 225553.3) {
var inputProduct = "ROUPA INTIMA TENA PANTS DERMACARE P/M C/16";
} if (inputCodint == 225552.5) {
var inputProduct = "ROUPA INTIMA TENA PANTS DERMACARE G/XG C/16";
} if (inputCodint == 216469.0) {
var inputProduct = "FRALDA TENA CONFORT ADULTO M C/26";
} if (inputCodint == 218126.3) {
var inputProduct = "FRALDA TENA CONFORT ADULTO P C/30";
} if (inputCodint == 216591.7) {
var inputProduct = "FRALDA BIGFRAL DERMA PLUS ADULTO G C/16";
} if (inputCodint == 227548.9) {
var inputProduct = "ROUPA INTIMA PLENITUD PROTECT PLUS G/XG C/16";
} if (inputCodint == 121977.6) {
var inputProduct = "PASTA D AGUA ADV FRASCO 135G";
} if (inputCodint == 216241.7) {
var inputProduct = "CALAMED PASTA D AGUA FRASCO 100G";
} if (inputCodint == 182009.4) {
var inputProduct = "ESPERSON N POMADA BISNAGA 20G";
} if (inputCodint == 1) {
var inputProduct = "";


} if (btn) {
window.open("https://api.whatsapp.com/send?phone=551240091635&text=Nome:%20" + inputName + "%0ATelefone:%20" + inputTel + "%0ACPF:%20" + inputCpf + "%0AEndere%C3%A7o:%20" + inputEnd + "%0AForma%20de%20Pagamento:%20" + inputPayment + "%0AChapa:%20" + inputChapa + "%0AValor%20com%20a%20taxa%20de%20entrega:%20" + inputTotal + "%0A%0AC%C3%B3d.%C2%A0: " + inputCodint + "%C2%A0%0AProduto: " + inputProduct + "	")
}}
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

var handleCep = (event) => {
    var input = event.target
    input.value = cepMask(input.value)
}

const cepMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d)(\d{3})$/,"$1-$2")
    return value
}

document.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {
  
      var btn = document.querySelector("#btn");
    
    btn.click();
  
  }
});

    function limpa_formulário_cep() {
            document.getElementById('rua').value=("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            document.getElementById('rua').value=(conteudo.logradouro);
        }
        else {
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }

    function pesquisacep(valor) {

        var cep = valor.replace(/\D/g, '');
        if (cep != "") {
            var validacep = /^[0-9]{8}$/;
            if(validacep.test(cep)) {
                document.getElementById('rua').value="...";
var script = document.createElement('script');
script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
document.body.appendChild(script);
} else {
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        }
        else {
limpa_formulário_cep();
        }
    };
