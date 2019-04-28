import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDetailsPreviewComponent } from './question-details-preview.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

describe('QuestionDetailsPreviewComponent', () => {
    let component: QuestionDetailsPreviewComponent;
    let fixture: ComponentFixture<QuestionDetailsPreviewComponent>;
    let backend: HttpTestingController;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientModule,
                HttpClientTestingModule
            ],
            declarations: [QuestionDetailsPreviewComponent],
            providers: []
        })
            .compileComponents();
    }));
    beforeEach(() => {
        backend = TestBed.get(HttpTestingController);
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(QuestionDetailsPreviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
