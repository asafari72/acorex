import {
  Component,
  Input,
  EventEmitter,
  ViewChild,
  ViewContainerRef,
  OnInit,
  ComponentFactoryResolver,
  ViewEncapsulation,
  HostListener,
  ElementRef,
  ComponentRef,
  OnDestroy,
  ChangeDetectorRef,
  NgZone,
  Output
} from '@angular/core';
import { ClosingEventArgs } from './popup.events';
import { AXBaseComponent, AXBaseSizableComponent } from '../../core';
export interface PopupHeaderButtons {
  id: string;
  title: string;
  icon: string;
  name: string;
}
@Component({
  selector: 'ax-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AXPopupComponent extends AXBaseComponent implements OnInit, OnDestroy {
  constructor(private resolver: ComponentFactoryResolver) {
    super();
  }
  ngOnInit(): void {
    const factory = this.resolver.resolveComponentFactory(this.content);
    this.comRef = this.popupBody.createComponent(factory);
    const com = this.comRef.instance as any;
    if (com.closeEvent) {
      com.closeEvent.subscribe((e: ClosingEventArgs) => {
        this.close.emit(e);
      });
    }
    this.content = com;
    Object.assign(this.content, this.data);
  }
  @ViewChild('popupBody', { read: ViewContainerRef, static: true })
  private popupBody: ViewContainerRef;

  @ViewChild('container', { static: true })
  private container: ElementRef;

  @HostListener('keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (this.closable) { this.onCloseClick(); }
  }

  private comRef: ComponentRef<any>;

  title: string;

  close: EventEmitter<ClosingEventArgs> = new EventEmitter<ClosingEventArgs>();

  size: 'sm' | 'md' | 'lg' | 'full' = 'sm';

  data: any = {};

  maximizable: boolean = false;

  closable: boolean = true;

  content: any;

  @Output()
  onButtonsClick: EventEmitter<PopupHeaderButtons> = new EventEmitter<PopupHeaderButtons>();

  @Input()
  headerButtons: PopupHeaderButtons[] = [];

  onCloseClick() {
    this.close.emit({ cancel: false });
  }

  ngAfterViewInit() {
    this.focus();
  }

  ngOnDestroy() {
    if (this.comRef) { this.comRef.destroy(); }
  }

  focus() {
    setTimeout(() => this.container.nativeElement.focus());
  }

  onFullScreen() { }

  handleHeaderButtonClick(e) {
    this.onButtonsClick.emit(e);
  }
}
