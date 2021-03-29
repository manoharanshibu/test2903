import { render, screen } from '@testing-library/react';
import App from './App';
import { makeSentence } from './test1';

describe('makeSentence method', () => {
    it('returns correct sentences', function () {
        let sentence = 'penpineapplepenapple';
        let dict = ['apple', 'pen', 'applepen', 'pine', 'pineapple'];

        expect(makeSentence(sentence, dict)).toEqual([
          'pen pine applepen apple',
          'pen pineapple pen apple',
          'pen pine apple pen apple'
        ]);
    });

});
