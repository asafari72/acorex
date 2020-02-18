import { Component, OnInit } from '@angular/core';
import { AXPopupService, AXDialogService } from '@acorex/components';
import { InputPage } from '../input/input.page';

@Component({
    templateUrl: './popup.page.html',
    styleUrls: ['./popup.page.scss']
})
export class PopupPage implements OnInit {
    constructor(private popup: AXPopupService, private dialog: AXDialogService) { }

    ngOnInit(): void { }
    onOpenPopupClick() {
        this.popup.open(InputPage, 'Input Demo');
    }
    onOpenDialogClick() {
        this.dialog.alert(
            'Dialog Title',
            `Lorem ipsum, or lipsum as it is sometimes known,
            is dummy text used in laying out print, graphic or
            web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to
            have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.`);
    }
}
