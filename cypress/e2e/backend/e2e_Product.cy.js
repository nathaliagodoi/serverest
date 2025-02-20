import { faker } from '@faker-js/faker';
import { generateUserPayloadCreate } from '../../factories/createUserPayload';
import { generateProductPayloadCreate } from '../../factories/createProductPayload';

describe('Testes E2E de Produto', () => {
    const apiUrl = `${Cypress.env("serverest").apiUrl}`;
    const endPoint = "/produtos";

    //Especificações do produto
    const nomeProduct = faker.string.alpha(10);
    const precoProduct = faker.string.numeric(2);
    const descricaoProduct = faker.string.alpha(20);
    const quantidadeProdut = faker.string.numeric(2);
    //Dados do usuário
    const nomeUser = faker.person.firstName();
    const emailUser = faker.internet.email();
    const passUser = faker.internet.password();
    let admin = "true";
    
    it('Criar produto com sucesso', () => {
        cy.createUserGetToken(nomeUser, emailUser, passUser, admin).then(({token}) => {
            
            let payload = generateProductPayloadCreate(nomeProduct, precoProduct, descricaoProduct, quantidadeProdut);
            
            cy.createProduct(token, apiUrl, endPoint, payload)
            .then((response) => {
                
                expect(response.status).to.eq(201);
                expect(response.body.message).to.eq("Cadastro realizado com sucesso");
                expect(response.body._id).to.be.a('string');
                expect(response.body._id).to.have.length(16);                
            })
        })
    });

    it('Criar produto sem nome', () => {
        cy.createUserGetToken(nomeUser, emailUser, passUser, admin).then(({token}) => {
            let payload = generateProductPayloadCreate('', precoProduct, descricaoProduct, quantidadeProdut);

            cy.createProduct(token, apiUrl, endPoint, payload)
            .then((response) => {
                expect(response.status).to.eq(400);
                expect(response.body.nome).to.eq("nome não pode ficar em branco");
            })
        })
    });

    it('Deletar produto com sucesso', () => {
        cy.createUserGetToken(nomeUser, emailUser, passUser, admin).then(({token}) => {
            cy.getProduct(nomeProduct).then(({idProduct}) => {
                cy.deleteProduct(token, idProduct)
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.message).to.eq("Registro excluído com sucesso");
                })
            })
        })
    });

    it('Deletar produto inexistente', () => {
        cy.createUserGetToken(nomeUser, emailUser, passUser, admin).then(({token}) => {
            cy.deleteProduct(token, "1234567890123456")
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq("Nenhum registro excluído");
            })
        })
    });
    
    it('Deletar produto sem token', () => {
        cy.deleteProduct("1234567890123456")
        .then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.message).to.eq("Token de acesso ausente, inválido, expirado ou usuário do token não existe mais");
        })
    });
    
});



