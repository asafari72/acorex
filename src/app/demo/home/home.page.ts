import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage {

    items: any[] = [];
    constructor(private router: Router) {
        const _routes = router.config;
        _routes.forEach(i => {
            if (i.path !== '' && i.path !== 'home') {
                this.items.push(i);
            }
        });
    }
    onItemClick(item) {
        // tslint:disable-next-line: no-string-literal
        // tslint:disable-next-line: no-unused-expression
        this.router.navigate([item.path]);
    }
}
