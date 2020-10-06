import { BbScore } from "../src/score";
import { BbElement } from "../src/element";
import { BbSystem } from "../src/system";

let a: BbScore;
let aa: BbSystem;
let aaa: BbElement;
let aab: BbElement;
let ab: BbSystem;
let aba: BbElement;
let ac: BbSystem;

describe('score', () => {
    beforeEach(() => {
        a = new BbScore();
        aa = new BbSystem(a);
        aaa = new BbElement(aa);
        aab = new BbElement(aa);
        ab = new BbSystem(a);
        aba = new BbElement(ab);
        ac = new BbSystem(a);
    })
    test('type', () => {
        expect(a.type).toBe('score')
    })

    test('spaceSystems', () => {
        aa.bbox.height = 50
        ab.bbox.height = 100
        ac.bbox.height = 150

        a.spaceSystems()
        expect(aa.bbox.y).toBe(0)
        expect(ab.bbox.y).toBe(50)
        expect(ac.bbox.y).toBe(150)
    })
})
