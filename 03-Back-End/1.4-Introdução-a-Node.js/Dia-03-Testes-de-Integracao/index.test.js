const chai = require('chai');
const chaiHttlp = require('chai-http');
const app = require('./app');

const { expect } = chai;

chai.use(chaiHttlp);

describe('Testando a API', function () {
  it('Retorno a codigo correto', async function () {
    const response = await chai.request(app).get('/chocolates/total');

    expect(response.status).to.be.equal(200)
  });
  it('Retorna os chocolates', async function (){
    const response = await chai.request(app).get('/chocolates/total');
    const chocolates = {
      "totalChocolates": 4
    }

    expect(response.body).to.deep.equal(chocolates)
  })
});