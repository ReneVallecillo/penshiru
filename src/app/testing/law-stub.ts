
import { Injectable } from '@angular/core';
import { Law } from '../models/';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable";



@Injectable()
export class LawServiceStub {
    private subject = new BehaviorSubject<Law>(this.testLaw);
    law = this.subject.asObservable();

    row: Law = {
        id: 1,
        name: 'Test Law',
        books: null,
        titles: null,
        approvalDate: new Date(),
        publishDate: new Date(),
        journal: 'Example Journal 1',
        intro: 'Veniam magna aute ex mollit ex sit sit do anim nisi.',
        init: 'Incididunt ipsum adipisicing in eu in proident veniam dolor veniam labore excepteur.',
    };

    laws: Law[] = [];


    // Test parameters
    private _testLaw: Law;
    get testLaw() { return this._testLaw; }
    set testLaw(law: Law) {
        this._testLaw = law;
        this.subject.next(law)
    }

    getLawByID(id: number): Observable<Law> {
        return this.law;
    }

    getLaws() {
        let law1 = new Law({
            id: 1,
            name: 'Test Law',
            books: null,
            titles: null,
            approvalDate: new Date(),
            publishDate: new Date(),
            journal: 'Example Journal 1',
            intro: 'Veniam magna aute ex mollit ex sit sit do anim nisi.',
            init: 'Incididunt ipsum adipisicing in eu in proident veniam dolor veniam labore excepteur.'
        });

        let law2 = new Law({
            id: 1,
            name: 'Test Law',
            books: null,
            titles: null,
            approvalDate: new Date(),
            publishDate: new Date(),
            journal: 'Example Journal 1',
            intro: 'Veniam magna aute ex mollit ex sit sit do anim nisi.',
            init: 'Incididunt ipsum adipisicing in eu in proident veniam dolor veniam labore excepteur.'
        });

        this.laws.push(law1);
        this.laws.push(law2);
        return this.laws;
    }
}