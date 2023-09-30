import {size} from '..';

describe('geometry functions', () => {
    describe('size', () => {
        it('should create object with width and height when both are provided', () => {
            const s = size(10, 20);
            expect(s.width).toBe(10);
            expect(s.height).toBe(20);
        });
    
        it('should create object with same width and height when only width is provided', () => {
            const s = size(10);
            expect(s.width).toBe(10);
            expect(s.height).toBe(10);
        });
    
        it('styleObj should return correct width and height', () => {
            const s = size(10, 20);
            expect(s.styleObj).toEqual({ width: 10, height: 20 });
        });
    
        it('tuple should return correct width and height as array', () => {
            const s = size(10, 20);
            expect(s.tuple).toEqual([10, 20]);
        });
    
        it('getCenter should return correct center coordinates when x and y are provided', () => {
            const s = size(10, 20);
            expect(s.getCenter(10, 10)).toEqual({ x: 15, y: 20 });
        });
    
        it('getCenter should return correct center coordinates when x and y are not provided', () => {
            const s = size(10, 20);
            expect(s.getCenter()).toEqual({ x: 5, y: 10 });
        });
      });
})
