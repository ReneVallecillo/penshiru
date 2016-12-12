
export class Article{
        
    constructor(
        public id:number, 
        public name: string,
        public text: string,
        public chapterID: number,
        public type: string = 'article'){      
    }
    
    static fromJson(json:string){
        var data = JSON.parse(json);
        return new Article(data.id, data.name, data.text, data.chapterID)
    }
}