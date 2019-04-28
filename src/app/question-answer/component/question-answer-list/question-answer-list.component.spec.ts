import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswerListComponent } from './question-answer-list.component';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { RouterModule } from '@angular/router';
import { questionsRepoRoutes } from '../../question-answer.routes';
import { MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionAnswerComponent } from '../../container/question-answer.component';
import { QuestionDetailsPreviewComponent } from '../question-details-preview/question-details-preview.component';
import { QuestionAnswerService } from '../../services/question-answer.service';

describe('QuestionAnswerListComponent', () => {
  let component: QuestionAnswerListComponent;
  let fixture: ComponentFixture<QuestionAnswerListComponent>;

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
        ReactiveFormsModule
      ],
      declarations: [QuestionAnswerComponent, QuestionAnswerListComponent, QuestionDetailsPreviewComponent],
      providers: [QuestionAnswerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAnswerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
