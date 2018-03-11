import colors from './colors';
import colorsMock from '../mocks/colorsMock';
import { ColorsActionsEnum } from '../actions/colors';

describe('Colors Reducer', () => {
    it('should handle REQUEST_COLORS actions', () => {
        const res = colors(undefined, {
            type: ColorsActionsEnum.REQUEST_COLORS,
        });
        expect(res.isFetching).toBe(true);
    });

    it('should handle RECEIVE_COLORS actions', () => {
        const res = colors(undefined, {
            type: ColorsActionsEnum.RECEIVE_COLORS,
            colors: colorsMock,
        });
        expect(res.colors[2]).toBe(colorsMock[2]);
    });

    it('should handle SELECT_COLOR actions', () => {
        const res = colors(undefined, {
            type: ColorsActionsEnum.SELECT_COLOR,
            color: colorsMock[0],
        });
        expect(res.selectedColor).toBe(colorsMock[0]);
    });

    it('should handle DID_ERROR actions', () => {
        const res = colors(undefined, {
            type: ColorsActionsEnum.DID_ERROR,
            error: {message: 'testError'},
        });
        expect(res.errorMessage).toBe('testError');
    });
});