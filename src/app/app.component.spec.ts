import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { QuestionAnswerListComponent } from './question-answer/component/question-answer-list/question-answer-list.component';
import { QuestionAnswerComponent } from './question-answer/container/question-answer.component';
import { QuestionDetailsPreviewComponent } from './question-answer/component/question-details-preview/question-details-preview.component';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatToolbarModule, MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule,
  MatSelectModule, MatInputModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { questionnaireRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let app: any;
  let componentElement: HTMLElement;
  let fixture: any;

  const mock_app_title = 'questionnaire';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        QuestionAnswerListComponent,
        QuestionAnswerComponent,
        QuestionDetailsPreviewComponent
      ],
      imports: [
        MatToolbarModule,
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
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule,
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    componentElement = fixture.nativeElement;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

});
