import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../theme/components/header/header.component';
import { FooterComponent } from '../theme/components/footer/footer.component';
import { SidebarComponent } from '../theme/components/sidebar/sidebar.component';
import { VerticalMenuComponent } from '../theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from '../theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from '../theme/components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from '../theme/components/back-top/back-top.component';
// import { UserMenuComponent } from '../theme/components/user-menu/user-menu.component';
// import { BlankComponent } from './blank/blank.component';
// import { SearchComponent } from './search/search.component';
// import { NumberOnlyDirective } from './common-directive/number.directive';
import { AboutComponent } from './about/about.component';
import { GridComponent } from './grid/grid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerPopupModule } from './common-component/ngb-date-picker/datepicker-popup.module';


@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    // PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    PagesRoutingModule,
    NgbModule,
    NgbDatepickerPopupModule
  ],
  providers:[],
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    BackTopComponent,
    //GridComponent,
    // UserMenuComponent,
    // BlankComponent,
    // SearchComponent,
    // AboutComponent
  ],
  // exports: [NumberOnlyDirective]
})
export class PagesModule { }
