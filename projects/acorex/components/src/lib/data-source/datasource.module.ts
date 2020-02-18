import { NgModule } from '@angular/core';
import { AXDataSourceComponent } from './datasource.component';
import { AXHttpModule } from '@acorex/core';

@NgModule({
    declarations: [AXDataSourceComponent],
    imports: [AXHttpModule],
    exports: [AXDataSourceComponent],
    providers: [],
})
export class AXDataSourceModule { }