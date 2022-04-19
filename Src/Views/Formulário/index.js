



   function cadastro()
   {
    let nome1 = document.querySelector("#nome1").value
    let nome2 = document.querySelector("#nome2").value
    
    let CPF = document.querySelector("#cpf")
    let RG = document.querySelector("#rg")
    let cpf = Number(CPF.VALUE)
    let rg = Number(RG.VALUE)

    
    let cidade = document.querySelector("#cidade").value
    let endereco = document.querySelector("#endereco").value

    let estado = document.querySelector("#estado").value
    
    let CEP = document.getElementById("cep")
    let cep = Number(CEP.VALUE)

    

    let sexo = document.querySelector("#sexo").value
    let estadocivil = document.querySelector("#estadocivil").value
    
    let email = document.querySelector("#email").value
    
    let telefone = document.getElementById("telefone")
    let celular = document.getElementById("celular")
  
    let TELEFONE = Number(telefone.VALUE)
    let CELULAR = Number(celular.VALUE)


    if(!(nome1.length > " " && nome2.length > " "))
    {
        alert ("PREENCHA OS CAMPOS")
    }
        
    else if(cpf < 0 && rg < 0 )
         {
            alert("PRENCHA OS CAMPOS")
        }
      
     else if(!(cidade.length > " " && endereco.length > " "))
         {
            alert ("PREENCHA OS CAMPOS")
        }
 
     else if(!(estado.length > " " ))
    {
        alert ("PREENCHA OS CAMPOS")
    }

    else if(cep < 0)
    {
        alert("PREENCHA OS DADOS")
    }
    
    else if(!(sexo.length > " " && estadocivil.length > " " && email.length > " "))
    {
       alert ("PREENCHA OS CAMPOS")
   }


   else if(!(TELEFONE.length > " " && CELULAR.length > " "))
   {
      alert ("PREENCHA OS CAMPOS")
  }

    else{
            alert("CADASTRO REALIZADO COM SUCESSO")
        }

}
   

