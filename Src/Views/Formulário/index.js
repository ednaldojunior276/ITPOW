



   function cadastro()
   {
    let nome1 = document.querySelector("#nome1").value
    let nome2 = document.querySelector("#nome2").value
    let endereco = document.querySelector("#endereco").value
    let cidade = document.querySelector("#cidade").value
    let estado = document.querySelector("#estado").value
    let sexo = document.querySelector("#sexo").value
    let estadocivil = document.querySelector("#estadocivil").value
    let email = document.querySelector("#email").value

    let cpf = document.querySelector("#cpf")
    let rg = document.querySelector("#rg")
    let cep = document.querySelector("#cep")
    let telefone = document.querySelector("#telefone")
    let celular = document.querySelector("#celular")
 
    let CPF = Number(cpf.value)
    let RG = Number(rg.value)
    let CEP = Number(cep.value)
    let TELEFONE = Number(telefone.value)
    let CELULAR = Number(celular.value)

    if(!(nome1 > " " && nome2 > " "))
    {
        alert("PREENCHA OS CAMPOS")
    }
    
    else if(!(endereco > " " && cidade > " "))
    {
        alert("PREENCHA OS CAMPOS")
    }

    else if(!(estado > " " && sexo > " "))
    {
        alert("PREENCHA OS CAMPOS")
    }

    else if(!(estadocivil> " " && email > " "))
    {
        alert("PREENCHA OS CAMPOS")
    }

    else if(CPF == " " || RG == " ")
    {
        alert("PREENCHA OS CAMPOS")
    }

    else if(CEP == " " || TELEFONE == " ")
    {
        alert("PREENCHA OS CAMPOS")
    }

    else if(CELULAR == " " )
    {
        alert("PREENCHA OS CAMPOS")
    }

    else
    {
        alert("CADASTRO REALIZADO COM SUCESSO")
    }
}
   

