import { zoomIn, zoomOut } from './zoom';
import { ViewBox } from './ViewBox';

fdescribe('zoom', () => {
    const vb: ViewBox = {
        x: 0,
        y: 0,
        width: 10,
        height: 6,
    };

    it('zoomIn: width & height reduces', () => {
        const vb2 = zoomIn(vb);

        expect(vb2.width).toBeLessThan(vb.width);
        expect(vb2.height).toBeLessThan(vb.height);
    });

    it('zoomOut: width & height increases', () => {
        const vb2 = zoomOut(vb);

        expect(vb2.width).toBeGreaterThan(vb.width);
        expect(vb2.height).toBeGreaterThan(vb.height);
    });

    it('zoomIn then zoomOut: same ViewBox expected', () => {
        const vb2 = zoomIn(vb);
        const vb3 = zoomOut(vb2);

        expect(vb3.width).toEqual(vb.width);
        expect(vb3.height).toEqual(vb.height);
    });

    it('zoomOut then zoomIn: same ViewBox expected', () => {
        const vb2 = zoomOut(vb);
        const vb3 = zoomIn(vb2);

        expect(vb3.width).toEqual(vb.width);
        expect(vb3.height).toEqual(vb.height);
    });

    it('zoomIn: center should be pivot', () => {
        const vb2 = zoomIn(vb);

        const centerX = (vb: ViewBox) => vb.x + vb.width * 0.5;
        const centerY = (vb: ViewBox) => vb.y + vb.height * 0.5;

        expect(centerX(vb2)).toEqual(centerX(vb));
        expect(centerY(vb2)).toEqual(centerY(vb));
    });
});
