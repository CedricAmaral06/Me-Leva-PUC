function salvarDados() {
    // Obter referências aos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var genero = document.querySelector('input[name="genero"]:checked').value;
    var dataNascimento = document.getElementById("Data_Nascimento").value;
    var cidade = document.getElementById("Cidade").value;
    var estado = document.getElementById("Estado").value;
    var endereco = document.getElementById("Endereço").value;
  
    // Criar um objeto JSON com as informações
    var dadosUsuario = {
      nome: nome,
      email: email,
      telefone: telefone,
      genero: genero,
      dataNascimento: dataNascimento,
      cidade: cidade,
      estado: estado,
      endereco: endereco,
    };
  
    // Converter o objeto JSON para uma string
    var dadosJSON = JSON.stringify(dadosUsuario, null, 2);
  
    // Criar um objeto Blob com os dados JSON
    var blob = new Blob([dadosJSON], { type: "application/json" });
  
    // Criar um link de download
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "dados_usuario.json";
  
    // Adicionar o link ao DOM e clicar automaticamente nele para iniciar o download
    document.body.appendChild(link);
    link.click();
  
    // Remover o link do DOM
    document.body.removeChild(link);
  }