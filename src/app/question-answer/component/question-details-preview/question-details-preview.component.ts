import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { Question, IQuestionResponse } from '../../models/question';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { map, filter, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-question-details-preview',
  templateUrl: './question-details-preview.component.html',
  styleUrls: ['./question-details-preview.component.scss']
})
export class QuestionDetailsPreviewComponent implements OnInit {

  questionId: string;
  question$: Observable<Question>;
  noData = true;
  constructor(private route: ActivatedRoute,
    private questionAnswerService: QuestionAnswerService) { }

  /**
  * @method ngOnInit
  * Gets the initial data and route parameter which is question id
  */
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.questionId = params['id'];
      console.log(this.questionId);
    });

    if (this.questionId) {
      this.getQuestion(this.questionId);
    }
  }

  /**
  * @method getQuestion
  * @param $event contains the value of textbox which the user entered
  * @param questionId question id for which the details of the question needs to be displayed
  * Gets all the questions and gets the question which matches the question id.
  * We could avoid getting all questions if we had an endpoint to get question with question id
  */
  getQuestion = (questionId) => {
    this.question$ = this.questionAnswerService.getQuestionsList()
      .pipe(
        map((res) => {
          const question = res.feed_questions.find((eachquestion) => eachquestion.Id === questionId);
          if (question) {
            this.noData = false;
          }
          return question;
        }),
        catchError((error) => {
          console.log('Can\'t get Questions');
          return observableThrowError(error);
        })
      );
  }

}
