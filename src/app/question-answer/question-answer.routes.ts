import { Routes } from '@angular/router';
import { QuestionAnswerComponent } from './container/question-answer.component';
import { QuestionDetailsPreviewComponent } from './component/question-details-preview/question-details-preview.component';

export const questionsRepoRoutes: Routes = [
    {
        path: 'questions-repo',
        component: QuestionAnswerComponent
    },
    {
        path: 'questions-repo/question-details/:id',
        component: QuestionDetailsPreviewComponent
    },
];


