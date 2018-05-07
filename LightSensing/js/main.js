var light;
cpf.setPinMode('["resetPin"], ["setPinMode", "analog", 0, "INPUT"]');
light = cpf.get("a0");
document.getElementById("lightA").innerHTML = light;