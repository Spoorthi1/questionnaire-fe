import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question';
import { Answer, IAnswerRequest } from '../../models/answer';
import { FormGroup, FormControl } from '@angular/forms';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-question-answer-list',
  templateUrl: './question-answer-list.component.html',
  styleUrls: ['./question-answer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe]
})
export class QuestionAnswerListComponent implements OnInit {

  qList: Question[];
  aList: Answer[];
  answerForm = new FormControl('');

  /**
  * Event Emitter : When a question is clicked on that has already been answered it emits a scrollToQuestion emit
  * @param {Question[]} question Question list
  */
  @Input() set questionList(question: Question[]) {
    this.qList = question;
  }
  /**
  * Event Emitter : When a question is clicked on that has already been answered it emits a scrollToQuestion emit
  * @param {Answer[]} answer  Answer List
  */
  @Input() set answerList(answer: Answer[]) {
    this.aList = answer;
    this.aList = _.sortBy(this.aList, 'created_at').reverse();
  }

  /**
  * question with updated vote to be sent to container
  *
  * @type {EventEmitter<Question>}
  */
  @Output()
  updateVote: EventEmitter<Question> = new EventEmitter<Question>();

  /**
  * new answer for a particular question to be sent to container
  *
  * @type {EventEmitter<Question>}
  */
  @Output()
  newAnswerEntered: EventEmitter<IAnswerRequest> = new EventEmitter<IAnswerRequest>();

  newAnswer = new FormControl('');

  constructor(private date: DatePipe) { }

  ngOnInit() {
  }

  /**
	* @method updateUpvoteDownvote
	* @param questionId for which vote needs to be updated
  * @param voteFlg whose value is 0 for upvote, 1 for downvote
  * Emits the upvote or downvote for the particular question to container to be persisted
	*/
  updateUpvoteDownvote = (questionId, voteFlg) => {
    const questionIndex = this.qList.findIndex((qId) => qId.Id === questionId);
    if (voteFlg === 0) {
      this.qList[questionIndex].upvotes = this.qList[questionIndex].upvotes ?
        (Number(this.qList[questionIndex].upvotes) + 1).toString() : '1';
    } else if (voteFlg === 1) {
      this.qList[questionIndex].downvotes = this.qList[questionIndex].downvotes ?
        (Number(this.qList[questionIndex].downvotes) + 1).toString() : '1';
    }
    this.updateVote.emit(this.qList[questionIndex]);
  }

  /**
	 * @method saveAnswer
	 * @param $event contains the value of textbox which the user entered
   * @param qId question id for which the answer needs to be mapped and saved
   * Emits new answer for the particular question to container to be persisted
	 */
  saveAnswer = ($event, qId) => {
    const newAnswer = $event.currentTarget.value;
    if (newAnswer.length > 0) {
      const answer = {
        'Question-Id': qId,
        Answer: newAnswer,
        created_by: 'Anonymous',
        created_at: this.date.transform(new Date(), 'dd/MMM/yy HH:mm'),
        upvotes: '0',
        downvotes: '0'
      };
      this.newAnswerEntered.emit(answer);
      // this below answerReturned won't be required in case of persisting the answer in db
      const answerReturned = {
        Id: 'A-323',
        'Question-Id': answer['Question-Id'],
        Answer: answer.Answer,
        created_by: answer.created_by,
        created_at: answer.created_at,
        upvotes: answer.upvotes,
        downvotes: answer.downvotes
      };
      this.aList.splice(0, 0, answerReturned);
    }
  }

}
