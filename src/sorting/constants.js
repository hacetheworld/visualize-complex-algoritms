export const BALLS_NUM = 20;
export const randomBars = () => {
    let data = [];
    for (let i = 0; i < BALLS_NUM; i++) {
        data.push(Math.floor(Math.random() * 50 + 50));
    }
    return data;
}