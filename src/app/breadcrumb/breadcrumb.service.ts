import { Injectable } from '@angular/core';
import {IBreadcrumb} from "./breadcrumb.model";
import {Observable, Observer, Subject} from "rxjs";
import { SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class BreadcrumbService {

    private breadcrumbs:IBreadcrumb[];
    private prefixedBreadcrumbs:IBreadcrumb[] = [];
    public breadcrumbsSource:Subject<IBreadcrumb[]>;
    public breadcrumbsChanged$:Observable<IBreadcrumb[]>;

    constructor(private session: SessionStorageService) {
        this.breadcrumbs = [];
        this.breadcrumbsSource = new Subject<IBreadcrumb[]>();
        this.breadcrumbsChanged$ = this.breadcrumbsSource.asObservable();

        if(this.session.retrieve('prefixedBreadcrumbs') != null) {
            this.prefixedBreadcrumbs = (JSON.parse(this.session.retrieve('prefixedBreadcrumbs')))
        }
    }

    //Store the breadcrumbs of the current route
    public store(breadcrumbs:IBreadcrumb[]) {
        this.breadcrumbs = breadcrumbs;

        let allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);

    }


    // Add a prefixed breadcrumb
    public storePrefixed(breadcrumb:IBreadcrumb) {
        this.storeIfUnique(breadcrumb);
        this.session.store('prefixedBreadcrumbs', JSON.stringify(this.prefixedBreadcrumbs));
        let allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);

    }


    //Return the breadcrumbs
    public get() {
        return this.breadcrumbsChanged$
    }



    // storeIfUnique checks if there are any duplicate prefixed breadcrumbs
    private storeIfUnique(newBreadcrumb:IBreadcrumb) {
        let isUnique = true;
        for(let crumb of this.prefixedBreadcrumbs) {
            if (newBreadcrumb.url == crumb.url) {
                isUnique = false;
                break;
            }
        }
        if(isUnique) {
            this.prefixedBreadcrumbs.push(newBreadcrumb);
        }

    }

}