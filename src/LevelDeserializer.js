import Level from './Level';
import Entity from './Entity';
import {FORMS} from './Renderer';

let levelIndex = 0;

export default {
    /**
     * return current level
     */
    level: () => {
        return parse(levels[levelIndex]);
    },
    next: () => {
        if(levelIndex < levels.length - 1) {
            levelIndex++;
        } else {
            window.alert('win'); // TODO finish me
        }
    },
    previous: () => {
        if(levelIndex > 0) {
            levelIndex--;
        }
    }
};

const parse = (level) => {

    var entitiesStr = level[1].split('/');
    var entities = entitiesStr.map((e)=>{
        var str = e.split(',');
        switch(str[0]){
            case 'J':
                return Entity(+str[1], +str[2], 2, 2, 0, 0, 0, 0, FORMS.CIRCLE, 'red', true, true, false, false);
            case 'M':
                return Entity(+str[1], +str[2], +str[3], +str[4], 0, 0, 0, 0, FORMS.RECT, 'grey', false, false, true, false);
            case 'T':
                return Entity(+str[1], +str[2], +str[3], +str[4], 0, 0, 0, -0.5, FORMS.RECT, 'blue', false, false, false, false);
            case 'G':
                return Entity(+str[1], +str[2], 3, 5, 0, 0, 0, 0, FORMS.RECT, 'violet', false, false, false, true);
            case 'F':
                return Entity(+str[1], +str[2], +str[3], +str[4], 0, 0, 0, 0, FORMS.TRIANGLE_DOWN, 'orange', false, false, true, false);
        }

    });

    return Level(entities, level[0]);
};

/**
 * first number : gravity
 * J,x,y : Joueur => new Entity(x, y, 2, 2, 0, 0, 0, 0, 'circle', 'red', true, true)
 * M,x,y,w,h : Mur => new Entity(x, y, w, h, 0, 0, 0, 0, 'square', 'grey', false, false)
 * T,x,y,w,h : Trampoline => new Entity(x, y, w, h, 0, 0, 0, -0.2, 'square', 'bleu', false, false)
 * G,x,y : Gate => new Entity(x, y, 3, 5, 0, 0, 0, -0.2, 'square', 'violet', false, false, false, true)
 */
const levels = [
    [1,'J,10,10/T,0,50,80,2/M,50,10,2,40/G,70,45/F,10,0,20,5/F,30,0,10,8/F,40,0,5,3/F,45,0,10,8/F,55,0,10,5'],
    [1,'J,50,10/T,0,90,95,2/G,90,5/F,55,0,10,10']
];
