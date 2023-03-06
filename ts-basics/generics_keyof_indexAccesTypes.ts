const menu = {
    analytics: {
        bussines: 'For bussines',
        data: 'Big Data',
    },
    design: {
        graphical: 'Графический',
    },
};

function getMenu<T, L1 extends keyof T, L2 extends keyof T[L1]>(
    obj:T,
    l1: L1,
    l2: L2,
    ) {
    return obj[l1][l2];
}

const res1 = getMenu(menu, 'design', 'graphical');
const res2 = getMenu(menu, 'analytics', 'bussines') // | 'data'