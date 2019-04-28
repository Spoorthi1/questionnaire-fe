import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswerComponent } from './question-answer.component';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { RouterModule } from '@angular/router';
import { questionsRepoRoutes } from '../question-answer.routes';
import { MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionAnswerListComponent } from '../component/question-answer-list/question-answer-list.component';
import { QuestionDetailsPreviewComponent } from '../component/question-details-preview/question-details-preview.component';
import { QuestionAnswerService } from '../services/question-answer.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

describe('QuestionAnswerComponent', () => {
  let component: QuestionAnswerComponent;
  let fixture: ComponentFixture<QuestionAnswerComponent>;
  let backend: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        CdkTableModule,
        // DataUnavailableModule,
        RouterModule.forChild(questionsRepoRoutes),
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      declarations: [QuestionAnswerComponent, QuestionAnswerListComponent, QuestionDetailsPreviewComponent],
      providers: [QuestionAnswerService]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    backend = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
