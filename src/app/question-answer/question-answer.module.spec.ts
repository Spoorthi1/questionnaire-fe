import { QuestionsRepoModule } from './question-answer.module';

describe('QuestionAnswerModule', () => {
  let questionAnswerModule: QuestionsRepoModule;

  beforeEach(() => {
    questionAnswerModule = new QuestionsRepoModule();
  });

  it('should create an instance', () => {
    expect(questionAnswerModule).toBeTruthy();
  });
});
