import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from "@angular/material/expansion";
import {IconifyIconComponent} from 'iconify-icon';
import {NgxIconify} from 'ngx-iconify';
import {IconifyIcon} from "iconify-icon";
import {IconifyAPIModule} from "iconify-icon";
import {MatIcon} from "@angular/material/icon";
import {MatButtonToggle} from "@angular/material/button-toggle";
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import {MediaMatcher} from "@angular/cdk/layout";


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatToolbar,
    MatIconButton,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatAccordion,
    MatExpansionPanel,
    NgxIconify,
    MatIconButton,
    MatIcon,
    MatButtonToggle,
    MatToolbarRow,
    MatButton
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
