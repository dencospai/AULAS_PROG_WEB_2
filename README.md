# Programação para Internet II

Aula 4: **Implementação de Códigos de Status HTTP (Status Codes) em uma API REST com Express.js**

Nesta aula, daremos continuidade ao desenvolvimento da API REST de gerenciamento de usuários feito na aula 03. A API já permite realizar operações de cadastro, consulta, atualização e exclusão de usuários utilizando os métodos HTTP GET, POST, PUT, PATCH e DELETE.
Nesta etapa, aprenderemos a implementar os códigos de status HTTP (Status Codes), responsáveis por informar ao cliente o resultado de cada requisição realizada ao servidor.
Os códigos de status são importantes porque permitem identificar se uma operação foi realizada com sucesso, se houve algum erro na requisição ou se o recurso solicitado não foi encontrado.

### Implementação no Express.js
Para definir o código de status de uma resposta, utilizamos o método res.status().
Exemplo:
```bash
return res.status(201).json(usuario)
```
Nesse exemplo, o servidor retorna o código 201 (Created), informando que um novo usuário foi cadastrado com sucesso. Além disso, os dados do usuário são enviados ao cliente no formato JSON.



