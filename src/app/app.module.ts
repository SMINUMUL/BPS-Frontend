import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitlesListComponent } from './components/titles/titles-list/titles-list.component';
import { PublishersListComponent } from './components/publishers/publishers-list/publishers-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TitleDashboardComponent } from './components/titles/title-dashboard/title-dashboard.component';
import { Top5TitlesComponent } from './components/titles/top-5-titles/top-5-titles.component';
import { Top5ExpensiveComponent } from './components/titles/top-5-expensive/top-5-expensive.component';
import { TitleDropdownsComponent } from './components/titles/title-dropdowns/title-dropdowns.component';
import { TitleViewComponent } from './components/titles/title-view/title-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminViewComponent } from './admin-components/admin-view/admin-view.component';
import { AdminHeaderComponent } from './admin-components/admin-header/admin-header.component';
import { AdminListComponent } from './admin-components/admin-list/admin-list.component';
import { AddTitleComponent } from './admin-components/add-title/add-title.component';
import { UpdateTitleComponent } from './admin-components/update-title/update-title.component';
import { AuthorsByCityComponent } from './components/authors/authors-by-city/authors-by-city.component';
import { AuthorsByFnameComponent } from './components/authors/authors-by-fname/authors-by-fname.component';
import { AuthorsByLastnameComponent } from './components/authors/authors-by-lastname/authors-by-lastname.component';
import { AuthorsByPhoneComponent } from './components/authors/authors-by-phone/authors-by-phone.component';
import { AuthorsByStateComponent } from './components/authors/authors-by-state/authors-by-state.component';
import { AuthorsByZipcodeComponent } from './components/authors/authors-by-zipcode/authors-by-zipcode.component';
import { AuthorsListComponent } from './components/authors/authors-list/authors-list.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EmployeeFirstnameComponent } from './components/employees/employee-firstname/employee-firstname.component';
import { EmployeeHiredateComponent } from './components/employees/employee-hiredate/employee-hiredate.component';
import { EmployeePubidComponent } from './components/employees/employee-pubid/employee-pubid.component';
import { EmployeeLastnameComponent } from './components/employees/employee-lastname/employee-lastname.component';
import { EmployeeViewIdComponent } from './components/employees/employee-view-id/employee-view-id.component';
import { PublishesCityComponent } from './components/publishers/publishes-city/publishes-city.component';
import { PublishesCountryComponent } from './components/publishers/publishes-country/publishes-country.component';
import { PublishesIdComponent } from './components/publishers/publishes-id/publishes-id.component';
import { PublishesNameComponent } from './components/publishers/publishes-name/publishes-name.component';
import { PublishesStateComponent } from './components/publishers/publishes-state/publishes-state.component';
import { PubinfoListComponent } from './components/publishers/pubinfo-list/pubinfo-list.component';
import { JobListComponent } from './components/job/job-list/job-list.component';
import { JobIdComponent } from './components/job/job-id/job-id.component';
import { JobMaxlevelComponent } from './components/job/job-maxlevel/job-maxlevel.component';
import { JobMinlevelComponent } from './components/job/job-minlevel/job-minlevel.component';
import { StoreByCityComponent } from './components/stores/store-by-city/store-by-city.component';
import { StoreByIdComponent } from './components/stores/store-by-id/store-by-id.component';
import { StoreByNameComponent } from './components/stores/store-by-name/store-by-name.component';
import { StoreByZipComponent } from './components/stores/store-by-zip/store-by-zip.component';
import { StoresListComponent } from './components/stores/stores-list/stores-list.component';
import { SalesListComponent } from './components/sales/sales-list/sales-list.component';
import { SalesByDateComponent } from './components/sales/sales-by-date/sales-by-date.component';
import { SalesByIdComponent } from './components/sales/sales-by-id/sales-by-id.component';
import { SalesByStoreidComponent } from './components/sales/sales-by-storeid/sales-by-storeid.component';
import { SalesByTitleidComponent } from './components/sales/sales-by-titleid/sales-by-titleid.component';
import { AddEmployeeComponent } from './admin-components/add-employee/add-employee.component';
import { AddStoreComponent } from './admin-components/add-store/add-store.component';
import { AdminPublisherListComponent } from './admin-components/admin-publisher-list/admin-publisher-list.component';
import { PublisherAddComponent } from './admin-components/publisher-add/publisher-add.component';
import { PublisherUpdateComponent } from './admin-components/publisher-update/publisher-update.component';
import { AdminPubinfoListComponent } from './admin-components/admin-pubinfo-list/admin-pubinfo-list.component';
import { AdminPubinfoUpdateComponent } from './admin-components/admin-pubinfo-update/admin-pubinfo-update.component';
import { AddSalesComponent } from './admin-components/add-sales/add-sales.component';
import { AddAuthorComponent } from './admin-components/add-author/add-author.component';
import { AddJobComponent } from './admin-components/add-job/add-job.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlesListComponent,
    PublishersListComponent,
    LandingPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    TitleDashboardComponent,
    Top5TitlesComponent,
    Top5ExpensiveComponent,
    TitleDropdownsComponent,
    TitleViewComponent,
    UpdateTitleComponent,
    AddTitleComponent,
    AdminViewComponent,
    AdminHeaderComponent,
    AdminListComponent,
    AuthorsByCityComponent,
    AuthorsByFnameComponent,
    AuthorsByLastnameComponent,
    AuthorsByPhoneComponent,
    AuthorsByStateComponent,
    AuthorsByZipcodeComponent,
    AuthorsListComponent,
    EmployeeListComponent,
    EmployeeFirstnameComponent,
    EmployeeHiredateComponent,
    EmployeePubidComponent,
    EmployeeLastnameComponent,
    EmployeeViewIdComponent,
    PublishesCityComponent,
    PublishesCountryComponent,
    PublishesIdComponent,
    PublishesNameComponent,
    PublishesStateComponent,
    PubinfoListComponent,
    JobListComponent,
    JobIdComponent,
    JobMaxlevelComponent,
    JobMinlevelComponent,
    StoreByCityComponent,
    StoreByIdComponent,
    StoreByNameComponent,
    StoreByZipComponent,
    StoresListComponent,
    SalesListComponent,
    SalesByDateComponent,
    SalesByIdComponent,
    SalesByStoreidComponent,
    SalesByTitleidComponent,
    AddEmployeeComponent,
    AddStoreComponent,
    AdminPublisherListComponent,
    PublisherAddComponent,
    PublisherUpdateComponent,
    AdminPubinfoListComponent,
    AdminPubinfoUpdateComponent,
    AddSalesComponent,
    AddAuthorComponent,
    AddJobComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
