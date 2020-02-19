import { Component } from '@angular/core';
import { AXDataSourceReadParams } from '@acorex/components';
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'acorex-framework';

  dataSource: any[] = [
    { id: "1", title: "Same Title 1", number: 1000 },
    { id: "2", title: "Same Title 2", number: 2000 },
    { id: "3", title: "Same Title 3", number: 3000 },
    { id: "4", title: "Same Title 4", number: 4000 }
  ];


  selectedValues: any[] = ['2', '4'];

  handleDataReceived = (e: AXDataSourceReadParams) => {
    return new Promise((resolve, reject) => {
      resolve(this.dataSource);
    });
  }

}
