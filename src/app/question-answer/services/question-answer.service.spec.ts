import { TestBed } from '@angular/core/testing';

import { QuestionAnswerService } from './question-answer.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

describe('QuestionAnswerService', () => {
  let backend: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [QuestionAnswerService]
    });
  });
  beforeEach(() => {
    backend = TestBed.get(HttpTestingController);
  });
  it('should be created', () => {
    const service: QuestionAnswerService = TestBed.get(QuestionAnswerService);
    expect(service).toBeTruthy();
  });
});
