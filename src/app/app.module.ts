import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatStepperModule} from "@angular/material/stepper";
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule, NativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {CommonModule} from "@angular/common";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatRadioModule} from "@angular/material/radio";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSortModule} from "@angular/material/sort";
import {MatChipsModule} from "@angular/material/chips";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTabsModule} from "@angular/material/tabs";
import {MatExpansionModule} from "@angular/material/expansion";
import {FlexLayoutModule} from "@angular/flex-layout";
import { HomeComponent } from './component/home/home.component';


const _materialModule = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule,
  MatCheckboxModule,
  MatCardModule,
  MatSnackBarModule,
  NativeDateModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  CommonModule,
  MatDialogModule,
  MatSlideToggleModule,
  HttpClientModule,
  RouterModule,
  MatChipsModule,
  MatPaginatorModule,
  ReactiveFormsModule,
  FormsModule,
  MatButtonToggleModule,
  MatSortModule,
  MatTooltipModule,
  MatRadioModule,
  DragDropModule,
  DragDropModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatExpansionModule,
  FlexLayoutModule,

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    _materialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
