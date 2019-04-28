import { Routes } from '@angular/router';
import { QuestionDetailsPreviewComponent } from './question-answer/component/question-details-preview/question-details-preview.component';
import { QuestionAnswerListComponent } from './question-answer/component/question-answer-list/question-answer-list.component';
import { QuestionAnswerComponent } from './question-answer/container/question-answer.component';

export const questionnaireRoutes: Routes = [
    {
        path: 'questions-repo',
        component: QuestionAnswerComponent,
    },
    {
        path: 'question-details/:id',
        component: QuestionDetailsPreviewComponent
    },
    { path: '', redirectTo: 'questions-repo', pathMatch: 'full' },
];
