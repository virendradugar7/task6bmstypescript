import Itheater from './Theater.interface'
export  interface Imovie{
    name:string,
    theater:{
        cinema:string,
        timing:string[],
        price:number[],
        classname:string[],
        id:number[]
        }[];
};
export default Imovie