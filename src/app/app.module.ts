import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionAnswerListComponent } from './question-answer/component/question-answer-list/question-answer-list.component';
import { QuestionAnswerComponent } from './question-answer/container/question-answer.component';
import { questionnaireRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatSelectModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { QuestionDetailsPreviewComponent } from './question-answer/component/question-details-preview/question-details-preview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

    QuestionAnswerListComponent,
    QuestionAnswerComponent,
    QuestionDetailsPreviewComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule.forRoot(
      questionnaireRoutes
    ),
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ],
})
export class AppModule { }
