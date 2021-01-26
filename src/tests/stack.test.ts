import request from 'supertest';
import {app} from "../app";
import faker from 'faker'
import {sequelize} from "../sequelize";

const user = {
    email: faker.internet.email(),
    password: faker.name.findName() + faker.name.lastName()
}
let token: string
let questionId: number
beforeAll(async () => {
    await sequelize.sync({logging: false})
})
describe('Describe User Authentication', () => {

    test('it should register user', async () => {
        return request(app).post('/auth/register').send(user).expect(res => {
            token = res.body.data.token
        }).expect(201)
    })

    test('it should login user in', async () => {
        return request(app).post('/auth/login').send(user).expect(res => {
            token = res.body.data.token
        }).expect(200)
    })

})

describe('Describe Question Activities', () => {
    test('it should create question', async () => {
        return request(app).post('/question').auth(token, {type: 'bearer'}).send({question: ' '}).expect(201)
    })
    test('it should get all questions', async () => {
        return request(app).get('/question').expect(200).expect(res => {
            questionId = res.body.data[0].id
        })
    })

    it('it should get a single question', function () {
        return request(app).get('/question/' + questionId).expect(200)
    });
})


describe('Describe Answer Activities', () => {
    test('it should answer a question', async () => {
        return request(app).post('/answer/' + questionId).auth(token, {type: 'bearer'}).send({
            answer: ''
        }).expect(201)
    })

    // test('it should mark an answer right', async () => {
    //     return request(app).put('/answer/' + questionId).auth(token, {type: 'bearer'}).expect(200)
    // })
})

describe('Describe comment Activities', ()=>{
    test('make a comment to a question', async ()=>{

    })

    test('make a comment to an answer', async ()=>{

    })
})
