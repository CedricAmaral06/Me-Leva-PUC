function salvarDados() {
    // Obter referências aos campos do formulário
    var matricula = document.getElementById("matricula").value;
    var senha = document.getElementById("senha").value;
  
    // Criar um objeto JSON com as informações
    var dadosLogin = {
      Matricula: matricula,
      Senha: senha,
    };
  
    // Converter o objeto JSON para uma string
    var dadosJSON = JSON.stringify(dadosLogin, null, 2);
  
    // Criar um objeto Blob com os dados JSON
    var blob = new Blob([dadosJSON], { type: "application/json" });
  
    // Criar um link de download
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "Login.json";
  
    // Adicionar o link ao DOM e clicar automaticamente nele para iniciar o download
    document.body.appendChild(link);
    link.click();
  
    // Remover o link do DOM
    document.body.removeChild(link);
  }