// - Criar Usuario
// - Listar Usuario
// - Edição de Usuário
// - Remoção de Usuário


// HTTP
// Metodo HTTP
// URL --> Recurso

//GET- Buscar recurso no back-end
//POST - Criar um recurso no back-end
//PUT - Atualizar um recurso
//PATCH - Atualizar uma informação unica ou espeficica no back-end
//DELETE - Deletar um recurso no back end

// GET /users ==> Buscando usuário do back-end
// POST /users ==> Criar um usuário no back-end

// Stateful - Guardado em memoria local
// Stateless - Salvar em dispositivo externo

// JSON - Javascript Object Notation (Estrutura de dados)

// Cabeçalhos ( Requisição/Resposta) ==> Metadados

// HTTP Status Code

/* "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
 */
import http from 'node:http'

const users = [];

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
        })

        return res.writeHead(201).end()
    }


    return res.writeHead(404).end("Não Encontrado")
})

server.listen(3333)