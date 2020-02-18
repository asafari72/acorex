import {
  Component,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  NgZone,
  ViewChild,
  ChangeDetectorRef,
  ContentChild,
  TemplateRef
} from "@angular/core";
import { AXToolbarItem } from "../toolbar-item";
import { AXMenuComponent } from "../../menu/menu.component";
import { AXMenuItem } from '../../../core';

@Component({
  selector: "ax-toolbar-menu",
  templateUrl: "./toolbar-menu.component.html",
  providers: [{ provide: AXToolbarItem, useExisting: AXToolbarMenuComponent }],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AXToolbarMenuComponent extends AXToolbarItem {
  constructor(
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  @ViewChild('menu', { static: true }) menu: AXMenuComponent

  @Output()
  itemClick: EventEmitter<AXMenuItem> = new EventEmitter<AXMenuItem>();

  @ContentChild(TemplateRef, { static: true })
  _contentMenuTemplate: TemplateRef<any>;


  private _menuTemplate: TemplateRef<any>;
  @Input()
  public get menuTemplate(): TemplateRef<any> {
    return this._menuTemplate ? this._menuTemplate : this._contentMenuTemplate;
  }
  public set menuTemplate(v: TemplateRef<any>) {
    this._menuTemplate = v;
  }


  @Input()
  public selection: "none" | "single" | "multiple" = "none";

  private _items: AXMenuItem[];
  @Input()
  public get items(): AXMenuItem[] {
    return this._items;
  }
  public set items(v: AXMenuItem[]) {
    this._items = v;
    this.update();
  }


  onItemClick(item?: AXMenuItem) {
    this.itemClick.emit(item);
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }

  ngOnDestroy(): void {

  }

  public close(): void {
    this.menu.close();
  }

  update() {
    this.menu.update();
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }


}
