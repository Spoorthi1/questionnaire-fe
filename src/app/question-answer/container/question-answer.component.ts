import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuestionAnswerService } from '../services/question-answer.service';
import { Question, IQuestionResponse } from '../models/question';
import { Answer, IAnswerResponse, IAnswerRequest } from '../models/answer';
import { ChangeDetectionStrategy } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAnswerComponent implements OnInit {

  constructor(private questionAnswerService: QuestionAnswerService) { }

  @Output()
  sendQuestionSelected: EventEmitter<Question> = new EventEmitter<Question>();

  questionList$: Observable<Question[]>;
  answerList$: Observable<Answer[]>;
  noData = true;

 /**
  * @method ngOnInit
  * Gets the initial data(Questons and answers)
  */
  ngOnInit() {
    this.getQuestionList();
    this.getAnswersList();
  }

  /**
  * @method getQuestionList
  * Gets the Question List and returns Observable
  */
  getQuestionList = () => {
    this.questionList$ = this.questionAnswerService.getQuestionsList()
      .pipe(
        map((res: IQuestionResponse) => {
          this.noData = false;
          return res.feed_questions;
        }),
        catchError((error) => {
          console.log('Can\'t get Questions');
          return observableThrowError(error);
        })
      );
  }

  /**
  * @method getAnswersList
  * Gets the Answer List and returns Observable
  */
  getAnswersList = () => {
    this.answerList$ = this.questionAnswerService.getAnswersList()
      .pipe(
        map((res: IAnswerResponse) => {
          return res.feed_answers;
        })
      );
  }

  /**
  * @method updateVote
  * @param {Question} $event question with updated votes
  * Calls service to Update the question
  */
  updateVote = ($event: Question) => {
    this.questionAnswerService.updateUpvoteDownvote($event);
  }

  /**
  * @method saveAnswer
  * @param {IAnswerResponse} $event has new answer details
  * Calls service to save the answer
  */
  saveAnswer = ($event: IAnswerRequest) => {
    this.questionAnswerService.saveNewAnswer($event);
  }
}
