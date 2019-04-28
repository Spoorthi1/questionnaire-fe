import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionAnswerComponent } from './container/question-answer.component';
import { RouterModule } from '@angular/router';
import { questionsRepoRoutes } from './question-answer.routes';

import { CdkTableModule } from '@angular/cdk/table';
import { QuestionAnswerListComponent } from './component/question-answer-list/question-answer-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { QuestionDetailsPreviewComponent } from './component/question-details-preview/question-details-preview.component';
import { MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        CdkTableModule,
        RouterModule.forChild(questionsRepoRoutes),
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    exports: [
    ],
    declarations: [QuestionAnswerComponent, QuestionAnswerListComponent, QuestionDetailsPreviewComponent]
})
export class QuestionsRepoModule { }
