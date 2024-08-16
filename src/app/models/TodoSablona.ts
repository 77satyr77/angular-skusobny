export type TodoStatus = 'OPEN' | 'PROGRES' | 'TESTING' | 'DONE';
export interface TodoSablona {
    id?: number;
    text: string;
    deadline: string;
    status: TodoStatus;
}