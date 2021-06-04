# API REST Desafio Compasso UOL 

## Instalação
Pegue o arquivo `.env.example` como exemplo para criar o .env, e adicione os valores das váriaveis.

Após criar a várivel de ambiente, instale as dependências.

#### Executar migrations
Rode o script **npm run migration:run** para criar as tabelas no banco de dados.
OBS: Lembrando que deve criar um banco de dados, com o mesmo nome que adicionou no `.env`.


### Executar tests
Rode o script **npm run test** para iniciar os tests.
OBS: Lembrando que deve criar um banco de dados, com o mesmo nome que adicionou no `.env`.


#### Executando aplicação
Rode o script **npm run dev** para iniciar a aplicação. A mesma será iniciada na porta que foi especificada no arquivo .env.



## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `PATCH` | Aplica modificações parciais a um recurso. |
| `DELETE` | Remove um registro do sistema. |


## Respostas
| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `201` | Recurso criado com sucesso (success).|
| `204` | Sem (success).|
| `404` | Registro pesquisado não encontrado (Not found).|
| `422` | Dados informados estão fora do escopo definido para o campo.|
| `500` | Erro no servidor|



## Endpoints REST
Abaixo será listado as rotas para acesso da API.

### City

  **POST /citys**

    POST http://localhost:3000/citys
    Content-Type: application/json

    {
      "name":"Viçosa",
      "state":"MG"
    }


  **Response**

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 47
    ETag: W/"2f-Q8r3WRCwx5bIXM2bvPv6XooGjoo"
    Date: Tue, 01 Jun 2021 16:41:26 GMT
    Connection: close

    {
      "uuid": "33da4a5b-501d-4644-88a1-b022632bf98d"
    }


--------------------------------------------------------------------------------
**GET /city/name/:name**

    GET http://localhost:3000/citys/name/Viçosa

  **Response**

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 78
    ETag: W/"4e-4zHy1oQ5gZ/Oihea/Sgrh+5gzeg"
    Date: Tue, 01 Jun 2021 16:55:53 GMT
    Connection: close

    {
      "uuid": "33da4a5b-501d-4644-88a1-b022632bf98d",
      "name": "Viçosa",
      "state": "MG"
    }
--------------------------------------------------------------------------------

**GET /citys/state/:state**

    GET http://localhost:3000/citys/state/MG

  **Response**

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 78
    ETag: W/"4e-4zHy1oQ5gZ/Oihea/Sgrh+5gzeg"
    Date: Tue, 01 Jun 2021 16:55:53 GMT
    Connection: close

    [
      {
        "uuid": "33da4a5b-501d-4644-88a1-b022632bf98d",
        "name": "Viçosa",
        "state": "MG"
      }
    ]



--------------------------------------------------------------------------------

### Customers

  **POST /customers**

    POST http://localhost:3000/customers
    Content-Type: application/json

    {
      "name":"Matheus Moreira Militão",
      "gender":"M",
      "birthDate":"1999-07-21",
      "cityId":"7032068b-e084-43c4-aeaf-3255688628d5"
    }


  **Response**

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 47
    ETag: W/"2f-p+pdv62WR0ECfmUUjaQ7sUZNyTE"
    Date: Tue, 01 Jun 2021 17:00:45 GMT
    Connection: close

    {
      "uuid": "e44036f3-7683-4a1c-9ecf-a3f16ca651fa"
    }


--------------------------------------------------------------------------------
**PATCH /customers/:uuid**

    PATCH   http://localhost:3000/customers/91044d5a-e5b2-4c33-b922-ae6353144671
    Content-Type: application/json

    {
      "name":"Matheus M. Militão"
    }


  **Response**

    HTTP/1.1 204 No Content
    X-Powered-By: Express
    Date: Tue, 01 Jun 2021 17:02:02 GMT
    Connection: close
--------------------------------------------------------------------------------

**GET /customers/name/:name**

    GET http://localhost:3000/customers/name/Matheus%20M.%20Milit%C3%A3o

  **Response**

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 258
    ETag: W/"102-lRv7sKNDDFDTlKtVqJNVDPggft0"
    Date: Tue, 01 Jun 2021 17:03:30 GMT
    Connection: close

    [
      {
        "uuid": "e44036f3-7683-4a1c-9ecf-a3f16ca651fa",
        "name": "Matheus M. Militão",
        "birthDate": "1999-07-21T03:00:00.000Z",
        "cityId": "33da4a5b-501d-4644-88a1-b022632bf98d"
      }
    ]
--------------------------------------------------------------------------------
**GET /customers/:uuid**

    GET http://localhost:3000/customers/e44036f3-7683-4a1c-9ecf-a3f16ca651fa

  **Response**

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 258
    ETag: W/"102-lRv7sKNDDFDTlKtVqJNVDPggft0"
    Date: Tue, 01 Jun 2021 17:04:51 GMT
    Connection: close

    {
      "uuid": "e44036f3-7683-4a1c-9ecf-a3f16ca651fa",
      "name": "Matheus M. Militão",
      "birthDate": "1999-07-21T03:00:00.000Z",
      "cityId": "33da4a5b-501d-4644-88a1-b022632bf98d"
    }
    
--------------------------------------------------------------------------------
**DELETE /customers/:uuid**

    DELETE  http://localhost:3000/customers/e44036f3-7683-4a1c-9ecf-a3f16ca651fa

  **Response**

    HTTP/1.1 204 No Content
    X-Powered-By: Express
    Date: Tue, 01 Jun 2021 17:05:56 GMT
    Connection: close
