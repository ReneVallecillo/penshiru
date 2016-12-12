import {Title} from './title.model';

export class Law{
    
    constructor(
        public id: number,
        public name: string,
        public titles: Title[],
        public approvalDate: Date,
        public publishData: Date,
        public journal: string,
        public intro: string
    ){}
    
    static fromJson(json:string){
        var data = JSON.parse(json);
        return new Law(
            data.id, 
            data.name, 
            data.titles, 
            data.approvalDate,
            data.publishData,
            data.journal,
            data.intro)
    }

    
    
}