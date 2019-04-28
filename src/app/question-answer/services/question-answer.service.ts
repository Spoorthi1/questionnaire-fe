import { Injectable } from '@angular/core';
import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as helpers from '../helpers';
import { Question, IQuestionResponse } from '../models/question';
import { Answer, IAnswerResponse, IAnswerRequest } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class QuestionAnswerService {

  constructor(private http: HttpClient) { }

  /**
  * @method getQuestionsList
  * service to get the question list
  */
  getQuestionsList = () => {
    return this.http.get<IQuestionResponse>(helpers.getQuestionsUrl)
      .pipe(
        catchError((error) => {
          console.log('Can\'t get questions');
          return observableThrowError(error);
        })
      );
  }

  /**
  * @method getAnswersList
  * Service to get the answer list
  */
  getAnswersList = () => {
    return this.http.get<IAnswerResponse>(helpers.getAnswersUrl)
      .pipe(
        catchError((error) => {
          console.log('Can\'t get Answers');
          return observableThrowError(error);
        })
      );
  }

  /**
  * @method saveNewAnswer
  * Service to save the new answer
  */
  saveNewAnswer = (answer: IAnswerRequest) => {
    // sends changes to be persisted
  }

  /**
  * @method updateUpvoteDownvote
  * Service to save the vote
  */
  updateUpvoteDownvote = (question: Question) => {
    // send changes to be persisted
  }

}
