import autoSuggest from './autoSuggest';
import { AutoSuggestActionsEnum } from '../actions/autoSuggest';
import colorsMock from '../mocks/colorsMock';

describe('AutoSuggest Reducer', () => {
    it('should handle CHANGE_TEXT actions', () => {
        const res = autoSuggest(undefined, {
            type: AutoSuggestActionsEnum.CHANGE_TEXT,
            fieldValue: 'test'
        });
        expect(res.inputValue).toBe('test');
    });

    it('should handle SET_HINTED_COLOR actions', () => {
        let res = autoSuggest(undefined, {
            type: AutoSuggestActionsEnum.SET_HINTED_COLOR,
            hintedColor: colorsMock[0],
        });
        expect(res.hintedColor).toBe(colorsMock[0]);
        res = autoSuggest(undefined, {
            type: AutoSuggestActionsEnum.SET_HINTED_COLOR,
            hintedColor: colorsMock[1],
        });
        expect(res.hintedColor).toBe(colorsMock[1]);
    });
});
