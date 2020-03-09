import { OnInit, Component } from '@angular/core';

@Component({
    templateUrl: './tree-view.page.html'
})

export class TreeView implements OnInit {

    constructor() { }



    gridDataRoot: any = [
        {
            title: 'childless',
            childeren: [
                {
                    title: 'sdsfs1',
                    childeren: [{ title: 'childless11' }]
                }
            ]
        },
        {
            title: 'childless grandsibiling',
            childeren: [
                {
                    title: 'sdsfs2',
                    childeren: [{ title: 'childless22' }]
                }
            ]
        },
        {
            title: 'childless sibiling',
            childeren: [
                {
                    title: 'sdsfs3',
                    childeren: [{ title: 'childless33' }]
                }
            ]
        },
        {
            title: 'another childless sibiling',
            childeren: [
                {
                    title: 'sdsfs4',
                    childeren: [{ title: 'childless44' }]
                }
            ]
        },
        {
            title: 'parent',
            childeren: [
                {
                    title: 'sdsfs5',
                    childeren: [{ title: 'childless55' }]
                }
            ]
        },
        {
            title: 'another parent',
            childeren: [
                {
                    title: 'sdsfs6',
                    childeren: [{ title: 'childless66' }]
                }
            ]
        },
        {
            title: 'another grandparent',
            childeren: [
                {
                    title: 'sdsfs7',
                    childeren: [{ title: 'childless77' }]
                }
            ]
        }
        ,
        {
            title: 'parent',
            childeren: [
                {
                    title: 'sdsfs8',
                    childeren: [{ title: 'childless88' }]
                }
            ]
        }
    ];

    provideData = (e) => {
        // debugger
        // if (e.groupKeys.length === 0) {
        return new Promise((resolve) => {
            resolve(this.gridDataRoot);
        });
        //     } else {
        //         return new Promise((resolve) => {
        //             resolve(this.gridDataChild);
        //         });
        //     }
    };

    ngOnInit() {
    }
}