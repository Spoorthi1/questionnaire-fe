export interface Question {
    Id: string;
    Text: string;
    upvotes?: string;
    downvotes?: string;
}

export interface IQuestionResponse {
    feed_questions: Question[];
}
