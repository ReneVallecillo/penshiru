
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';


@Injectable()
export class ActivatedRouteStub {

    // ActivatedRoute.params is Observable
    private subject = new BehaviorSubject(this.testParams);
    params = this.subject.asObservable();
    queryParams = this.subject.asObservable();

    //Fragment
    private fragmentSubject = new BehaviorSubject(this.testFragment)
    fragment = this.subject.asObservable();

    // Test parameters
    private _testParams: {};
    get testParams() { return this._testParams; }
    set testParams(params: {}) {
        this._testParams = params;
        this.subject.next(params);
    }

    private _testFragment: {};
    get testFragment() { return this._testFragment; }
    set testFragment(fragment: {}) {
        this._testFragment = fragment;
        this.subject.next(fragment);
    }
    // ActivatedRoute.snapshot.params
    get snapshot() {
        return { params: this.testParams };
    }
}