export interface Result {
    id: number;
    fragments: {
        name: string;
        content: string;
    };
    fields: {
        name: string;
        content: string;
        type: string;
        law_name: string;
    }
}
