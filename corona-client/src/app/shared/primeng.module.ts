import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {TreeModule} from 'primeng/tree';
import {ChartModule} from 'primeng/chart';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {FilterService, MessageService, SharedModule} from 'primeng/api';
import {MessageModule} from 'primeng/message';
import {TooltipModule} from 'primeng/tooltip';
import {SpinnerModule} from 'primeng/spinner';
import {MenubarModule} from 'primeng/menubar';
import {TabViewModule} from 'primeng/tabview';
import {SidebarModule} from 'primeng/sidebar';
import {TabMenuModule} from 'primeng/tabmenu';
import {CheckboxModule} from 'primeng/checkbox';
import {CarouselModule} from 'primeng/carousel';
import {MessagesModule} from 'primeng/messages';
import {TreeTableModule} from 'primeng/treetable';
import {AccordionModule} from 'primeng/accordion';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';
import {KeyFilterModule} from 'primeng/keyfilter';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {SlideMenuModule} from 'primeng/slidemenu';
import {InputSwitchModule} from 'primeng/inputswitch';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MultiSelectModule} from 'primeng/multiselect';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {SelectButtonModule} from 'primeng/selectbutton';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
    imports: [
      MenuModule,
      TreeModule,
      CardModule,
      ChartModule,
      ToastModule,
      TableModule,
      PanelModule,
      CommonModule,
      DialogModule,
      SharedModule,
      ButtonModule,
      MessageModule,
      TooltipModule,
      SpinnerModule,
      MenubarModule,
      SidebarModule,
      TabViewModule,
      TabMenuModule,
      CheckboxModule,
      CarouselModule,
      MessagesModule,
      TreeTableModule,
      AccordionModule,
      PaginatorModule,
      InputTextModule,
      KeyFilterModule,
      SlideMenuModule,
      TieredMenuModule,
      FileUploadModule,
      InputSwitchModule,
      RadioButtonModule,
      MultiSelectModule,
      SelectButtonModule,
      AutoCompleteModule,
      OverlayPanelModule,
      ToggleButtonModule,
      DropdownModule,
      ProgressSpinnerModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    ToastModule,
    MenuModule,
    MenubarModule,
    SharedModule,
    ChartModule,
    CarouselModule,
    CheckboxModule,
    DialogModule,
    TooltipModule,
    PaginatorModule,
    RadioButtonModule,
    ButtonModule,
    InputTextModule,
    InputSwitchModule,
    SelectButtonModule,
    TableModule,
    TreeTableModule,
    KeyFilterModule,
    MessageModule,
    MessagesModule,
    SidebarModule,
    SlideMenuModule,
    TieredMenuModule,
    FileUploadModule,
    MultiSelectModule,
    TabMenuModule,
    AutoCompleteModule,
    CardModule,
    PanelModule,
    AccordionModule,
    OverlayPanelModule,
    SpinnerModule,
    TabViewModule,
    TreeModule,
    DropdownModule,
    ProgressSpinnerModule,
    ToggleButtonModule
  ],
  providers: [
    MessageService,
    FilterService
  ]
})
export class PrimengModule { }
