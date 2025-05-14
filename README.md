# 🚀 Teste de Carga com K6 e Grafana

Este projeto demonstra como realizar testes de carga utilizando o [K6](https://k6.io/) e visualizar os resultados em tempo real com o [Grafana](https://grafana.com/). A infraestrutura é orquestrada com Docker Compose, facilitando a configuração e execução dos testes.

## 🧪 Tecnologias Utilizadas

- [K6](https://k6.io/): Ferramenta de teste de carga moderna e de código aberto.
- [Grafana](https://grafana.com/): Plataforma de visualização e análise de métricas.
- [InfluxDB](https://www.influxdata.com/): Banco de dados de séries temporais utilizado para armazenar os resultados dos testes.
- [Docker Compose](https://docs.docker.com/compose/): Ferramenta para definir e gerenciar ambientes multi-contêiner.

## 📁 Estrutura do Projeto

```

TesteCargaK6/
├── test.js                 # Script de teste K6
├── docker-compose.yml      # Configuração dos serviços Docker
├── .env                    # Variáveis de ambiente
├── grafana/
│   └── provisioning/
│       └── datasource/
│           └── datasource.yml  # Configuração do datasource do Grafana
├── .gitignore
└── .gitattributes

````

## ⚙️ Como Executar

### 1. Pré-requisitos

- [Docker](https://www.docker.com/get-started) instalado na máquina.
- [Docker Compose](https://docs.docker.com/compose/install/) instalado.

### 2. Clonar o Repositório

```bash
git clone https://github.com/thiagodsantana/TesteCargaK6.git
cd TesteCargaK6
````

### 3. Iniciar os Serviços

```bash
docker-compose up -d
```

Este comando iniciará os contêineres do InfluxDB e do Grafana.

### 4. Executar o Teste de Carga

Em outro terminal, execute o script de teste:

```bash
docker run --rm -i grafana/k6 run - <test.js
```

Este comando executa o teste definido no arquivo `test.js` utilizando a imagem oficial do K6.

### 5. Acessar o Grafana

Após iniciar os serviços, o Grafana estará disponível em:

```
http://localhost:3000
```

* **Usuário:** `admin`
* **Senha:** `admin`

Você pode visualizar os resultados dos testes em tempo real através do dashboard configurado.

## 📄 Sobre o Script de Teste (`test.js`)

O arquivo `test.js` contém o script de teste de carga escrito em JavaScript, utilizando a API do K6. Ele define os cenários de teste, incluindo o número de usuários virtuais, a duração do teste e as requisições HTTP a serem realizadas.

## 📝 Personalização

* **Variáveis de Ambiente:** Você pode configurar as variáveis de ambiente no arquivo `.env` para ajustar as configurações do InfluxDB e do Grafana conforme necessário.
* **Dashboard do Grafana:** O dashboard padrão pode ser personalizado para atender às suas necessidades específicas de visualização de métricas.

## 📌 Referências

* [Documentação do K6](https://k6.io/docs/)
* [Documentação do Grafana](https://grafana.com/docs/)
* [Documentação do InfluxDB](https://docs.influxdata.com/influxdb/)

## 🧑‍💻 Autor

* **Thiago Darlei Santana**

  * [GitHub](https://github.com/thiagodsantana)
  * [Website Pessoal](http://www.thiagodarlei.com.br)

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
