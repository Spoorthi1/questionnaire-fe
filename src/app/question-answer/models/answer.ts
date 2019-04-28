export interface Answer {
    Id: string;
    'Question-Id': string;
    Answer: string;
    upvotes: string;
    downvotes: string;
    created_at: string;
    created_by: any;
}

export interface User {
    Id: string;
    Name: string;
    Surname: string;
    Avatar: string;
}

export interface IAnswerResponse {
    feed_answers: Answer[];
}

export interface IAnswerRequest {
    'Question-Id': string;
    Answer: string;
    upvotes: string;
    downvotes: string;
    created_at: string;
    created_by: any;
}
