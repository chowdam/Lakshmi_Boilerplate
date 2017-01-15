import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('our first test', () => {

    it('should pass', () => {
        expect(true).to.equals(true);
    });
});

describe('index says hello', () => {
    it('Logs Hello world', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window) {
            const h3 = window.document.getElementsByTagName('h3')[0];
            expect(h3.innerHTML).to.equal('Hello World!');
            done();
            window.close();
        });
    });

});